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
      <div className="py-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Solution of Information Career College
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          SoICC adalah singkatan dari Solution of Information Career College
          yang dikembangan untuk guru bimbingan dan konseling guna memudahkan
          guru bimbingan dan konseling dalam memberikan layanan bidang karir
          untuk peserta didik dalam hal ini perencanaan karir guna memberikan
          Pemahaman dan informasi terkait program studi di perguruan tinggi.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
