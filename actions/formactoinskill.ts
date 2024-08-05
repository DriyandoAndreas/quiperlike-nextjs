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
    const namaSkill = formData.get("nama_bidang_studi") as string;
    const deskripsiSkill = formData.get("deskripsi_bidang_studi") as string;

    await prisma.bidang_studi.create({
      data: {
        nama_bidang_studi: namaSkill,
        deskripsi_bidang_studi: deskripsiSkill,
      },
    });
    revalidatePath("/dashboard/bidang-studi")
    return {
      status: 200,
      message: "Bidang studi berhasil ditambahkan",
    };
  } catch (error) {
    console.error("Error creating bidang studi:", error);
    return {
      status: 500,
      message: "Terjadi kesalahan saat menambahkan bidang studi",
    };
  }
}
//edit
export async function EditBidangStudi(formData: FormData) {
  try {
    const id = Number(formData.get("id"));
    const namaSkill = formData.get("nama_bidang_studi") as string;
    const deskripsiSkill = formData.get("deskripsi_bidang_studi") as string;

    await prisma.bidang_studi.update({
      where: {
        bidang_studi_id : id,
      },
      data: {
        nama_bidang_studi: namaSkill,
        deskripsi_bidang_studi: deskripsiSkill,
      },
    });
    revalidatePath("/dashboard/bidang-studi")
    return {
      status: 200,
      message: "Bidang studi berhasil ditambahkan",
    };
  } catch (error) {
    console.error("Error edit bidang studi:", error);
    return {
      status: 500,
      message: "Terjadi kesalahan saat edit bidang studi",
    };
  }
}
//delete
export async function DeleteBidangStudi(id:number) {
  try {
    await prisma.bidang_studi.delete({
      where: {
        bidang_studi_id : id,
      },
    });
    revalidatePath("/dashboard/bidang-studi")
    return {
      status: 200,
      message: "Bidang studi berhasil dihapus",
    };
  } catch (error) {
    console.error("Error hapus bidang studi:", error);
    return {
      status: 500,
      message: "Terjadi kesalahan saat hapus bidang studi",
    };
  }
}
