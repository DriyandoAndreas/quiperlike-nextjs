/*
  Warnings:

  - You are about to drop the `alasan_memilih_prodi` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `kategori_alasan` to the `prodi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `bidang_studi` MODIFY `nama_bidang_studi` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `kampus` MODIFY `nama_kampus` VARCHAR(255) NOT NULL,
    MODIFY `status_kampus` VARCHAR(255) NOT NULL,
    MODIFY `url_web_kampus` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `kategori_skill_prodi` MODIFY `nama_kategori` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `prodi` ADD COLUMN `kategori_alasan` INTEGER NOT NULL,
    MODIFY `nama_prodi` VARCHAR(255) NOT NULL;

-- DropTable
DROP TABLE `alasan_memilih_prodi`;

-- CreateTable
CREATE TABLE `kategori_alasan_memilih_prodi` (
    `kategori_alasan_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_alasan` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`kategori_alasan_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `prodi_kategori_alasan_idx` ON `prodi`(`kategori_alasan`);

-- AddForeignKey
ALTER TABLE `prodi` ADD CONSTRAINT `prodi_kategori_alasan_fkey` FOREIGN KEY (`kategori_alasan`) REFERENCES `kategori_alasan_memilih_prodi`(`kategori_alasan_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
