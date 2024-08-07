'use server';

import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";
//get
export async function getSkillById(id:number) {
  const skill = await prisma.kategori_skill_prodi.findFirst({
    where: { kategori_skill_id: id },
  });
  return skill;
}
//add
export async function CreateSkill(formData: FormData) {
  try {
    const namaSkill = formData.get("nama_kategori") as string;

   const data =  await prisma.kategori_skill_prodi.create({
      data: {
        nama_kategori: namaSkill,
      },
    });
    revalidatePath("/dashboard/kategori-skill")
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
export async function EditSkill(formData: FormData) {
  try {
    const id = Number(formData.get("id"));
    const namaKategoriSkill = formData.get("nama_kategori") as string;

    await prisma.kategori_skill_prodi.update({
      where: {
        kategori_skill_id : id,
      },
      data: {
        nama_kategori: namaKategoriSkill,
      },
    });
    revalidatePath("/dashboard/kategori-skill")
    return {
      status: 200,
      message: "Kategori skill berhasil ditambahkan",
    };
  } catch (error) {
    console.error("Error edit Kategori skill:", error);
    return {
      status: 500,
      message: "Terjadi kesalahan saat edit Kategori skill",
    };
  }
}
//delete
export async function DeleteSkill(id:number) {
  try {
    await prisma.kategori_skill_prodi.delete({
      where: {
        kategori_skill_id : id,
      },
    });
    revalidatePath("/dashboard/kategori-skill")
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
