'use server';

import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";
//get
export async function getAll(id:number) {
  const data = await prisma.alasan_memilih_prodi_konten.findFirst({
    where: { alasan_memilih_prodi_id: id },
  });
  return data;
}
export async function getRelation() {
    const data = await prisma.kategori_alasan_memilih_prodi.findMany();
  return data;
}
//add
export async function Create(formData: FormData) {
  try {
    const isi = formData.get("isi_asalasan") as string;
    const kategori = formData.get("kategori_asalasan") as string;

    const data = await prisma.alasan_memilih_prodi_konten.create({
      data: {
        isi_asalasan: isi,
        kategori_asalasan: kategori,
      },
    });

    revalidatePath("/dashboard/kelebihan-konten");
    return {
      status: 200,
      message: "Berhasil ditambahkan",
    };
  } catch (error) {
    console.error("Error :", error);
    return {
      status: 500,
      message: "Terjadi kesalahan",
    };
  }
}
//edit
export async function Edit(formData: FormData) {
  try {
    const id = Number(formData.get("id"));
    const isi = formData.get("isi_alasan") as string;
    const kategori = formData.get("kategori_asalasan") as string;

    await prisma.alasan_memilih_prodi_konten.update({
      where: {
        alasan_memilih_prodi_id : id,
      },
      data: {
          isi_asalasan: isi,
          kategori_asalasan: kategori,
      },
    });
    revalidatePath("/dashboard/kelebihan-konten")
    return {
      status: 200,
      message: "Berhasil diedit",
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
    await prisma.alasan_memilih_prodi_konten.delete({
      where: {
        alasan_memilih_prodi_id : id,
      },
    });
    revalidatePath("/dashboard/kelebihan-konten")
    return {
      status: 200,
      message: "Berhasil dihapus",
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: 500,
      message: "Terjadi kesalahan",
    };
  }
}
