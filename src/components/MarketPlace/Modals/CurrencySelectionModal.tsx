
function CurrencySelectionModal() {
  return (
    <div className="w-96 p-2 bg-gray-900 rounded-xl inline-flex flex-col justify-start items-start gap-2.5">
    <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <div data-property-1="Default" data-show-all="false" data-show-icon="false" className="self-stretch flex flex-col justify-start items-start gap-1">
            <div className="self-stretch h-9 px-3 py-2 bg-gray-800 rounded-md outline  outline-offset-[-1px] outline-slate-600 inline-flex justify-start items-center gap-3 overflow-hidden">
                <div className="flex-1 flex justify-start items-center gap-3">
                    <div data-style="linear" className="w-5 h-5 relative overflow-hidden">
                        <div className="w-4 h-4 left-[1.67px] top-[1.67px] absolute bg-slate-500" />
                    </div>
                    <div className="flex justify-start items-center gap-0.5">
                        <div className="justify-center text-slate-600 text-sm font-normal leading-tight">search</div>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                        <div className="flex justify-start items-center gap-1" />
                    </div>
                </div>
            </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-1">
            <div data-property-1="Default" className="w-60 px-3 py-2 rounded-md flex flex-col justify-start items-start gap-1">
                <div className="self-stretch inline-flex justify-start items-start gap-3">
                    <div className="flex justify-start items-center gap-1">
                        <div className="w-6 h-6 relative">
                            <div className="w-3 h-5 left-[2px] top-[3.20px] absolute bg-red-500" />
                            <div className="w-3.5 h-5 left-[8.44px] top-[2px] absolute bg-emerald-500" />
                        </div>
                        <div className="justify-center text-indigo-50 text-sm font-semibold leading-tight">VND</div>
                    </div>
                </div>
            </div>
            <div data-property-1="Default" className="w-60 px-3 py-2 rounded-md flex flex-col justify-start items-start gap-1">
                <div className="self-stretch inline-flex justify-start items-start gap-3">
                    <div className="flex justify-start items-center gap-1">
                        <div className="w-6 h-6 relative">
                            <div className="w-3 h-5 left-[2px] top-[3.20px] absolute bg-red-500" />
                            <div className="w-3.5 h-5 left-[8.44px] top-[2px] absolute bg-emerald-500" />
                        </div>
                        <div className="justify-center text-indigo-50 text-sm font-semibold leading-tight">USD</div>
                    </div>
                </div>
            </div>
            <div data-property-1="Default" className="w-60 px-3 py-2 rounded-md flex flex-col justify-start items-start gap-1">
                <div className="self-stretch inline-flex justify-start items-start gap-3">
                    <div className="flex justify-start items-center gap-1">
                        <div className="w-6 h-6 relative">
                            <div className="w-3 h-5 left-[2px] top-[3.20px] absolute bg-red-500" />
                            <div className="w-3.5 h-5 left-[8.44px] top-[2px] absolute bg-emerald-500" />
                        </div>
                        <div className="justify-center text-indigo-50 text-sm font-semibold leading-tight">INR</div>
                    </div>
                </div>
            </div>
            <div data-property-1="Default" className="w-60 px-3 py-2 rounded-md flex flex-col justify-start items-start gap-1">
                <div className="self-stretch inline-flex justify-start items-start gap-3">
                    <div className="flex justify-start items-center gap-1">
                        <div className="w-6 h-6 relative">
                            <div className="w-3 h-5 left-[2px] top-[3.20px] absolute bg-red-500" />
                            <div className="w-3.5 h-5 left-[8.44px] top-[2px] absolute bg-emerald-500" />
                        </div>
                        <div className="justify-center text-indigo-50 text-sm font-semibold leading-tight">NGN</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default CurrencySelectionModal