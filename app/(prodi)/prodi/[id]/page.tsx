import ViewDetail from "./libs/view";

export default function page({ params }: {params: {id:string}}) {
  return (
      <div>
          <ViewDetail id={params.id}></ViewDetail>
      </div>
  )
}
