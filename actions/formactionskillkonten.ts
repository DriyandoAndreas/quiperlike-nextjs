'use server';

import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";
//get
export async function getSkillKontenById(id:number) {
  const skill = await prisma.kategori_skill_konten.findFirst({
    where: { kategori_skill_konten_id: id },
  });
  return skill;
}
export async function getKategoriSKill() {
    const kategoriskill = await prisma.kategori_skill_prodi.findMany();
  return kategoriskill;
}
//add
export async function CreateSkillKonten(formData: FormData) {
  try {
    const judulSkill = formData.get("judul_konten") as string;
    const kategoriSkill = formData.get("kategori_skill") as string;

    const data = await prisma.kategori_skill_konten.create({
      data: {
        judul_konten: judulSkill,
        kategori_skill: kategoriSkill,
      },
    });

    revalidatePath("/dashboard/skill-konten");
    return {
      status: 200,
      message: "konten skill berhasil ditambahkan",
    };
  } catch (error) {
    console.error("Error creating konten skill:", error);
    return {
      status: 500,
      message: "Terjadi kesalahan saat menambahkan konten skill",
    };
  }
}


//edit
export async function EditSkillKonten(formData: FormData) {
  try {
    const id = Number(formData.get("id"));
    const judulSkill = formData.get("judul_konten") as string;
    const kategoriSkill = formData.get("kategori_skill") as string;

    await prisma.kategori_skill_konten.update({
      where: {
        kategori_skill_konten_id : id,
      },
      data: {
          judul_konten: judulSkill,
          kategori_skill: kategoriSkill,
      },
    });
    revalidatePath("/dashboard/skill-konten")
    return {
      status: 200,
      message: "konten skill berhasil diedit",
    };
  } catch (error) {
     
    console.error("Error edit konten skill:", error);
    return {
      status: 500,
      message: "Terjadi kesalahan saat edit konten skill",
    };
  }
}
//delete
export async function DeleteSkillKonten(id:number) {
  try {
    await prisma.kategori_skill_konten.delete({
      where: {
        kategori_skill_konten_id : id,
      },
    });
    revalidatePath("/dashboard/skill-konten")
    return {
      status: 200,
      message: "Konten skill berhasil dihapus",
    };
  } catch (error) {
    console.error("Error hapus Konten skill:", error);
    return {
      status: 500,
      message: "Terjadi kesalahan saat hapus konten skill",
    };
  }
}
