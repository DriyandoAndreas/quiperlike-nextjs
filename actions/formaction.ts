'use server';

import prisma from "@/lib/prismadb";

export async function CreateBidangStudi(formData: FormData) {
  try {
    const namaBidangStudi = formData.get("nama_bidang_studi") as string;
    const deskripsiBidangStudi = formData.get("deskripsi_bidang_studi") as string;

    if (!namaBidangStudi || !deskripsiBidangStudi) {
      throw new Error("Semua bidang wajib diisi");
    }

    await prisma.bidang_studi.create({
      data: {
        nama_bidang_studi: namaBidangStudi,
        deskripsi_bidang_studi: deskripsiBidangStudi,
      },
    });

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
