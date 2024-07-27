/*
  Warnings:

  - You are about to drop the `skill_prodi` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `kategori_skill` to the `prodi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `prodi` ADD COLUMN `kategori_skill` INTEGER NOT NULL;

-- DropTable
DROP TABLE `skill_prodi`;

-- CreateTable
CREATE TABLE `kategori_skill_prodi` (
    `kategori_skill_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kategori` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`kategori_skill_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `prodi` ADD CONSTRAINT `prodi_kategori_skill_fkey` FOREIGN KEY (`kategori_skill`) REFERENCES `kategori_skill_prodi`(`kategori_skill_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
