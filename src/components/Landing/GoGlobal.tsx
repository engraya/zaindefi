import { leftImage, rightImage } from "../../assets"

function GoGlobal() {
  return (
<div className="w-full px-44 inline-flex flex-col justify-start items-start gap-2.5">
    <div className="w-full flex justify-center items-center max-w-[1075.92px] h-60 relative">
        <div className="w-full max-w-[712px] left-[187.96px] top-[63.96px] absolute justify-start text-indigo-200 text-6xl font-extrabold  leading-[70px]">No Limits, No Borders</div>
        <h1 className="w-full max-w-96 left-[356.96px] top-[133.96px] absolute justify-start text-4xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl md:text-6xl">
        <span className="block xl:inline cursor-pointer">
            <span className="bg-gradient-to-r from-[#A97EF0] to-[#a87fe9] bg-clip-text text-transparent">
            → Go global
            </span>
        </span>
        </h1>
        <div className="w-44 h-60 left-0 top-0 absolute">
            <img src={leftImage} alt="" />
        </div>
        <div className="w-44 h-60 left-[897px] top-0 absolute">
        <img src={rightImage} alt="" />
        </div>
    </div>
</div>
  )
}

export default GoGlobal




