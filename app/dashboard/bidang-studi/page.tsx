import { CreateBidangStudi } from "@/actions/formaction";
import { Button } from "@/components/ui/button";
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

export default function BidangStudi() {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="flex items-center">Data Bidang Studi</div>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
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
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span className="px-1">Data</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <form action={CreateBidangStudi}>
                <DialogHeader className="py-2">
                  <DialogTitle>Form Tambah Data Bidang Studi</DialogTitle>
                  <DialogDescription>
                    Tambahkan nama bidang studi dan deskripsi.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2 py-2">
                  <div className="grid flex-1 gap-2">
                    <Label>Nama Bidang Studi</Label>
                    <Input
                      name="nama_bidang_studi"
                      placeholder="Nama bidang studi"
                      type="text"
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
        </div>
      </div>
    </div>
  );
}
