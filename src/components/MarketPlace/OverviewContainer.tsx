import { DropDownIcon } from "../Icons"

function OverviewContainer() {
  return (
    <div className="self-stretch inline-flex justify-between items-start">
    <div className="inline-flex flex-col justify-start items-start gap-1">
        <h6 className="justify-start text-gray-200 text-3xl font-semibold leading-9">Overview</h6>
        <p className="justify-start text-violet-100 text-base font-normal leading-normal">Track and manage your </p>
    </div>
    <div className="rounded-3xl flex justify-start items-center gap-2">
        <div  className="px-4 py-2 bg-neutral-800 rounded-3xl flex justify-center items-center overflow-hidden">
            <div className="h-4 flex justify-center items-center gap-2">
                <p className="justify-start text-indigo-50 text-xs font-normal leading-tight">Ads</p>
                <div className="flex justify-center items-center w-4 h-4 relative">
                    <div className="flex justify-center items-center w-4 h-4 left-0 top-0 absolute">
                        <DropDownIcon/>
                    </div>
                </div>
            </div>
        </div>
        <div  className="px-4 py-2 bg-neutral-800 rounded-3xl flex justify-center items-center overflow-hidden">
            <div className="h-4 flex justify-center items-center gap-2">
                <p className="justify-start text-indigo-50 text-xs font-normal leading-tight">Orders</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default OverviewContainer