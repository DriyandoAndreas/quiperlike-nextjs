/*
  Warnings:

  - You are about to drop the `bidangStudi` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `bidangStudi`;

-- CreateTable
CREATE TABLE `bidang_studi` (
    `id` INTEGER NOT NULL,
    `nama_bidang_studi` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
