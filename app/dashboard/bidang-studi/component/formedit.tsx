import { useEffect, useState } from "react";
import { getBidangStudiById } from "@/actions/formaction";
import { Button } from "@/components/ui/button";
import { EditBidangStudi } from "@/actions/formaction";
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

type FormEditBidangStudiProps = {
  id: number;
};

export default function FormEditBidangStudi({ id }: FormEditBidangStudiProps) {
  const [data, setData] = useState({
    nama_bidang_studi: "",
    deskripsi_bidang_studi: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await EditBidangStudi(formData);
    closeDialog(); // Tutup modal setelah form disubmit
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
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            <span>Edit</span>
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
            <DialogFooter className="sm:justify-between py-2">
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
