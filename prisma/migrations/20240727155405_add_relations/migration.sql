-- DropForeignKey
ALTER TABLE `kategori_skill_konten` DROP FOREIGN KEY `kategori_skill_konten_kategori_skill_fkey`;

-- AlterTable
ALTER TABLE `kategori_skill_konten` MODIFY `kategori_skill` VARCHAR(255) NOT NULL;

-- AddForeignKey
ALTER TABLE `kategori_skill_konten` ADD CONSTRAINT `kategori_skill_konten_kategori_skill_fkey` FOREIGN KEY (`kategori_skill`) REFERENCES `kategori_skill_prodi`(`nama_kategori`) ON DELETE RESTRICT ON UPDATE CASCADE;
