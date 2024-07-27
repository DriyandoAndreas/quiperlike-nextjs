/*
  Warnings:

  - A unique constraint covering the columns `[kategori_skill]` on the table `kategori_skill_konten` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nama_kategori]` on the table `kategori_skill_prodi` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `kategori_skill_konten` DROP FOREIGN KEY `kategori_skill_konten_kategori_skill_fkey`;

-- AlterTable
ALTER TABLE `kategori_skill_konten` MODIFY `kategori_skill` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `kategori_skill_konten_kategori_skill_key` ON `kategori_skill_konten`(`kategori_skill`);

-- CreateIndex
CREATE UNIQUE INDEX `kategori_skill_prodi_nama_kategori_key` ON `kategori_skill_prodi`(`nama_kategori`);

-- AddForeignKey
ALTER TABLE `kategori_skill_konten` ADD CONSTRAINT `kategori_skill_konten_kategori_skill_fkey` FOREIGN KEY (`kategori_skill`) REFERENCES `kategori_skill_prodi`(`nama_kategori`) ON DELETE RESTRICT ON UPDATE CASCADE;
