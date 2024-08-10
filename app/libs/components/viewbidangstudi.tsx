"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchall } from "@/actions/mainview";
type bidangstudi = {
  bidang_studi_id: number;
  nama_bidang_studi: string;
  deskripsi_bidang_studi: string;
};
import { useState, useEffect } from "react";
export default function ViewBidangStudi() {
  const [data, setData] = useState<bidangstudi[]>([]);
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
          <Card key={item.bidang_studi_id}>
            <CardHeader>
              <CardTitle>{item.nama_bidang_studi}</CardTitle>
              <CardDescription>{item.deskripsi_bidang_studi}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
}
