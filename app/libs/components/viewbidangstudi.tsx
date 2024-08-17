"use client";
import Image from "next/image";
import {
  Card,
  CardDescription,
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
      <div className="md:flex items-center py-8">
        <div className="md:w-1/2 lg:w-2/3">
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
        <div className="relative w-full md:w-1/2 lg:w-1/3 mt-6 md:mt-0">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              fill="#0F62FE"
              d="M52.6,-24.6C57.6,-1.8,43.7,19.6,22.4,36.4C1,53.2,-27.7,65.5,-47.8,53.7C-67.8,42,-79.2,6.3,-69.8,-22.6C-60.4,-51.5,-30.2,-73.6,-3.2,-72.5C23.8,-71.5,47.7,-47.4,52.6,-24.6Z"
              transform="scale(1.5) translate(75 75)"
            />
          </svg>
          <Image
            src={"/banner-section-home.png"}
            alt={"banner section home"}
            width={200}
            height={200}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-md z-10 scale-50"
          />
        </div>
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
