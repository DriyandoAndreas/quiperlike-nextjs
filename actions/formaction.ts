'use server';

import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";

export async function CreateBidangStudi(formData: FormData) {
  try {
    const namaBidangStudi = formData.get("nama_bidang_studi") as string;
    const deskripsiBidangStudi = formData.get("deskripsi_bidang_studi") as string;

    await prisma.bidang_studi.create({
      data: {
        nama_bidang_studi: namaBidangStudi,
        deskripsi_bidang_studi: deskripsiBidangStudi,
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
export async function getBidangStudiById(id:number) {
  const bidangStudi = await prisma.bidang_studi.findFirst({
    where: { bidang_studi_id: id },
  });
  return bidangStudi;
}

export async function EditBidangStudi(formData: FormData) {
  try {
    const id = Number(formData.get("id"));
    const namaBidangStudi = formData.get("nama_bidang_studi") as string;
    const deskripsiBidangStudi = formData.get("deskripsi_bidang_studi") as string;

    await prisma.bidang_studi.update({
      where: {
        bidang_studi_id : id,
      },
      data: {
        nama_bidang_studi: namaBidangStudi,
        deskripsi_bidang_studi: deskripsiBidangStudi,
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
