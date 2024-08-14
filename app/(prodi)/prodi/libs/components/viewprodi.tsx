"use client";
import React, { useState, useEffect } from "react";
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
    <div className="container py-4">
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
        <SelectContent className="w-64">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-8">
        {prodiData.map((item) => (
          <Card key={item.prodi_id}>
            <CardHeader>
              <CardTitle className="line-clamp-1">{item.nama_prodi}</CardTitle>
              <CardDescription className="line-clamp-4">
                {item.deskripsi_prodi}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Link href={`/prodi/${item.prodi_id}`}>
                <Button>Lihat Selengkapnya</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
