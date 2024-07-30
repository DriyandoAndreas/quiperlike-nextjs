import FormBidangStudi from "./component/formdata";
import  ListData from "./component/listdata";
export default function BidangStudi() {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="flex items-center">Data Bidang Studi</div>
        <div>
          <FormBidangStudi/>
        </div>
      </div>
      <div className="py-5">
          <ListData/>
      </div>
    </div>
  );
}
