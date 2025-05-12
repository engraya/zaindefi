import type { StartedCardProps } from "../../types/card"

function StartedCard({ number, title, description }: StartedCardProps) {
  return (
    <div data-property-1="Default" className="w-80 h-64 relative rounded-xl outline outline-offset-[-1px] outline-slate-600 overflow-hidden">
    <div className="w-80 h-64 left-0 top-0 absolute bg-gray-800 rounded-xl inline-flex justify-start items-start">
        <div className="self-stretch flex justify-start items-start">
            <div className="self-stretch relative inline-flex flex-col justify-start items-start">
                <div data-property-1="default" className="w-16 h-16 relative opacity-0 bg-gray-900">
                    <div className="w-16 h-16 left-0 top-0 absolute opacity-50 rounded-[31.75px] blur-[9.58px]" />
                </div>
                <div data-property-1="default" className="w-16 h-16 relative opacity-0 bg-gray-900">
                    <div className="w-16 h-16 left-0 top-0 absolute opacity-50 rounded-[31.75px] blur-[9.58px]" />
                </div>
                <div data-property-1="default" className="w-16 h-16 relative opacity-0 bg-gray-900">
                    <div className="w-16 h-16 left-0 top-0 absolute opacity-50 rounded-[31.75px] blur-[9.58px]" />
                </div>
                <div data-property-1="default" className="w-16 h-16 left-[193.96px] top-0 absolute opacity-0 bg-gray-900">
                    <div className="w-16 h-16 left-0 top-0 absolute opacity-50 rounded-[31.75px] blur-[9.58px]" />
                </div>
            </div>
            <div className="self-stretch relative inline-flex flex-col justify-start items-start">

                <div className="left-[-40.65px] top-[24px] absolute flex flex-col justify-start items-start gap-2">
                <div data-style="bold" className="w-14 h-14 relative overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="60" viewBox="0 0 59 60" fill="none">
                <path d="M14.1539 25.374L29.1608 29.6617C29.3815 29.7247 29.6155 29.7247 29.8362 29.6617L44.843 25.374C45.7097 25.1264 46.0239 24.0611 45.4304 23.3827L30.4235 6.23201C29.9338 5.67234 29.0632 5.67234 28.5734 6.23201L13.5666 23.3827C12.973 24.0611 13.2873 25.1264 14.1539 25.374Z" fill="white"/>
                <path d="M28.5089 52.9985L14.4277 33.8883C13.7321 32.9443 14.6275 31.6551 15.7549 31.9773L29.1608 35.8075C29.3815 35.8706 29.6155 35.8706 29.8362 35.8075L43.2421 31.9773C44.3695 31.6551 45.2648 32.9443 44.5693 33.8883L30.488 52.9985C29.9968 53.6652 29.0002 53.6652 28.5089 52.9985Z" fill="white"/>
                </svg>
                </div>
                    <div className="flex flex-col text-white justify-start items-start gap-3">
                        <div className="inline-flex justify-start items-start gap-4">
                            <p className="justify-start text-White text-xl font-semibold leading-snug">{number}</p>
                            <p className="justify-start text-White text-xl font-semibold leading-snug">{title}</p>
                        </div>
                        <div className="w-72 justify-start text-zinc-400 text-base font-normal leading-snug">{description}</div>
                    </div>
                    <button className="px-4 py-2 bg-indigo-700 rounded cursor-pointer text-white inline-flex justify-center items-center overflow-hidden">
                        <p className="justify-start text-White text-xs font-normal leading-tight">Connect Wallet</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default StartedCard