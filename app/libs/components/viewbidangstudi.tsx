"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { fetchall } from "@/actions/mainview";
type bidangstudi = {
  bidang_studi_id: number;
  nama_bidang_studi: string;
  deskripsi_bidang_studi: string;
};
import { useState, useEffect } from "react";
import Link from "next/link";
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
      <div className="md:flex items-center py-8 gap-8">
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
            width={600}
            height={600}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-md z-10"
          />
        </div>
      </div>
      <div className="md:flex flex-col items-center py-8 gap-8">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Kamu ingin tahu lebih banyak tentang prodi impianmu?
          </h1>
          <p className="py-4">
            Pilihlah Bidang studi sesuai dengan apa yang kamu inginkan, jangan
            sampai salah pilih ya sobat!
          </p>
          <div className="py-4">
            <Button className="bg-blue-800 hover:bg-blue-950">
              <Link href="/prodi">Cari Tahu Disini</Link>
            </Button>
          </div>
        </div>
        <div className="py-4 rounded-md">
          <Image
            src={"/bidang-studi-banner.jpg"}
            alt={"bidang studi"}
            width={600}
            height={600}
            className=" w-full h-full object-cover rounded-md z-10"
          />
        </div>
      </div>
      <div className="sm:flex sm:flex-col lg:flex lg:flex-row items-center py-8 gap-8">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Kampus mana yang kamu pilih?
          </h1>
          <p className="py-4">
            Pilihan kampus ada di indonesia, seusaikan dengan kebutuhanmu.
            cari tahu tentang fasilitas, lingkungan kampus, biaya dan lainnya.
          </p>
          <div className="py-4">
            <Button className="bg-blue-800 hover:bg-blue-950">
              <Link href="/kampus">Lihat Disini</Link>
            </Button>
          </div>
        </div>

        <div className="py-4 rounded-md">
          <Image
            src={"/kampus-banner.jpg"}
            alt={"bidang studi"}
            width={600}
            height={600}
            className=" w-full h-full object-cover rounded-md z-10"
          />
        </div>
      </div>
    </>
  );
}
