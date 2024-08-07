"use client";
import {
  CreateSkillKonten,
  getKategoriSKill,
} from "@/actions/formactionskillkonten";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
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
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// TODO: use zod for validation
type KategoriSkillKonten = {
  kategori_skill_id: number;
  nama_kategori: string;
};
export default function FormKategoriSkillKonten() {
  const [data, setData] = useState<KategoriSkillKonten[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await CreateSkillKonten(formData);
    toast({ description: "Data berhasil ditambahkan" });
    closeDialog();
  };
  useEffect(() => {
    async function getData() {
      const kategoriskill = await getKategoriSKill();
      if (kategoriskill) {
        setData(kategoriskill);
      } else {
        console.error("Data not found");
      }
    }
    getData();
  }, []);
  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={openDialog}>
            <Plus size={16} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <form onSubmit={handleSubmit}>
            <DialogHeader className="py-2">
              <DialogTitle>Form Tambah Data Konten Skill</DialogTitle>
              <DialogDescription>
                Tambahkan judul konten skill. Kategori skill sesuai dengan
                bidang studi
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2 py-2">
              <div className="grid flex-1 gap-2">
                <Label>Judul Skill Konten</Label>
                <Input
                  name="judul_konten"
                  placeholder="Judul Skill Konten"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="flex items-center space-x-2 py-2">
              <div className="grid flex-1 gap-2">
                <Label>Kategori Skill Konten</Label>
                <Select name="kategori_skill">
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih Kategori Skill Konten" />
                  </SelectTrigger>
                  <SelectContent>
                    {data.map((item) => (
                      <SelectItem
                        key={item.kategori_skill_id}
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
