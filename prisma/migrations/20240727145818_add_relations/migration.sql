/*
  Warnings:

  - You are about to drop the column `skill_kategori_id` on the `prodi` table. All the data in the column will be lost.
  - The primary key for the `skill_prodi` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `skill_prodi` table. All the data in the column will be lost.
  - You are about to drop the column `kategori_id` on the `skill_prodi` table. All the data in the column will be lost.
  - You are about to drop the `skill_kategori` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `skill_id` to the `skill_prodi` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `prodi` DROP FOREIGN KEY `prodi_skill_kategori_id_fkey`;

-- DropForeignKey
ALTER TABLE `skill_prodi` DROP FOREIGN KEY `skill_prodi_kategori_id_fkey`;

-- AlterTable
ALTER TABLE `prodi` DROP COLUMN `skill_kategori_id`;

-- AlterTable
ALTER TABLE `skill_prodi` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `kategori_id`,
    ADD COLUMN `skill_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`skill_id`);

-- DropTable
DROP TABLE `skill_kategori`;

-- CreateTable
CREATE TABLE `alasan_memilih_prodi` (
    `alasan_id` INTEGER NOT NULL AUTO_INCREMENT,
    `urutan` INTEGER NOT NULL,
    `alasan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`alasan_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
