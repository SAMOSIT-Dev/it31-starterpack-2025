/*
  Warnings:

  - You are about to alter the column `user_id` on the `friends` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `friend_id` on the `friends` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(11)` to `Int`.
  - A unique constraint covering the columns `[studentId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `studentId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `friends` DROP FOREIGN KEY `friends_ibfk_1`;

-- DropForeignKey
ALTER TABLE `friends` DROP FOREIGN KEY `friends_ibfk_2`;

-- AlterTable
ALTER TABLE `friends` MODIFY `user_id` INTEGER NULL,
    MODIFY `friend_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    ADD COLUMN `studentId` VARCHAR(11) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `users_studentId_key` ON `users`(`studentId`);

-- AddForeignKey
ALTER TABLE `friends` ADD CONSTRAINT `friends_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `friends` ADD CONSTRAINT `friends_ibfk_2` FOREIGN KEY (`friend_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
