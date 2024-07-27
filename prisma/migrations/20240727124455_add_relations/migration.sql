/*
  Warnings:

  - You are about to drop the column `pengetahuan_keahlian_prodi` on the `prodi` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `skill_kategori_id` to the `prodi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `kampus` MODIFY `kampus_id` INTEGER NOT NULL AUTO_INCREMENT;

-- AlterTable
ALTER TABLE `prodi` DROP COLUMN `pengetahuan_keahlian_prodi`,
    ADD COLUMN `skill_kategori_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `skill_kategori` (
    `id_kategori` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kategori` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_kategori`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `skill_prodi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_skill` VARCHAR(191) NOT NULL,
    `kategori_id` INTEGER NOT NULL,

    INDEX `skill_prodi_kategori_id_idx`(`kategori_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `prodi_skill_kategori_id_idx` ON `prodi`(`skill_kategori_id`);

-- AddForeignKey
ALTER TABLE `prodi` ADD CONSTRAINT `prodi_skill_kategori_id_fkey` FOREIGN KEY (`skill_kategori_id`) REFERENCES `skill_kategori`(`id_kategori`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `skill_prodi` ADD CONSTRAINT `skill_prodi_kategori_id_fkey` FOREIGN KEY (`kategori_id`) REFERENCES `skill_kategori`(`id_kategori`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `prodi` RENAME INDEX `prodi_bidang_studi_id_fkey` TO `prodi_bidang_studi_id_idx`;
