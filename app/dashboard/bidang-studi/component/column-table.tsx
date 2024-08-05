"use client";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import FormEditBidangStudi from "./formedit";
import { Button } from "@/components/ui/button";
import { DeleteBidangStudi } from "@/actions/formactionbidangstudi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteForm from "./formdelete";
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
  {
    id: "actions",

    cell: ({ row }) => {
      const ListData = row.original;

      const handleDelete = async () => {
        await DeleteBidangStudi(ListData.bidang_studi_id);
      };

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
              <FormEditBidangStudi id={ListData.bidang_studi_id} />
            </div>
            <div className="py-2 text-center">
              <DeleteForm id={ListData.bidang_studi_id} />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
