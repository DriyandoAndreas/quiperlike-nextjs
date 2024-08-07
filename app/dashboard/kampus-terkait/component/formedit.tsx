"use client";
import { useEffect, useState } from "react";
import {
  getAll,
  Edit,
  getRelation,
} from "@/actions/formactionkampusterkait";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
//TODO: use zod for validation
type Kategori = {
  kategori_kampus_id: number;
  nama_kategori: string;
};
type FormEditProps = {
  id: number;
};

export default function FormEditData({ id }: FormEditProps) {
  const [data, setData] = useState({
    nama_kampus: "",
    status_kampus: "",
    url_kampus: "",
    kategori_kampus: "",
  });
  const [dataKategori, setDataKategori] = useState<Kategori[]>([]);
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await Edit(formData);
    toast({ description: "Data berhasil diedit" });
    closeDialog();
  };

  useEffect(() => {
    async function getData() {
      const data = await getAll(id);
      if (data) {
        setData(data);
      } else {
        console.error("Data not found");
      }
    }
    getData();
  }, [id]);

  useEffect(() => {
    async function getDataKategori() {
      const relation = await getRelation();
      if (relation) {
        setDataKategori(relation);
      } else {
        console.error("Data not found");
      }
    }
    getDataKategori();
  }, []);

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
              <DialogTitle>Form Edit Konten Skill</DialogTitle>
              <DialogDescription>Edit konten skill.</DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2 py-2">
              <div className="grid flex-1 gap-2">
                <Label>Nama</Label>
                <Input
                  name="nama_kampus"
                  placeholder="Judul Konten"
                  type="text"
                  value={data.nama_kampus}
                  onChange={(e) =>
                    setData({ ...data, nama_kampus: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="flex items-center space-x-2 py-2">
              <div className="grid flex-1 gap-2">
                <Label>Status</Label>
                <Input
                  name="status_kampus"
                  placeholder="Status Negeri/Swasta"
                  type="text"
                  value={data.status_kampus}
                  onChange={(e) =>
                    setData({ ...data, status_kampus: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="flex items-center space-x-2 py-2">
              <div className="grid flex-1 gap-2">
                <Label>Url</Label>
                <Input
                  name="url_kampus"
                  placeholder="Url"
                  type="text"
                  value={data.url_kampus}
                  onChange={(e) =>
                    setData({ ...data, url_kampus: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="flex items-center space-x-2 py-2">
              <div className="grid flex-1 gap-2">
                <Label>Kategori</Label>
                <Select name="kategori_kampus">
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih Kategori Skill Konten" />
                  </SelectTrigger>
                  <SelectContent>
                    {dataKategori.map((item) => (
                      <SelectItem
                        key={item.kategori_kampus_id}
                        value={item.nama_kategori}
                      >
                        {item.nama_kategori}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
