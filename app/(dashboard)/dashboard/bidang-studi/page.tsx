import FormBidangStudi from "./component/formadd";
import  ListData from "./component/listdata";
export default function BidangStudi() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center">Data Bidang Studi</div>
        <div>
          <FormBidangStudi/>
        </div>
      </div>
      <div className="py-5">
          <ListData/>
      </div>
    </>
  );
}
