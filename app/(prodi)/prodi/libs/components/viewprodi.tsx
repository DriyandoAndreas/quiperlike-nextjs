"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  fetchall,
  filter,
  filterdata,
  fetchTotalProdiCount,
} from "@/actions/viewprodi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Filter = {
  bidang_studi_id: number;
  nama_bidang_studi: string;
  deskripsi_bidang_studi: string;
  _count: {
    prodi: number;
  };
};

type Prodi = {
  prodi_id: number;
  nama_prodi: string;
  deskripsi_prodi: string;
  prospek_kerja_prodi: string;
  dunia_perkuliahan: string;
  bidang_studi: string;
  url_banner: string | null;
};

export default function ProdiPage() {
  const [filters, setFilters] = useState<Filter[]>([]);
  const [prodiData, setProdiData] = useState<Prodi[]>([]);
  const [totalProdiCount, setTotalProdiCount] = useState<number>(0);
  useEffect(() => {
    // Fetch initial filter data (list of bidang studi)
    async function fetchFilters() {
      const fetchedFilters = await filter();
      setFilters(fetchedFilters);
    }
    //total bidang studi pada bidang studi
    async function fetchTotalProdiCountData() {
      const count = await fetchTotalProdiCount();
      setTotalProdiCount(count);
    }
    // Fetch all Prodi data initially
    async function fetchInitialProdiData() {
      const allProdi = await fetchall();
      setProdiData(allProdi);
    }

    fetchFilters();
    fetchTotalProdiCountData();
    fetchInitialProdiData();
  }, []);

  const handleFilterAll = async () => {
    const allData = await fetchall();
    setProdiData(allData);
  };

  const handleFilterByBidangStudi = async (bidangstudi: string) => {
    const filteredData = await filterdata(bidangstudi);
    setProdiData(filteredData);
  };

  return (
    <>
      <div className="bg-blue-200 py-4 dark:bg-blue-800">
        <div className="m-8 text-4xl font-bold">
          <span className="">Explore Prodi</span>
        </div>
        <div className="flex gap-4 m-8">
          <Select
            onValueChange={(value) => {
              if (value === "all") {
                handleFilterAll();
              } else {
                handleFilterByBidangStudi(value);
              }
            }}
          >
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Pilih Bidang Studi" />
            </SelectTrigger>
            <SelectContent className="w-64 bg-blue-400 text-white">
              <SelectItem value="all">
                Semua Bidang Studi{" "}
                <span className="mx-2 px-2">{totalProdiCount}</span>
              </SelectItem>
              {filters.map((item) => (
                <SelectItem
                  value={item.nama_bidang_studi}
                  key={item.bidang_studi_id}
                  className="flex justify-between"
                >
                  <span>{item.nama_bidang_studi}</span>
                  <span className="mx-2  px-2">{item._count.prodi}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-8">
        {prodiData.map((item) => (
          <Card
            key={item.prodi_id}
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 drop-shadow-lg hover:filter-none"
          >
            <div className="relative w-full h-0 pb-[56.25%]">
              <Image
                src={item.url_banner || "/default-bidang-studi.jpg"}
                alt="prodi"
                fill
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-r-md rounded-l-md rounded-br-none rounded-bl-none"
              />
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-1">{item.nama_prodi}</CardTitle>
              <CardDescription className="line-clamp-4">
                {item.deskripsi_prodi}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Link href={`/prodi/${item.prodi_id}`}>
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
