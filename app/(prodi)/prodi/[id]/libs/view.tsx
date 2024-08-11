"use client";

import React, { useState, useEffect } from "react";
import {
  fetchall,
  fetchskill,
  fetchAslasan,
  fetchKampus,
} from "@/actions/viewdetailprodi";
import Link from "next/link";
import Image from "next/image";
type prodi = {
  prodi_id: number;
  nama_prodi: string;
  deskripsi_prodi: string;
  prospek_kerja_prodi: string;
  dunia_perkuliahan: string;
  bidang_studi: string;
  kategori_skill: string;
  kategori_alasan: string;
  kategori_kampus: string;
};
type skill = {
  kategori_skill_konten_id: number;
  judul_konten: string;
  kategori_skill: string;
};
type alasan = {
  alasan_memilih_prodi_id: number;
  isi_asalasan: string;
  kategori_asalasan: string;
};
type kampus = {
  kampus_terkait_id: number;
  nama_kampus: string;
  status_kampus: string;
  url_kampus: string;
  kategori_kampus : string;
};


export default function ViewDetail({ id }: { id: string }) {
  const [data, setData] = useState<prodi | null>(null);
  const [skilldata, setSkillData] = useState<skill[]>([]); // Menggunakan array of skill
  const [alasandata, setAlasanData] = useState<alasan[]>([]); // Menggunakan array of skill
  const [kampusdata, setKampusData] = useState<kampus[]>([]); // Menggunakan array of skill

  useEffect(() => {
    async function getData() {
      const datas = await fetchall(id);
      if (datas) {
        setData(datas);
      } else {
        console.error("Data not found");
      }
    }
    getData();
  }, [id]);

  useEffect(() => {
    async function getSkill() {
      if (data?.kategori_skill) {
        const datas = await fetchskill(data.kategori_skill);
        if (datas) {
          setSkillData(datas); // Mengatur data sebagai array
        } else {
          console.error("Data not found");
        }
      }
    }
    getSkill();
  }, [data?.kategori_skill]);
  useEffect(() => {
    async function getAlasan() {
      if (data?.kategori_alasan) {
        const datas = await fetchAslasan(data.kategori_alasan);
        if (datas) {
          setAlasanData(datas); // Mengatur data sebagai array
        } else {
          console.error("Data not found");
        }
      }
    }
    getAlasan();
  }, [data?.kategori_alasan]);
  useEffect(() => {
    async function getKampus() {
      if (data?.kategori_kampus) {
        const datas = await fetchKampus(data.kategori_kampus);
        if (datas) {
          setKampusData(datas); // Mengatur data sebagai array
        } else {
          console.error("Data not found");
        }
      }
    }
    getKampus();
  }, [data?.kategori_kampus]);

  return (
    <>
      <div className="container">
        <div className="relative w-full h-64 sm:h-64">
          <Image
            priority={true}
            src={`https://picsum.photos/800/200?random`}
            alt="random image"
            fill
            className="object-cover py-8"
            sizes="(max-width: 640px) 100vw, 800px"
          />
        </div>
        <div className="flex-col">
          <div>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              {data?.nama_prodi}
            </h2>
          </div>
          <div>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              {data?.bidang_studi}
            </p>
          </div>
        </div>
        <div className="flex my-8">
          <div>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              {data?.deskripsi_prodi}
            </p>
          </div>
        </div>
        <div className="flex-col my-8">
          <div className="py-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Pengetahuan dan Keahlian
            </h3>
          </div>
          <div className="flex flex-wrap">
            {skilldata.map((skill) => (
              <div
                key={skill.kategori_skill_konten_id}
                className="w-full sm:w-1/2 p-2"
              >
                <div className="p-4 border rounded-md">
                  <div>{skill.judul_konten}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-col my-8">
          <div className="py-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Kenapa Harus Memilih ini?
            </h3>
          </div>
          <div className="flex flex-wrap">
            {alasandata.map((skill) => (
              <div
                key={skill.alasan_memilih_prodi_id}
                className="w-full sm:w-1/2 p-2"
              >
                <div className="p-4 border rounded-md">
                  <div className="line-clamp-2">{skill.isi_asalasan}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-col my-8">
          <div className="py-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Prospek Kerja
            </h3>
          </div>
          <div className="flex flex-wrap">
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              {data?.prospek_kerja_prodi}
            </p>
          </div>
        </div>
        <div className="flex-col my-8">
          <div className="py-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Dunia Pekuliahan
            </h3>
          </div>
          <div className="flex flex-wrap">
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              {data?.dunia_perkuliahan}
            </p>
          </div>
        </div>
        <div className="flex-col my-8">
          <div className="py-4">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Kampus Terkait
            </h3>
          </div>
          <div className="flex flex-wrap">
            {kampusdata.map((skill) => (
              <div
                key={skill.kampus_terkait_id}
                className="w-full sm:w-1/2 p-2"
              >
                <div className="p-4 border rounded-md">
                  <Link href={skill.url_kampus}>
                    <div className="line-clamp-2">{skill.nama_kampus}</div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
