-- CreateTable
CREATE TABLE `prodi` (
    `prodi_id` INTEGER NOT NULL,
    `nama_prodi` VARCHAR(191) NOT NULL,
    `deskripsi_prodi` LONGTEXT NOT NULL,
    `pengetahuan_keahlian_prodi` LONGTEXT NOT NULL,
    `prospek_kerja_prodi` LONGTEXT NOT NULL,

    PRIMARY KEY (`prodi_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kampus` (
    `kampus_id` INTEGER NOT NULL,
    `nama_kampus` VARCHAR(191) NOT NULL,
    `status_kampus` VARCHAR(191) NOT NULL,
    `url_web_kampus` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`kampus_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
