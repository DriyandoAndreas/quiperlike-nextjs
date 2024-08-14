"use client";

import { fetchall } from "@/actions/viewkampus";
import React, { useState, useEffect } from "react";
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
};
export default function ViewKampus() {
  const [kampusData, setKampusData] = useState<Kampus[]>([]);
  useEffect(() => {
    async function fetchAll() {
      const fetchedFilters = await fetchall();

      // Assuming fetchedFilters is an array of objects
      // You may need to map or restructure the fetched data
      const formattedData = fetchedFilters.map((item: any) => ({
        kampus_terkait_id: item.kampus_terkait_id,
        status_kampus: item.status_kampus,
        url_kampus: item.url_kampus,
        nama_kampus: item.nama_kampus,
      }));

      setKampusData(formattedData);
    }

    fetchAll();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-8">
        {kampusData.map((item) => (
          <Card key={item.kampus_terkait_id}>
            <CardHeader>
              <CardTitle className="line-clamp-1">{item.nama_kampus}</CardTitle>
              <CardDescription className="line-clamp-4">
                {item.url_kampus}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Link href={`${item.url_kampus}`}>
                <Button>Lihat Selengkapnya</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
