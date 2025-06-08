import { LogoutSvg, PlusIcon, WalletSvg } from "../../../Icons/Icons"
function WalletAddressModal() {
  return (
    <div className="absolute top-full mt-2 right-0 w-64 px-2 py-4 bg-gray-900 rounded-xl outline outline-offset-[-1px] outline-[#8689AA] inline-flex flex-col justify-start items-start gap-2.5">
    <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <div className="self-stretch flex flex-col justify-start items-start gap-1">
            <div data-property-1="Default" data-show-icon-left="false" data-show-icon-right="false" data-supporting-text="true" className="self-stretch px-3 py-2 rounded-md flex flex-col justify-start items-start gap-1">
                <div className="self-stretch inline-flex justify-start items-start gap-1">
                    <div className="flex-1 flex justify-start items-start gap-1">
                        <div className="inline-flex flex-col justify-center items-start gap-1.5">
                            <div className="inline-flex justify-start items-start gap-1">
                                <div className="flex justify-start items-start gap-2.5">
                                    <p className="justify-center text-indigo-50 text-sm font-semibold leading-tight">0x6134...20f6</p>
                                </div>
                            </div>
                            <div className="inline-flex justify-start items-start gap-1">
                                <div className="flex justify-start items-start gap-2.5">
                                    <p className="justify-center text-[#8689AA] text-xs font-normal leading-none">$10,000.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
                <div  className="self-stretch px-3 py-2 border-b border-[#8689AA] flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch inline-flex justify-start items-start gap-1">
                        <div className="flex-1 flex justify-start items-start gap-1">
                            <div className="inline-flex flex-col justify-center items-start gap-1">
                                <div className="inline-flex justify-start items-start gap-1">
                                    <div className="w-5 h-5 relative">
                                        <PlusIcon/>
                                    </div>
                                    <div className="flex justify-start items-start gap-2.5">
                                        <p className="justify-center text-indigo-50 text-sm font-normal leading-tight">Connect wallet</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="self-stretch px-3 py-2 rounded-md flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch inline-flex justify-start items-start gap-1">
                        <div className="flex-1 flex justify-start items-start gap-1">
                            <div className="inline-flex flex-col justify-center items-start gap-1">
                                <div className="inline-flex justify-start items-start gap-1">
                                    <div className="w-5 h-5 relative overflow-hidden">
                                        <WalletSvg/>
                                    </div>
                                    <div className="flex justify-start items-start gap-2.5">
                                        <p className="justify-center text-indigo-50 text-sm font-normal leading-tight">Portfolio</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="self-stretch px-3 py-2 border-t border-[#8689AA] flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch inline-flex justify-start items-start gap-1">
                        <div className="flex-1 flex justify-start items-start gap-1">
                            <div className="inline-flex flex-col justify-center items-start gap-1">
                                <div className="inline-flex justify-start items-start gap-1">
                                    <div data-style="linear" className="w-5 h-5 relative overflow-hidden">
                                        <LogoutSvg/>
                                    </div>
                                    <div className="flex justify-start items-start gap-2.5">
                                        <div className="justify-center text-[#E85455] text-sm font-normal leading-tight">Logout</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default WalletAddressModal