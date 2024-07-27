/*
  Warnings:

  - You are about to drop the column `kategori_kampus` on the `kampus` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `kampus` DROP FOREIGN KEY `kampus_kategori_kampus_fkey`;

-- AlterTable
ALTER TABLE `kampus` DROP COLUMN `kategori_kampus`;

-- CreateTable
CREATE TABLE `kampus_terkait` (
    `kampus_terkait_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kampus` VARCHAR(255) NOT NULL,
    `kategori_kampus` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `kampus_terkait_kategori_kampus_key`(`kategori_kampus`),
    PRIMARY KEY (`kampus_terkait_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `kampus_terkait` ADD CONSTRAINT `kampus_terkait_kategori_kampus_fkey` FOREIGN KEY (`kategori_kampus`) REFERENCES `kategori_kampus`(`nama_kategori`) ON DELETE RESTRICT ON UPDATE CASCADE;
