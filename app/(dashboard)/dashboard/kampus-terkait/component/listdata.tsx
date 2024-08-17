import prisma from "@/lib/prismadb";
import { column, Konten } from "./column-table";
import { DataTable } from "./data-table";

export default async function ListData() {
  const listData:Konten[] = await prisma.kampus_terkait.findMany();
  return (
    <>
      <DataTable columns={column} data={listData} />
    </>
  );
}
