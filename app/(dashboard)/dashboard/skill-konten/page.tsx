import FormKategoriSkillKonten from "./component/formadd";
import ListData from "./component/listdata";

export default function page() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center">Data Skill Konten</div>
        <div>
          <FormKategoriSkillKonten></FormKategoriSkillKonten>
        </div>
      </div>
      <div className="py-5">
        <ListData />
      </div>
    </>
  );
}
