import prisma from "@/lib/prismadb";
import { column } from "./column-table";
import { DataTable } from "./data-table";

export default async function ListData() {
  const listData = await prisma.prodi.findMany();
  return (
    <>
      {/* TODO: pagegination 10 per halaman */}
      <DataTable columns={column} data={listData} />
    </>
  );
}
