import prisma from "@/lib/prismadb";
import { column } from "./column-table";
import { DataTable } from "./data-table";

export default async function ListData() {
  const listData = await prisma.kategori_skill_konten.findMany();
  return (
    <>
      <DataTable columns={column} data={listData} />
    </>
  );
}
