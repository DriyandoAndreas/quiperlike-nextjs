/*
  Warnings:

  - A unique constraint covering the columns `[kategori_skill]` on the table `prodi` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `prodi` DROP FOREIGN KEY `prodi_kategori_skill_fkey`;

-- AlterTable
ALTER TABLE `prodi` MODIFY `kategori_skill` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `prodi_kategori_skill_key` ON `prodi`(`kategori_skill`);

-- AddForeignKey
ALTER TABLE `prodi` ADD CONSTRAINT `prodi_kategori_skill_fkey` FOREIGN KEY (`kategori_skill`) REFERENCES `kategori_skill_prodi`(`nama_kategori`) ON DELETE RESTRICT ON UPDATE CASCADE;
