"use client";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import FormEdit from "./formedit";
import DeleteForm from "./formdelete";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export type Prodi = {
  prodi_id: number;
  nama_prodi: string;
  deskripsi_prodi: string;
  prospek_kerja_prodi: string;
  bidang_studi: string;
  kategori_skill: string;
  kategori_alasan: string;
  kategori_kampus: string;
};

export const column: ColumnDef<Prodi>[] = [
  {
    accessorKey: "prodi_id",
    header: "ID",
  },
  {
    accessorKey: "nama_prodi",
    header: "Nama Prodi",
  },
  {
    accessorKey: "deskripsi_prodi",
    header: "Deskripsi",
  },
  {
    accessorKey: "prospek_kerja_prodi",
    header: "Prospek Kerja",
  },
  {
    accessorKey: "bidang_studi",
    header: "Bidang Studi",
  },
  {
    accessorKey: "kategori_skill",
    header: "Kategori Skill",
  },
  {
    accessorKey: "kategori_alasan",
    header: "Kategori Alasan",
  },
  {
    accessorKey: "kategori_kampus",
    header: "Kategori Kampus",
  },

  {
    id: "actions",

    cell: ({ row }) => {
      const ListData = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex-col">
            <DropdownMenuLabel className="text-center">
              Actions
            </DropdownMenuLabel>
            <div className="py-2 text-center">
              <FormEdit id={ListData.prodi_id} />
            </div>
            <div className="py-2 text-center">
              <DeleteForm id={ListData.prodi_id} />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
