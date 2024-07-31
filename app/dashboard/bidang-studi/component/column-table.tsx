"use client";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import FormEditBidangStudi from "./formedit";
import { Button } from "@/components/ui/button";
import { DeleteBidangStudi } from "@/actions/formaction";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export type BidangStudi = {
  bidang_studi_id: number;
  nama_bidang_studi: string;
  deskripsi_bidang_studi: string;
};

export const column: ColumnDef<BidangStudi>[] = [
  {
    accessorKey: "bidang_studi_id",
    header: "ID",
    size: 50,
  },
  {
    accessorKey: "nama_bidang_studi",
    header: "Nama Bidang Studi",
    size: 200,
  },
  {
    accessorKey: "deskripsi_bidang_studi",
    header: "Deskripsi Bidang Studi",
  },
  {
    id: "actions",
    size: 50,
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
          <DropdownMenuContent className="flex-col p-4">
            <DropdownMenuLabel>
              Actions
            </DropdownMenuLabel>
            <div className="py-2">
              <FormEditBidangStudi id={ListData.bidang_studi_id} />
            </div>
            <div className="py-2">
              <Button variant={"outline"} onClick={handleDelete}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
                <span>Delete</span>
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
