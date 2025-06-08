import { BackIcon, FrontIcon } from "../../Icons/AddsIcons"

function Pagination() {
  return (
    <div className="self-stretch inline-flex flex-col justify-start items-center gap-2.5">
    <div  className="inline-flex justify-center items-center gap-1">
        <div  className="p-2 bg-gray-900 rounded-3xl flex justify-center items-center gap-2">
            <BackIcon/>
        </div>
        <div data-shape="square" data-size="small" data-state="inactive" className="w-6 h-6 p-3 bg-gray-900 rounded-md inline-flex flex-col justify-center items-center gap-2">
            <p className="text-center justify-center text-white text-sm font-normal leading-tight">1</p>
        </div>
        <div data-shape="square" data-size="small" data-state="inactive" className="w-6 h-6 p-3 bg-gray-900 rounded-md inline-flex flex-col justify-center items-center gap-2">
            <p className="text-center justify-center text-white text-sm font-normal leading-tight">2</p>
        </div>
        <div data-shape="square" data-size="small" data-state="active v2" className="w-6 h-6 p-3 bg-gray-900 rounded-md outline outline-offset-[-1px] outline-[#2A77EB] inline-flex flex-col justify-center items-center gap-2">
            <p className="text-center justify-center text-indigo-50 text-sm font-normal leading-tight">3</p>
        </div>
        <div data-size="small" data-state="inactive" className="w-6 h-6 p-2 bg-gray-900 rounded-md inline-flex flex-col justify-center items-center gap-2">
            <p className="text-center justify-start text-white text-sm font-normal leading-tight">...</p>
        </div>
        <div data-shape="square" data-size="small" data-state="inactive" className="w-6 h-6 p-3 bg-gray-900 rounded-md inline-flex flex-col justify-center items-center gap-2">
            <p className="text-center justify-center text-white text-sm font-normal leading-tight">12</p>
        </div>
        <div data-shape="square" data-size="small" data-state="inactive" className="w-6 h-6 p-3 bg-gray-900 rounded-md inline-flex flex-col justify-center items-center gap-2">
            <p className="text-center justify-center text-white text-sm font-normal leading-tight">13</p>
        </div>
        <div data-shape="square" data-size="small" data-state="inactive" className="w-6 h-6 p-3 bg-gray-900 rounded-md inline-flex flex-col justify-center items-center gap-2">
            <p className="text-center justify-center text-white text-sm font-normal leading-tight">14</p>
        </div>
        <div className="p-2 bg-gray-900 rounded-[46px] flex justify-center items-center gap-2">
            <FrontIcon/>
        </div>
    </div>
</div>
  )
}

export default Pagination