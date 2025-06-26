-- AlterTable
ALTER TABLE `users` ADD COLUMN `discord_username` VARCHAR(50) NULL,
    ADD COLUMN `facebook_url` VARCHAR(50) NULL,
    ADD COLUMN `instagram_url` VARCHAR(50) NULL,
    ADD COLUMN `profile_picture_url` TEXT NULL;
