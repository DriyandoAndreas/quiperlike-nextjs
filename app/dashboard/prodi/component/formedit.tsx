"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Edit,
  getAlasan,
  getBidangStudi,
  getKampus,
  getSkill,
  getAll,
} from "@/actions/formactionprodi";
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
import { Textarea } from "@/components/ui/textarea";
//TODO: use zod for validation
type FormEditProps = {
  id: number;
};
type RelasiBidangStudi = {
  bidang_studi_id: number;
  nama_bidang_studi: string;
};
type RelasiKategoriSkill = {
  kategori_skill_id: number;
  nama_kategori: string;
};
type RelasiKategoriAlasan = {
  kategori_alasan_id: number;
  nama_kategori: string;
};
type RelasiKategoriKampus = {
  kategori_kampus_id: number;
  nama_kategori: string;
};
export default function FormEdit({ id }: FormEditProps) {
  const [data, setData] = useState({
    nama_prodi: "",
    deskripsi_prodi: "",
    prospek_kerja_prodi: "",
    bidang_studi: "",
    kategori_skill: "",
    kategori_alasan: "",
    kategori_kampus: "",
  });
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bidangsutdi, setbidangstudi] = useState<RelasiBidangStudi[]>([]);
  const [skill, setskill] = useState<RelasiKategoriSkill[]>([]);
  const [alasan, setalasan] = useState<RelasiKategoriAlasan[]>([]);
  const [kampus, setkampus] = useState<RelasiKategoriKampus[]>([]);
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
    async function getAllData() {
      const data = await getAll(id);
      if (data) {
        setData(data);
      } else {
        console.error("Data not found");
      }
    }
    getAllData();
  }, [id]);

  useEffect(() => {
    async function getData() {
      const bidangstudi = await getBidangStudi();
      const skill = await getSkill();
      const alasan = await getAlasan();
      const kampus = await getKampus();
      if (bidangstudi && skill && alasan && kampus) {
        setbidangstudi(bidangstudi);
        setskill(skill);
        setalasan(alasan);
        setkampus(kampus);
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
          <Button variant={"outline"} onClick={openDialog}>
            <Pencil size={16} />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-xl max-h-full overflow-auto m-4">
          <form onSubmit={handleSubmit}>
            <DialogHeader className="py-2">
              <DialogTitle>Form Tambah Data</DialogTitle>
              <DialogDescription>Tambahkan data prodi</DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2 py-2">
              <div className="grid flex-1 gap-2">
                <Label>Nama Prodi</Label>
                <Input
                  name="nama_prodi"
                  placeholder="Nama Prodi"
                  type="text"
                  value={data.nama_prodi}
                  onChange={(e) =>
                    setData({ ...data, nama_prodi: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="flex items-center space-x-2 py-2">
              <div className="grid flex-1 gap-2">
                <Label>Deskripsi Bidang Studi</Label>
                <Textarea
                  name="deskripsi_prodi"
                  placeholder="Deskripsi Prodi"
                  value={data.deskripsi_prodi}
                  onChange={(e) =>
                    setData({ ...data, deskripsi_prodi: e.target.value })
                  }
                  required
                ></Textarea>
              </div>
            </div>

            <div className="flex items-center space-x-2 py-2">
              <div className="grid flex-1 gap-2">
                <Label>Prospek Kerja</Label>
                <Textarea
                  name="prospek_kerja_prodi"
                  placeholder="Prospek Kerja"
                  value={data.prospek_kerja_prodi}
                  onChange={(e) =>
                    setData({ ...data, prospek_kerja_prodi: e.target.value })
                  }
                  required
                ></Textarea>
              </div>
            </div>
            <div className="flex items-center space-x-2 py-2">
              {/* <Label>Bidang Studi</Label> */}
              <Select name="bidang_studi" defaultValue={data.bidang_studi}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Bidang Studi" />
                </SelectTrigger>
                <SelectContent>
                  {bidangsutdi.map((item) => (
                    <SelectItem
                      key={item.bidang_studi_id}
                      value={item.nama_bidang_studi}
                    >
                      {item.nama_bidang_studi}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2 py-2">
              {/* <Label>Kategori Skill</Label> */}
              <Select name="kategori_skill" defaultValue={data.kategori_skill}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Kategori Skill" />
                </SelectTrigger>
                <SelectContent>
                  {skill.map((item) => (
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
            <div className="flex items-center space-x-2 py-2">
              {/* <Label>Kategori Alasan</Label> */}
              <Select name="kategori_alasan" defaultValue={data.kategori_alasan}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Kategori Alasan" />
                </SelectTrigger>
                <SelectContent>
                  {alasan.map((item) => (
                    <SelectItem
                      key={item.kategori_alasan_id}
                      value={item.nama_kategori}
                    >
                      {item.nama_kategori}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2 py-2">
              {/* <Label>Kategori Kampus</Label> */}
              <Select name="kategori_kampus" defaultValue={data.kategori_kampus}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Kategori Kampus" />
                </SelectTrigger>
                <SelectContent>
                  {kampus.map((item) => (
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
