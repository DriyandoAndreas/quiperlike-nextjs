import FormAddData from "./component/formadd";
import ListData from "./component/listdata";
export default function Kelebihan() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center">Data Kampus Terkait</div>
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
