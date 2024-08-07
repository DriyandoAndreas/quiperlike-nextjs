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
  kampus_terkait_id: number;
  nama_kampus: string;
  status_kampus: string;
  url_kampus: string;
  kategori_kampus: string;
};

export const column: ColumnDef<Konten>[] = [
  {
    accessorKey: "kampus_terkait_id",
    header: "ID",
  },
  {
    accessorKey: "nama_kampus",
    header: "Nama Kampus",
  },
  {
    accessorKey: "status_kampus",
    header: "Status",
  },
  {
    accessorKey: "url_kampus",
    header: "Url",
  },
  {
    accessorKey: "kategori_kampus",
    header: "Kategori",
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
              <FormEditData id={ListData.kampus_terkait_id} />
            </div>
            <div className="py-2 text-center">
              <DeleteForm id={ListData.kampus_terkait_id} />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
