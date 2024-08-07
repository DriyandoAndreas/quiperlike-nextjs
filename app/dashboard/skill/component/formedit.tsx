"use client";
import { useEffect, useState } from "react";
import { getBidangStudiById } from "@/actions/formactionbidangstudi";
import { Button } from "@/components/ui/button";
import { EditSkill, getSkillById } from "@/actions/formactoinskill";
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
type FormEditKategoriSkillProps = {
  id: number;
};
export default function FormEditKategoriSkill({ id }: FormEditKategoriSkillProps) {
  const [data, setData] = useState({
    nama_kategori: "",
  });
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await EditSkill(formData);
    toast({ description: "Data berhasil diedit" });
    closeDialog();
  };

  useEffect(() => {
    async function getData() {
      const skill = await getSkillById(id);
      if (skill) {
        setData(skill);
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
              <DialogTitle>Form Edit Kategori Skill</DialogTitle>
              <DialogDescription>Edit nama kategori skill.</DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2 py-2">
              <div className="grid flex-1 gap-2">
                <Label>Nama Kategori</Label>
                <Input
                  name="nama_kategori"
                  placeholder="Nama Kategori"
                  type="text"
                  value={data.nama_kategori}
                  onChange={(e) =>
                    setData({ ...data, nama_kategori: e.target.value })
                  }
                  required
                />
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
