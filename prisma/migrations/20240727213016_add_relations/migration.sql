-- CreateTable
CREATE TABLE `alasan_memilih_prodi_konten` (
    `alasan_memilih_prodi_id` INTEGER NOT NULL AUTO_INCREMENT,
    `isi_asalasan` LONGTEXT NOT NULL,
    `kategori_asalasan` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `alasan_memilih_prodi_konten_kategori_asalasan_key`(`kategori_asalasan`),
    PRIMARY KEY (`alasan_memilih_prodi_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `alasan_memilih_prodi_konten` ADD CONSTRAINT `alasan_memilih_prodi_konten_kategori_asalasan_fkey` FOREIGN KEY (`kategori_asalasan`) REFERENCES `kategori_alasan_memilih_prodi`(`nama_kategori`) ON DELETE RESTRICT ON UPDATE CASCADE;
