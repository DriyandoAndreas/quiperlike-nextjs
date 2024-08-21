'use server';

import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";
//get
export async function getAll(id:number) {
  const skill = await prisma.prodi.findFirst({
    where: { prodi_id: id },
  });
  return skill;
}
export async function getBidangStudi() {
  const skill = await prisma.bidang_studi.findMany();
  return skill;
}
export async function getSkill() {
  const skill = await prisma.kategori_skill_prodi.findMany();
  return skill;
}
export async function getAlasan() {
  const skill = await prisma.kategori_alasan_memilih_prodi.findMany();
  return skill;
}
export async function getKampus() {
  const skill = await prisma.kategori_kampus.findMany();
  return skill;
}
//add
export async function Create(formData: FormData) {
  try {
    const namaprodi = formData.get("nama_prodi") as string;
    const deskripsiprodi = formData.get("deskripsi_prodi") as string;
    const prospekkerja = formData.get("prospek_kerja_prodi") as string;
    const bidangstudi = formData.get("bidang_studi") as string;
    const kategoriskill = formData.get("kategori_skill") as string;
    const kategorialasan = formData.get("kategori_alasan") as string;
    const kategorikampus = formData.get("kategori_kampus") as string;
    const duniaperkuliahan = formData.get("dunia_perkuliahan") as string;
    const url_banner = formData.get("url_banner") as string;
    const url_kampus_terkait = formData.get("url_image_kampus_terkait") as string;

   await prisma.prodi.create({
      data: {
        nama_prodi: namaprodi,
        deskripsi_prodi: deskripsiprodi,
        prospek_kerja_prodi: prospekkerja,
        bidang_studi: bidangstudi,
        kategori_skill: kategoriskill,
        kategori_alasan: kategorialasan,
        kategori_kampus: kategorikampus,
        dunia_perkuliahan: duniaperkuliahan,
        url_banner: url_banner,
        url_image_kampus_terkait: url_kampus_terkait,
      },
    });
    revalidatePath("/dashboard/prodi")
    return {
      status: 200,
      message: "Kategori skill berhasil ditambahkan",
    };
  } catch (error) {
    console.error("Error creating Kategori skill:", error);
    return {
      status: 500,
      message: "Terjadi kesalahan saat menambahkan Kategori skill",
    };
  }
}
//edit
export async function Edit(formData: FormData) {
  try {
    const id = Number(formData.get("id"));
    console.log("ID to update:", id);

    // Cek apakah record dengan id tersebut ada di database
    const existingProdi = await prisma.prodi.findFirst({
      where: { prodi_id: id },
    });

    if (!existingProdi) {
      console.error("Record not found");
      return {
        status: 404,
        message: "Data tidak ditemukan",
      };
    }

    const namaprodi = formData.get("nama_prodi") as string;
    const deskripsiprodi = formData.get("deskripsi_prodi") as string;
    const prospekkerja = formData.get("prospek_kerja_prodi") as string;
    const bidangstudi = formData.get("bidang_studi") as string;
    const kategoriskill = formData.get("kategori_skill") as string;
    const kategorialasan = formData.get("kategori_alasan") as string;
    const kategorikampus = formData.get("kategori_kampus") as string;
    const duniaperkuliahan = formData.get("dunia_perkuliahan") as string;
    const url_banner = formData.get("url_banner") as string;
    const url_kampus_terkait = formData.get("url_image_kampus_terkait") as string;

    await prisma.prodi.update({
      where: {
        prodi_id: id,
      },
      data: {
        nama_prodi: namaprodi,
        deskripsi_prodi: deskripsiprodi,
        prospek_kerja_prodi: prospekkerja,
        bidang_studi: bidangstudi,
        kategori_skill: kategoriskill,
        kategori_alasan: kategorialasan,
        kategori_kampus: kategorikampus,
        dunia_perkuliahan: duniaperkuliahan,
        url_banner: url_banner,
        url_image_kampus_terkait: url_kampus_terkait,
      },
    });

    revalidatePath("/dashboard/prodi");
    return {
      status: 200,
      message: "Data berhasil diedit",
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: 500,
      message: "Terjadi kesalahan",
    };
  }
}

//delete
export async function Delete(id:number) {
  try {
    await prisma.prodi.delete({
      where: {
        prodi_id : id,
      },
    });
    revalidatePath("/dashboard/prodi")
    return {
      status: 200,
      message: "Kategori skill berhasil dihapus",
    };
  } catch (error) {
    console.error("Error hapus Kategori skill:", error);
    return {
      status: 500,
      message: "Terjadi kesalahan saat hapus Kategori skill",
    };
  }
}
