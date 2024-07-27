/*
  Warnings:

  - A unique constraint covering the columns `[kategori_kampus]` on the table `kampus` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[kategori_kampus]` on the table `prodi` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `kategori_kampus` to the `kampus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kategori_kampus` to the `prodi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `kampus` ADD COLUMN `kategori_kampus` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `prodi` ADD COLUMN `kategori_kampus` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `kategori_kampus` (
    `kategori_kampus_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kategori` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `kategori_kampus_nama_kategori_key`(`nama_kategori`),
    PRIMARY KEY (`kategori_kampus_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `kampus_kategori_kampus_key` ON `kampus`(`kategori_kampus`);

-- CreateIndex
CREATE UNIQUE INDEX `prodi_kategori_kampus_key` ON `prodi`(`kategori_kampus`);

-- CreateIndex
CREATE INDEX `prodi_kategori_kampus_idx` ON `prodi`(`kategori_kampus`);

-- AddForeignKey
ALTER TABLE `prodi` ADD CONSTRAINT `prodi_kategori_kampus_fkey` FOREIGN KEY (`kategori_kampus`) REFERENCES `kategori_kampus`(`nama_kategori`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `kampus` ADD CONSTRAINT `kampus_kategori_kampus_fkey` FOREIGN KEY (`kategori_kampus`) REFERENCES `kategori_kampus`(`nama_kategori`) ON DELETE RESTRICT ON UPDATE CASCADE;
