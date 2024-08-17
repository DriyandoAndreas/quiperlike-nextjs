/*
  Warnings:

  - You are about to drop the `kampus` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "kampus_terkait" ADD COLUMN     "lokasi_kampus" VARCHAR(255),
ADD COLUMN     "url_gambar" VARCHAR(255);

-- AlterTable
ALTER TABLE "prodi" ADD COLUMN     "url_banner" VARCHAR(255),
ADD COLUMN     "url_image_kampus_terkait" VARCHAR(255);

-- DropTable
DROP TABLE "kampus";
