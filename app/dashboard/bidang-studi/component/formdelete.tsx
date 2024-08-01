"use client";

import { Button } from "@/components/ui/button";
import { DeleteBidangStudi } from "@/actions/formaction";
import { Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
type BidangStudiIdProps = {
    id: number,
}
export default function DeleteForm({ id }: BidangStudiIdProps) {
     const { toast } = useToast();
      const handleDelete = async () => {
          await DeleteBidangStudi(id);
           toast({ description: "Data berhasil dihapus" });
      };
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">
            <Trash2 size={16} />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Apakah anda yakin hapus data ini?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Data yang di hapus tidak dapat di kembalikan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Hapus</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
