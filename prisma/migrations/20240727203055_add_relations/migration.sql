/*
  Warnings:

  - A unique constraint covering the columns `[nama_bidang_studi]` on the table `bidang_studi` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `prodi` DROP FOREIGN KEY `prodi_bidang_studi_fkey`;

-- AlterTable
ALTER TABLE `prodi` MODIFY `bidang_studi` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `bidang_studi_nama_bidang_studi_key` ON `bidang_studi`(`nama_bidang_studi`);

-- AddForeignKey
ALTER TABLE `prodi` ADD CONSTRAINT `prodi_bidang_studi_fkey` FOREIGN KEY (`bidang_studi`) REFERENCES `bidang_studi`(`nama_bidang_studi`) ON DELETE RESTRICT ON UPDATE CASCADE;
