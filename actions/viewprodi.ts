'use server';

import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";

export async function fetchTotalProdiCount() {
  // Hitung jumlah seluruh prodi dari semua bidang_studi
  const totalProdiCount = await prisma.prodi.count();
  return totalProdiCount;
}

export async function filter() {
  // Ambil semua bidang_studi
  const bidangStudis = await prisma.bidang_studi.findMany();

  // Iterasi melalui setiap bidang_studi untuk menghitung jumlah prodi
  const datas = await Promise.all(bidangStudis.map(async (bidang) => {
    const countProdi = await prisma.prodi.count({
      where: {
        bidang_studi: bidang.nama_bidang_studi, // Filter berdasarkan nama_bidang_studi
      },
    });

    // Kembalikan data dengan jumlah prodi
    return {
      ...bidang,
      _count: {
        prodi: countProdi,
      },
    };
  }));

  return datas;
}



export async function filterdata(bidangstudi: string) {
    const bidangstudiparam = bidangstudi;
    console.log(bidangstudiparam);
    const datas = await prisma.prodi.findMany(
        {
            where: {
                bidang_studi: bidangstudi
            }
        }
    )
    revalidatePath("/prodi");
    return datas;
}
export async  function fetchall() {
    const datas = await prisma.prodi.findMany();
    return datas;
}