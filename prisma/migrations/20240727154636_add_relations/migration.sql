-- CreateTable
CREATE TABLE `kategori_skill_konten` (
    `kategori_skill_konten_id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul_konten` VARCHAR(255) NOT NULL,
    `kategori_skill` INTEGER NOT NULL,

    PRIMARY KEY (`kategori_skill_konten_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `kategori_skill_konten` ADD CONSTRAINT `kategori_skill_konten_kategori_skill_fkey` FOREIGN KEY (`kategori_skill`) REFERENCES `kategori_skill_prodi`(`kategori_skill_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
