
const Tabs = ({data}) => {
  return (
   
    <div className="flex flex-row w-full gap-1 py-2 hover:bg-slate-200 items-center justify-between p-1">
      <span className="flex flex-row gap-[5px]">
        <span className="size-3 "><img src={data.icon} alt="pen" className="size-4" /></span>
        <span className="font-semibold text-[13px]">{data.title}</span>
      </span>
      <span className="w-8 h-6 flex items-center justify-center bg-slate-100 border rounded-[5px] text-sm">{data.cross}</span>
    </div>
  

  )
}

export default Tabs
