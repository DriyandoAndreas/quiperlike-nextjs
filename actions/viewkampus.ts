'use server';

import prisma from "@/lib/prismadb";
// import { revalidatePath } from "next/cache";
export async function fetchall() {
  const data = await prisma.kampus_terkait.groupBy({
    by: ['nama_kampus'],
    _min: {
      kampus_terkait_id: true,
      status_kampus: true,
      url_kampus: true,
      url_gambar: true,
    },
  });

  return data.map((item) => ({
    kampus_terkait_id: item._min.kampus_terkait_id,
    nama_kampus: item.nama_kampus,
    status_kampus: item._min.status_kampus,
    url_kampus: item._min.url_kampus,
    url_gambar: item._min.url_gambar || '/default-image.jpg',
  }));
}
export async function fetchProvinces() {
  const data = await prisma.kampus_terkait.findMany({
    distinct: ['lokasi_kampus'],
    select: {
      lokasi_kampus: true,
    },
  });

  return data.map((item) => item.lokasi_kampus).filter(Boolean);
}

// Fungsi untuk memfilter data berdasarkan provinsi
export async function filterByProvince(province: string) {
  const data = await prisma.kampus_terkait.findMany({
    where: { lokasi_kampus: province },
    select: {
      kampus_terkait_id: true,
      nama_kampus: true,
      status_kampus: true,
      url_kampus: true,
      url_gambar: true,
    },
  });

  return data.map((item) => ({
    kampus_terkait_id: item.kampus_terkait_id,
    nama_kampus: item.nama_kampus,
    status_kampus: item.status_kampus,
    url_kampus: item.url_kampus,
    url_gambar: item.url_gambar || '/default-image.jpg',
  }));
}

// Fungsi untuk mengambil daftar bidang studi yang unik
export async function fetchBidangStudi() {
  const data = await prisma.kampus_terkait.findMany({
    distinct: ['bidang_studi'],
    select: {
      bidang_studi: true,
    },
  });

  return data.map((item) => item.bidang_studi).filter((item): item is string => item !== null);
}

// Fungsi untuk memfilter data berdasarkan bidang studi
export async function filterByBidangStudi(bidang: string) {
  const data = await prisma.kampus_terkait.findMany({
    where: { bidang_studi: bidang },
    select: {
      kampus_terkait_id: true,
      nama_kampus: true,
      status_kampus: true,
      url_kampus: true,
      url_gambar: true,
    },
  });

  return data.map((item) => ({
    kampus_terkait_id: item.kampus_terkait_id,
    nama_kampus: item.nama_kampus,
    status_kampus: item.status_kampus,
    url_kampus: item.url_kampus,
    url_gambar: item.url_gambar || '/default-image.jpg',
  }));
}