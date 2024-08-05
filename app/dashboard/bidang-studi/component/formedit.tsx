"use client";
import { useEffect, useState } from "react";
import { getBidangStudiById } from "@/actions/formactionbidangstudi";
import { Button } from "@/components/ui/button";
import { EditBidangStudi } from "@/actions/formactionbidangstudi";
import { useToast } from "@/components/ui/use-toast";
import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
//TODO: use zod for validation
type FormEditBidangStudiProps = {
  id: number;
};
export default function FormEditBidangStudi({ id }: FormEditBidangStudiProps) {
  const [data, setData] = useState({
    nama_bidang_studi: "",
    deskripsi_bidang_studi: "",
  });
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await EditBidangStudi(formData);
    toast({ description: "Data berhasil diedit" });
    closeDialog();
  };

  useEffect(() => {
    async function getData() {
      const bidangStudi = await getBidangStudiById(id);
      if (bidangStudi) {
        setData(bidangStudi);
      } else {
        console.error("Data not found");
      }
    }
    getData();
  }, [id]);

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant={"outline"} onClick={openDialog}>
            <Pencil size={16} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="id" value={id} />
            <DialogHeader className="py-2">
              <DialogTitle>Form Edit Data Bidang Studi</DialogTitle>
              <DialogDescription>
                Edit nama bidang studi dan deskripsi.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2 py-2">
              <div className="grid flex-1 gap-2">
                <Label>Nama Bidang Studi</Label>
                <Input
                  name="nama_bidang_studi"
                  placeholder="Nama bidang studi"
                  type="text"
                  value={data.nama_bidang_studi}
                  onChange={(e) =>
                    setData({ ...data, nama_bidang_studi: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="flex items-center space-x-2 py-2">
              <div className="grid flex-1 gap-2">
                <Label>Deskripsi Bidang Studi</Label>
                <Textarea
                  name="deskripsi_bidang_studi"
                  placeholder="Deskripsikan bidang studi"
                  value={data.deskripsi_bidang_studi}
                  onChange={(e) =>
                    setData({ ...data, deskripsi_bidang_studi: e.target.value })
                  }
                  required
                ></Textarea>
              </div>
            </div>
            <DialogFooter className="py-2 gap-2 md:gap-0 sm:justify-between">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary"
                  className="hover:bg-gray-300"
                >
                  Batal
                </Button>
              </DialogClose>
              <Button type="submit">Simpan</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
