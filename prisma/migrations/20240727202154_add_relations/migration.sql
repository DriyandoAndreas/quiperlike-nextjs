/*
  Warnings:

  - A unique constraint covering the columns `[nama_alasan]` on the table `kategori_alasan_memilih_prodi` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[kategori_alasan]` on the table `prodi` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `prodi` DROP FOREIGN KEY `prodi_kategori_alasan_fkey`;

-- AlterTable
ALTER TABLE `prodi` MODIFY `kategori_alasan` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `kategori_alasan_memilih_prodi_nama_alasan_key` ON `kategori_alasan_memilih_prodi`(`nama_alasan`);

-- CreateIndex
CREATE UNIQUE INDEX `prodi_kategori_alasan_key` ON `prodi`(`kategori_alasan`);

-- AddForeignKey
ALTER TABLE `prodi` ADD CONSTRAINT `prodi_kategori_alasan_fkey` FOREIGN KEY (`kategori_alasan`) REFERENCES `kategori_alasan_memilih_prodi`(`nama_alasan`) ON DELETE RESTRICT ON UPDATE CASCADE;
