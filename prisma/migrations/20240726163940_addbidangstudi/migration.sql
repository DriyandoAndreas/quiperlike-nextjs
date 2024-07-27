/*
  Warnings:

  - Added the required column `bidang_studi` to the `prodi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `prodi` ADD COLUMN `bidang_studi` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `bidangStudi` (
    `id` INTEGER NOT NULL,
    `nama_bidang_studi` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
