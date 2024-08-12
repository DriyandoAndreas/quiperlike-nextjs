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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { fetchall, filter, filterdata } from "@/actions/viewprodi";

type Filter = {
  bidang_studi_id: number;
  nama_bidang_studi: string;
  deskripsi_bidang_studi: string;
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

  useEffect(() => {
    // Fetch initial filter data (list of bidang studi)
    async function fetchFilters() {
      const fetchedFilters = await filter();
      setFilters(fetchedFilters);
    }

    // Fetch all Prodi data initially
    async function fetchInitialProdiData() {
      const allProdi = await fetchall();
      setProdiData(allProdi);
    }

    fetchFilters();
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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Filter By Bidang Studi</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 h-56 overflow-auto">
          <DropdownMenuCheckboxItem onClick={handleFilterAll}>
            Semua Bidang Studi
          </DropdownMenuCheckboxItem>
          {filters.map((item) => (
            <DropdownMenuCheckboxItem
              key={item.bidang_studi_id}
              onClick={() => handleFilterByBidangStudi(item.nama_bidang_studi)}
            >
              {item.nama_bidang_studi}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

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
