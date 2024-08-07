import ListData from "./component/listdata";
import FormAddData from "./component/formadd";

export default function DataKampus() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center">Data Kategori Kelebihan Prodi</div>
        <div>
          <FormAddData></FormAddData>
        </div>
      </div>
      <div className="py-5">
        <ListData />
      </div>
    </>
  );
}
