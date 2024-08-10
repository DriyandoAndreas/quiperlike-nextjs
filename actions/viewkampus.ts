'use server';

import prisma from "@/lib/prismadb";
// import { revalidatePath } from "next/cache";
// TODO: view kampus ambil dari database kampus bukan dari kampust terkait
export async  function fetchall() {
    const datas = await prisma.kampus_terkait.findMany();
    return datas;
}