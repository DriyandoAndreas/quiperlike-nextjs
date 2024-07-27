/*
  Warnings:

  - Added the required column `status_kampus` to the `kampus_terkait` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url_kampus` to the `kampus_terkait` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `kampus_terkait` ADD COLUMN `status_kampus` VARCHAR(255) NOT NULL,
    ADD COLUMN `url_kampus` VARCHAR(255) NOT NULL;
