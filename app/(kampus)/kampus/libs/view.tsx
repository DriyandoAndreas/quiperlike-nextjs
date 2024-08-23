"use client";
import Image from "next/image";
import {
  fetchall,
  fetchProvinces,
  filterByProvince,
  fetchBidangStudi,
  filterByBidangStudi,
} from "@/actions/viewkampus";
import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Kampus = {
  kampus_terkait_id: number;
  status_kampus: string;
  url_kampus: string;
  nama_kampus: string;
  url_gambar: string | null;
};

export default function ViewKampus() {
  const [kampusData, setKampusData] = useState<Kampus[]>([]);
  const [provinces, setProvinces] = useState<(string | null)[]>([]);
  const [bidangStudi, setBidangStudi] = useState<(string | null)[]>([]);

  useEffect(() => {
    async function fetchAll() {
      const fetchedFilters = await fetchall();
      const formattedData = fetchedFilters.map((item: any) => ({
        kampus_terkait_id: item.kampus_terkait_id,
        status_kampus: item.status_kampus,
        url_kampus: item.url_kampus,
        nama_kampus: item.nama_kampus,
        url_gambar: item.url_gambar ? item.url_gambar : "/default-image.jpg",
      }));

      const fetchedProvinces = await fetchProvinces();
      setProvinces(fetchedProvinces);

      const fetchedBidangStudi = await fetchBidangStudi();
      setBidangStudi(fetchedBidangStudi);

      setKampusData(formattedData);
    }

    fetchAll();
  }, []);

  const handleFilterByProvince = async (province: string) => {
    if (province === "all") {
      const allData = await fetchall();
       const formattedData = allData.map((item: any) => ({
         kampus_terkait_id: item.kampus_terkait_id,
         status_kampus: item.status_kampus,
         url_kampus: item.url_kampus,
         nama_kampus: item.nama_kampus,
         url_gambar: item.url_gambar ? item.url_gambar : "/default-image.jpg",
       }));
      setKampusData(formattedData);
    } else {
      const filteredData = await filterByProvince(province);
      setKampusData(filteredData);
    }
  };

  const handleFilterByBidangStudi = async (bidang: string) => {
    if (bidang === "all") {
      const allData = await fetchall();
      const formattedData = allData.map((item: any) => ({
        kampus_terkait_id: item.kampus_terkait_id,
        status_kampus: item.status_kampus,
        url_kampus: item.url_kampus,
        nama_kampus: item.nama_kampus,
        url_gambar: item.url_gambar ? item.url_gambar : "/default-image.jpg",
      }));
      setKampusData(formattedData);
    } else {
      const filteredData = await filterByBidangStudi(bidang);
      setKampusData(filteredData);
    }
  };

  return (
    <>
      <div className="bg-blue-200 py-4 dark:bg-blue-800">
        <div className="m-8 text-4xl font-bold">
          <span className="">Cari Kampus Impianmu!</span>
        </div>
        <div className="flex gap-4 m-8">
          <Select onValueChange={handleFilterByProvince}>
            <SelectTrigger className="w-64 ">
              <SelectValue placeholder="Pilih Provinsi" />
            </SelectTrigger>
            <SelectContent className="bg-blue-400 text-white">
              <SelectItem value="all">Tampilkan Semua Provinsi</SelectItem>
              {provinces.map((province, index) => (
                <SelectItem key={index} value={province || ""}>
                  {province}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={handleFilterByBidangStudi}>
            <SelectTrigger className="w-64  ">
              <SelectValue placeholder="Pilih Bidang Studi" />
            </SelectTrigger>
            <SelectContent className="bg-blue-400 text-white">
              <SelectItem value="all">Tampilkan Semua Bidang Studi</SelectItem>
              {bidangStudi.map((bidang, index) => (
                <SelectItem key={index} value={bidang || ""}>
                  {bidang}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-8">
        {kampusData.map((item) => (
          <Card
            key={item.kampus_terkait_id}
            className="transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 lg:hover: duration-300 drop-shadow-lg lg:hover:filter-none"
          >
            <div className="relative w-full h-0 pb-[56.25%]">
              <Image
                src={item.url_gambar || "/default-image.jpg"}
                alt={item.nama_kampus}
                fill
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-r-md rounded-l-md rounded-br-none rounded-bl-none"
              />
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-1">{item.nama_kampus}</CardTitle>
              <CardDescription className="line-clamp-4">
                {item.url_kampus}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Link href={`${item.url_kampus}`}>
                <Button className="bg-blue-800 dark:text-white hover:bg-blue-950">
                  Lihat Selengkapnya
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
