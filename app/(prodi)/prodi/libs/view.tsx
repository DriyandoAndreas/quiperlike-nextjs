"use client";
import useSWR from "swr";
import React, { useState } from "react";
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
import Loading from "../loading";

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
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  // Fetching all Prodi data
  const { data: prodiData, error: prodiError } = useSWR("prodi", fetchall);

  // Fetching filters
  const { data: filters, error: filterError } = useSWR("filters", filter);

  // Fetching total Prodi count
  const { data: totalProdiCount, error: totalProdiCountError } = useSWR(
    "totalProdiCount",
    fetchTotalProdiCount
  );

  // Handle errors
  if (prodiError || filterError || totalProdiCountError) {
    return <div>Error loading data</div>;
  }

  // Handle loading states
  if (!prodiData || !filters || !totalProdiCount) {
    return <Loading />;
  }

  // Filtering prodi data based on selected filter
  const filteredProdiData =
    selectedFilter === "all"
      ? prodiData
      : prodiData.filter((item) => item.bidang_studi === selectedFilter);

  return (
    <>
      <div className="bg-blue-200 py-4 dark:bg-blue-800">
        <div className="m-8 text-4xl font-bold">
          <span className="">Explore Prodi</span>
        </div>
        <div className="flex gap-4 m-8">
          <Select
            onValueChange={(value) => setSelectedFilter(value)}
            defaultValue="all"
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
        {filteredProdiData.map((item) => (
          <Card
            key={item.prodi_id}
            className="transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 lg:hover: duration-300 drop-shadow-lg lg:hover:filter-none"
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
