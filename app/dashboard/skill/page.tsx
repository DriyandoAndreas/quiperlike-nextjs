import FormKategoriSkill from './component/formadd';
import ListData from './component/listdata';

export default function Skills() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center">Data Kategori Skill</div>
        <div>
          <FormKategoriSkill></FormKategoriSkill>
        </div>
      </div>
      <div className="py-5">
        <ListData />
      </div>
    </>
  );
}
