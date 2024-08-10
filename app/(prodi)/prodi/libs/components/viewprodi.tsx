"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchall } from "@/actions/viewprodi";
type prodi = {
  prodi_id: number;
  nama_prodi: string;
  deskripsi_prodi: string;
  prospek_kerja_prodi: string;
  dunia_perkuliahan: string;
  bidang_studi: string;
};
import { useState, useEffect } from "react";
export default function ViewProdi() {
  const [data, setData] = useState<prodi[]>([]);
  useEffect(() => {
    async function getData() {
      const datas = await fetchall();
      if (datas) {
        setData(datas);
      } else {
        console.error("Data not found");
      }
    }
    getData();
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <Card key={item.prodi_id}>
            <CardHeader>
              <CardTitle>{item.nama_prodi}</CardTitle>
              <CardDescription className="line-clamp-3">
                {item.deskripsi_prodi}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
}
