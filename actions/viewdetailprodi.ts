'use server';

import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";

export async  function fetchall(id: string) {
   const prodiId = parseInt(id, 10);  // Konversi string id menjadi number
    if (isNaN(prodiId)) {
        throw new Error("Invalid ID format");
    }

    const datas = await prisma.prodi.findUnique({
        where: {
            prodi_id: prodiId,
        },
    });

    return datas;
}
export async  function fetchskill(kategori: string) {
    const datas = await prisma.kategori_skill_konten.findMany({
        where: {
            kategori_skill: kategori,
        },
    });

    return datas;
}
export async  function fetchAslasan(kategori: string) {
    const datas = await prisma.alasan_memilih_prodi_konten.findMany({
        where: {
            kategori_asalasan: kategori,
        },
    });

    return datas;
}
export async  function fetchKampus(kategori: string) {
    const datas = await prisma.kampus_terkait.findMany({
        where: {
            kategori_kampus: kategori,
        },
    });

    return datas;
}