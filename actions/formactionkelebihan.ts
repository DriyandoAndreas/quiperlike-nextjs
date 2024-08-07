'use server';

import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";
//get
export async function getAll(id:number) {
  const kategoriKelebihan = await prisma.kategori_alasan_memilih_prodi.findFirst({
    where: { kategori_alasan_id: id },
  });
  return kategoriKelebihan;
}
//add
export async function Create(formData: FormData) {
  try {
    const namaKategori = formData.get("nama_kategori") as string;

     await prisma.kategori_alasan_memilih_prodi.create({
      data: {
        nama_kategori: namaKategori,
      },
    });
    revalidatePath("/dashboard/kategori-kelebihan")
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
    const namaKategori = formData.get("nama_kategori") as string;

    await prisma.kategori_alasan_memilih_prodi.update({
      where: {
        kategori_alasan_id : id,
      },
      data: {
        nama_kategori: namaKategori,
      },
    });
    revalidatePath("/dashboard/kategori-kelebihan")
    return {
      status: 200,
      message: "Berhasil ditambahkan",
    };
  } catch (error) {
    console.error("Error edit :", error);
    return {
      status: 500,
      message: "Terjadi kesalahan ",
    };
  }
}
//delete
export async function Delete(id:number) {
  try {
    await prisma.kategori_alasan_memilih_prodi.delete({
      where: {
        kategori_alasan_id : id,
      },
    });
    revalidatePath("/dashboard/kategori-kelebihan")
    return {
      status: 200,
      message: " berhasil dihapus",
    };
  } catch (error) {
    console.error("Error hapus:", error);
    return {
      status: 500,
      message: "Terjadi kesalahan ",
    };
  }
}
