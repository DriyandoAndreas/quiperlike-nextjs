-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "logincounter" INTEGER NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prodi" (
    "prodi_id" SERIAL NOT NULL,
    "nama_prodi" VARCHAR(255) NOT NULL,
    "deskripsi_prodi" TEXT NOT NULL,
    "prospek_kerja_prodi" TEXT NOT NULL,
    "dunia_perkuliahan" TEXT NOT NULL,
    "bidang_studi" TEXT NOT NULL,
    "kategori_skill" TEXT NOT NULL,
    "kategori_alasan" TEXT NOT NULL,
    "kategori_kampus" TEXT NOT NULL,

    CONSTRAINT "prodi_pkey" PRIMARY KEY ("prodi_id")
);

-- CreateTable
CREATE TABLE "bidang_studi" (
    "bidang_studi_id" SERIAL NOT NULL,
    "nama_bidang_studi" VARCHAR(255) NOT NULL,
    "deskripsi_bidang_studi" TEXT NOT NULL,

    CONSTRAINT "bidang_studi_pkey" PRIMARY KEY ("bidang_studi_id")
);

-- CreateTable
CREATE TABLE "kategori_skill_prodi" (
    "kategori_skill_id" SERIAL NOT NULL,
    "nama_kategori" VARCHAR(255) NOT NULL,

    CONSTRAINT "kategori_skill_prodi_pkey" PRIMARY KEY ("kategori_skill_id")
);

-- CreateTable
CREATE TABLE "kategori_skill_konten" (
    "kategori_skill_konten_id" SERIAL NOT NULL,
    "judul_konten" VARCHAR(255) NOT NULL,
    "kategori_skill" TEXT NOT NULL,

    CONSTRAINT "kategori_skill_konten_pkey" PRIMARY KEY ("kategori_skill_konten_id")
);

-- CreateTable
CREATE TABLE "kategori_alasan_memilih_prodi" (
    "kategori_alasan_id" SERIAL NOT NULL,
    "nama_kategori" VARCHAR(255) NOT NULL,

    CONSTRAINT "kategori_alasan_memilih_prodi_pkey" PRIMARY KEY ("kategori_alasan_id")
);

-- CreateTable
CREATE TABLE "alasan_memilih_prodi_konten" (
    "alasan_memilih_prodi_id" SERIAL NOT NULL,
    "isi_asalasan" TEXT NOT NULL,
    "kategori_asalasan" TEXT NOT NULL,

    CONSTRAINT "alasan_memilih_prodi_konten_pkey" PRIMARY KEY ("alasan_memilih_prodi_id")
);

-- CreateTable
CREATE TABLE "kategori_kampus" (
    "kategori_kampus_id" SERIAL NOT NULL,
    "nama_kategori" VARCHAR(255) NOT NULL,

    CONSTRAINT "kategori_kampus_pkey" PRIMARY KEY ("kategori_kampus_id")
);

-- CreateTable
CREATE TABLE "kampus_terkait" (
    "kampus_terkait_id" SERIAL NOT NULL,
    "nama_kampus" VARCHAR(255) NOT NULL,
    "status_kampus" VARCHAR(255) NOT NULL,
    "url_kampus" VARCHAR(255) NOT NULL,
    "kategori_kampus" TEXT NOT NULL,

    CONSTRAINT "kampus_terkait_pkey" PRIMARY KEY ("kampus_terkait_id")
);

-- CreateTable
CREATE TABLE "kampus" (
    "kampus_id" SERIAL NOT NULL,
    "nama_kampus" VARCHAR(255) NOT NULL,
    "status_kampus" VARCHAR(255) NOT NULL,
    "url_web_kampus" TEXT NOT NULL,
    "lokasi_kampus" VARCHAR(255) NOT NULL,

    CONSTRAINT "kampus_pkey" PRIMARY KEY ("kampus_id")
);

-- CreateTable
CREATE TABLE "_bidang_studiToprodi" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_kategori_skill_prodiToprodi" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_kategori_skill_kontenTokategori_skill_prodi" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_kategori_alasan_memilih_prodiToprodi" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_alasan_memilih_prodi_kontenTokategori_alasan_memilih_prodi" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_kategori_kampusToprodi" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_kampus_terkaitTokategori_kampus" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE INDEX "prodi_bidang_studi_idx" ON "prodi"("bidang_studi");

-- CreateIndex
CREATE INDEX "prodi_kategori_skill_idx" ON "prodi"("kategori_skill");

-- CreateIndex
CREATE INDEX "prodi_kategori_alasan_idx" ON "prodi"("kategori_alasan");

-- CreateIndex
CREATE INDEX "prodi_kategori_kampus_idx" ON "prodi"("kategori_kampus");

-- CreateIndex
CREATE UNIQUE INDEX "bidang_studi_nama_bidang_studi_key" ON "bidang_studi"("nama_bidang_studi");

-- CreateIndex
CREATE UNIQUE INDEX "_bidang_studiToprodi_AB_unique" ON "_bidang_studiToprodi"("A", "B");

-- CreateIndex
CREATE INDEX "_bidang_studiToprodi_B_index" ON "_bidang_studiToprodi"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_kategori_skill_prodiToprodi_AB_unique" ON "_kategori_skill_prodiToprodi"("A", "B");

-- CreateIndex
CREATE INDEX "_kategori_skill_prodiToprodi_B_index" ON "_kategori_skill_prodiToprodi"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_kategori_skill_kontenTokategori_skill_prodi_AB_unique" ON "_kategori_skill_kontenTokategori_skill_prodi"("A", "B");

-- CreateIndex
CREATE INDEX "_kategori_skill_kontenTokategori_skill_prodi_B_index" ON "_kategori_skill_kontenTokategori_skill_prodi"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_kategori_alasan_memilih_prodiToprodi_AB_unique" ON "_kategori_alasan_memilih_prodiToprodi"("A", "B");

-- CreateIndex
CREATE INDEX "_kategori_alasan_memilih_prodiToprodi_B_index" ON "_kategori_alasan_memilih_prodiToprodi"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_alasan_memilih_prodi_kontenTokategori_alasan_memilih_AB_unique" ON "_alasan_memilih_prodi_kontenTokategori_alasan_memilih_prodi"("A", "B");

-- CreateIndex
CREATE INDEX "_alasan_memilih_prodi_kontenTokategori_alasan_memilih_p_B_index" ON "_alasan_memilih_prodi_kontenTokategori_alasan_memilih_prodi"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_kategori_kampusToprodi_AB_unique" ON "_kategori_kampusToprodi"("A", "B");

-- CreateIndex
CREATE INDEX "_kategori_kampusToprodi_B_index" ON "_kategori_kampusToprodi"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_kampus_terkaitTokategori_kampus_AB_unique" ON "_kampus_terkaitTokategori_kampus"("A", "B");

-- CreateIndex
CREATE INDEX "_kampus_terkaitTokategori_kampus_B_index" ON "_kampus_terkaitTokategori_kampus"("B");

-- AddForeignKey
ALTER TABLE "_bidang_studiToprodi" ADD CONSTRAINT "_bidang_studiToprodi_A_fkey" FOREIGN KEY ("A") REFERENCES "bidang_studi"("bidang_studi_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bidang_studiToprodi" ADD CONSTRAINT "_bidang_studiToprodi_B_fkey" FOREIGN KEY ("B") REFERENCES "prodi"("prodi_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_kategori_skill_prodiToprodi" ADD CONSTRAINT "_kategori_skill_prodiToprodi_A_fkey" FOREIGN KEY ("A") REFERENCES "kategori_skill_prodi"("kategori_skill_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_kategori_skill_prodiToprodi" ADD CONSTRAINT "_kategori_skill_prodiToprodi_B_fkey" FOREIGN KEY ("B") REFERENCES "prodi"("prodi_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_kategori_skill_kontenTokategori_skill_prodi" ADD CONSTRAINT "_kategori_skill_kontenTokategori_skill_prodi_A_fkey" FOREIGN KEY ("A") REFERENCES "kategori_skill_konten"("kategori_skill_konten_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_kategori_skill_kontenTokategori_skill_prodi" ADD CONSTRAINT "_kategori_skill_kontenTokategori_skill_prodi_B_fkey" FOREIGN KEY ("B") REFERENCES "kategori_skill_prodi"("kategori_skill_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_kategori_alasan_memilih_prodiToprodi" ADD CONSTRAINT "_kategori_alasan_memilih_prodiToprodi_A_fkey" FOREIGN KEY ("A") REFERENCES "kategori_alasan_memilih_prodi"("kategori_alasan_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_kategori_alasan_memilih_prodiToprodi" ADD CONSTRAINT "_kategori_alasan_memilih_prodiToprodi_B_fkey" FOREIGN KEY ("B") REFERENCES "prodi"("prodi_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_alasan_memilih_prodi_kontenTokategori_alasan_memilih_prodi" ADD CONSTRAINT "_alasan_memilih_prodi_kontenTokategori_alasan_memilih_pr_A_fkey" FOREIGN KEY ("A") REFERENCES "alasan_memilih_prodi_konten"("alasan_memilih_prodi_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_alasan_memilih_prodi_kontenTokategori_alasan_memilih_prodi" ADD CONSTRAINT "_alasan_memilih_prodi_kontenTokategori_alasan_memilih_pr_B_fkey" FOREIGN KEY ("B") REFERENCES "kategori_alasan_memilih_prodi"("kategori_alasan_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_kategori_kampusToprodi" ADD CONSTRAINT "_kategori_kampusToprodi_A_fkey" FOREIGN KEY ("A") REFERENCES "kategori_kampus"("kategori_kampus_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_kategori_kampusToprodi" ADD CONSTRAINT "_kategori_kampusToprodi_B_fkey" FOREIGN KEY ("B") REFERENCES "prodi"("prodi_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_kampus_terkaitTokategori_kampus" ADD CONSTRAINT "_kampus_terkaitTokategori_kampus_A_fkey" FOREIGN KEY ("A") REFERENCES "kampus_terkait"("kampus_terkait_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_kampus_terkaitTokategori_kampus" ADD CONSTRAINT "_kampus_terkaitTokategori_kampus_B_fkey" FOREIGN KEY ("B") REFERENCES "kategori_kampus"("kategori_kampus_id") ON DELETE CASCADE ON UPDATE CASCADE;
