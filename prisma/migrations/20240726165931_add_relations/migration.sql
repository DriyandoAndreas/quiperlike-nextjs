/*
  Warnings:

  - The primary key for the `bidang_studi` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `bidang_studi` table. All the data in the column will be lost.
  - You are about to drop the column `bidang_studi` on the `prodi` table. All the data in the column will be lost.
  - Added the required column `bidang_studi_id` to the `bidang_studi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bidang_studi_id` to the `prodi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `bidang_studi` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `bidang_studi_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`bidang_studi_id`);

-- AlterTable
ALTER TABLE `prodi` DROP COLUMN `bidang_studi`,
    ADD COLUMN `bidang_studi_id` INTEGER NOT NULL,
    MODIFY `prodi_id` INTEGER NOT NULL AUTO_INCREMENT;

-- AddForeignKey
ALTER TABLE `prodi` ADD CONSTRAINT `prodi_bidang_studi_id_fkey` FOREIGN KEY (`bidang_studi_id`) REFERENCES `bidang_studi`(`bidang_studi_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
