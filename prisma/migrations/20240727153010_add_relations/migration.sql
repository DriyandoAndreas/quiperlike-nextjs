/*
  Warnings:

  - You are about to drop the column `bidang_studi_id` on the `prodi` table. All the data in the column will be lost.
  - Added the required column `bidang_studi` to the `prodi` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `prodi` DROP FOREIGN KEY `prodi_bidang_studi_id_fkey`;

-- AlterTable
ALTER TABLE `prodi` DROP COLUMN `bidang_studi_id`,
    ADD COLUMN `bidang_studi` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `prodi_bidang_studi_idx` ON `prodi`(`bidang_studi`);

-- AddForeignKey
ALTER TABLE `prodi` ADD CONSTRAINT `prodi_bidang_studi_fkey` FOREIGN KEY (`bidang_studi`) REFERENCES `bidang_studi`(`bidang_studi_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `prodi` RENAME INDEX `prodi_kategori_skill_fkey` TO `prodi_kategori_skill_idx`;
