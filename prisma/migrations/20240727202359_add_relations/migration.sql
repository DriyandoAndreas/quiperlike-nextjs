/*
  Warnings:

  - You are about to drop the column `nama_alasan` on the `kategori_alasan_memilih_prodi` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nama_kategori]` on the table `kategori_alasan_memilih_prodi` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nama_kategori` to the `kategori_alasan_memilih_prodi` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `prodi` DROP FOREIGN KEY `prodi_kategori_alasan_fkey`;

-- DropIndex
DROP INDEX `kategori_alasan_memilih_prodi_nama_alasan_key` ON `kategori_alasan_memilih_prodi`;

-- AlterTable
ALTER TABLE `kategori_alasan_memilih_prodi` DROP COLUMN `nama_alasan`,
    ADD COLUMN `nama_kategori` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `kategori_alasan_memilih_prodi_nama_kategori_key` ON `kategori_alasan_memilih_prodi`(`nama_kategori`);

-- AddForeignKey
ALTER TABLE `prodi` ADD CONSTRAINT `prodi_kategori_alasan_fkey` FOREIGN KEY (`kategori_alasan`) REFERENCES `kategori_alasan_memilih_prodi`(`nama_kategori`) ON DELETE RESTRICT ON UPDATE CASCADE;
