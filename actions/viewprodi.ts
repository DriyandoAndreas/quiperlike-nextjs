'use server';

import prisma from "@/lib/prismadb";
// import { revalidatePath } from "next/cache";

export async  function fetchall() {
    const datas = await prisma.prodi.findMany();
    return datas;
}