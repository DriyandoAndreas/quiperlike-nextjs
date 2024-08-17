import prisma from "@/lib/prismadb";
import { column, Prodi } from "./column-table";
import { DataTable } from "./data-table";

export default async function ListData() {
  const listData:Prodi[] = await prisma.prodi.findMany();
  return (
    <>
      {/* TODO: pagegination 10 per halaman */}
      <DataTable columns={column} data={listData} />
    </>
  );
}
