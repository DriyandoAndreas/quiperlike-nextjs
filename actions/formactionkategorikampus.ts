'use server';

import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";
//get
export async function getAll(id:number) {
  const data = await prisma.kategori_kampus.findFirst({
    where: { kategori_kampus_id: id },
  });
  return data;
}
//add
export async function Create(formData: FormData) {
  try {
    const namaKategori = formData.get("nama_kategori") as string;

     await prisma.kategori_kampus.create({
      data: {
        nama_kategori: namaKategori,
      },
    });
    revalidatePath("/dashboard/kategori-kampus")
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
    const namaKategori = formData.get("nama_kategori") as string;

    await prisma.kategori_kampus.update({
      where: {
        kategori_kampus_id : id,
      },
      data: {
        nama_kategori: namaKategori,
      },
    });
    revalidatePath("/dashboard/kategori-kampus")
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
    await prisma.kategori_kampus.delete({
      where: {
        kategori_kampus_id : id,
      },
    });
    revalidatePath("/dashboard/kategori-kampus")
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
