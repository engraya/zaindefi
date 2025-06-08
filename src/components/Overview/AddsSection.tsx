import { useState } from "react";
import AdsGridCard from "./AdsGridCard";
import AdsHeader from "./AdsHeader";
import AdsSideSection from "./AdsSideSection";
import MobileSideBar from "./MobileSideBar";

function AddsSection() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="self-stretch inline-flex justify-start items-start gap-7">
      {/* Desktop/Tablet Sidebar */}
      <div className="hidden md:flex">
        <AdsSideSection />
      </div>
      {/* Mobile Sidebar and Content */}
      <div className="flex flex-col w-full md:hidden">
        <div className="flex flex-row w-full">
          <MobileSideBar />
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-5">
          <AdsHeader view={view} setView={setView} />
          <AdsGridCard view={view} />
        </div>
      </div>
      {/* Main Content for Desktop/Tablet */}
      <div className="flex-1 flex-col justify-start items-start gap-5 hidden md:flex">
        <AdsHeader view={view} setView={setView} />
        <AdsGridCard view={view} />
      </div>
    </div>
  );
}

export default AddsSection;