'use server';

import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";
//get
export async function getAll(id:number) {
  const data = await prisma.kampus_terkait.findFirst({
    where: { kampus_terkait_id: id },
  });
  return data;
}
export async function getRelation() {
    const data = await prisma.kategori_kampus.findMany();
  return data;
}
//add
export async function Create(formData: FormData) {
  try {
    const nama = formData.get("nama_kampus") as string;
    const status = formData.get("status_kampus") as string;
    const url = formData.get("url_kampus") as string;
    const kategori = formData.get("kategori_kampus") as string;

  await prisma.kampus_terkait.create({
      data: {
        nama_kampus: nama,
        status_kampus: status,
        url_kampus: url,
        kategori_kampus: kategori,
      },
    });

    revalidatePath("/dashboard/kampus-terkait");
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
     const nama = formData.get("nama_kampus") as string;
    const status = formData.get("status_kampus") as string;
    const url = formData.get("url_kampus") as string;
    const kategori = formData.get("kategori_kampus") as string;

    await prisma.kampus_terkait.update({
      where: {
        kampus_terkait_id : id,
      },
      data: {
        nama_kampus: nama,
        status_kampus: status,
        url_kampus: url,
        kategori_kampus: kategori,
      },
    });
    revalidatePath("/dashboard/kampus-terkait")
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
    await prisma.kampus_terkait.delete({
      where: {
        kampus_terkait_id : id,
      },
    });
    revalidatePath("/dashboard/kampus-terkait")
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
