'use server';

import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";

export async function filter() {
    const datas = await prisma.bidang_studi.findMany();
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