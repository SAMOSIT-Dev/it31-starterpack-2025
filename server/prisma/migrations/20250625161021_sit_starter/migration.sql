/*
  Warnings:

  - A unique constraint covering the columns `[room_name]` on the table `rooms` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `rooms_room_name_key` ON `rooms`(`room_name`);
