'use server';

import prisma from "@/lib/prismadb";
// import { revalidatePath } from "next/cache";
// TODO: view kampus ambil dari database kampus bukan dari kampust terkait
export async function fetchall() {
  const data = await prisma.kampus_terkait.groupBy({
    by: ['nama_kampus'],
    _min: {
      kampus_terkait_id: true,
      status_kampus: true,
      url_kampus: true,
    },
  });

  return data.map((item) => ({
    kampus_terkait_id: item._min.kampus_terkait_id,
    nama_kampus: item.nama_kampus,
    status_kampus: item._min.status_kampus,
    url_kampus: item._min.url_kampus,
  }));
}
