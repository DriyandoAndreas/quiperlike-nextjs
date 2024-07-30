"use client";
import { ColumnDef } from "@tanstack/react-table";

export type BidangStudi = {
  bidang_studi_id: number;
  nama_bidang_studi: string;
  deskripsi_bidang_studi: string;
};

export const column: ColumnDef<BidangStudi>[] = [
  {
    accessorKey: "bidang_studi_id",
    header: "ID",
  },
  {
    accessorKey: "nama_bidang_studi",
    header: "Nama Bidang Studi",
  },
  {
    accessorKey: "deskripsi_bidang_studi",
    header: "Deskripsi Bidang Studi",
  },
];


