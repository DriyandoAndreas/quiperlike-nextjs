"use client";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import FormEditData from "./formedit";
import DeleteForm from "./formdelete";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export type Konten = {
  alasan_memilih_prodi_id: number;
  isi_asalasan: string;
  kategori_asalasan: string;
};

export const column: ColumnDef<Konten>[] = [
  {
    accessorKey: "alasan_memilih_prodi_id",
    header: "ID",
  },
  {
    accessorKey: "isi_asalasan",
    header: "Judul",
  },
  {
    accessorKey: "kategori_asalasan",
    header: "Nama Kategori",
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
              <FormEditData id={ListData.alasan_memilih_prodi_id} />
            </div>
            <div className="py-2 text-center">
              <DeleteForm id={ListData.alasan_memilih_prodi_id} />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
