import StartedCard from "./StartedCard";
import { cardData } from "../../lib/cardData";

function HowToGetStarted() {
  return (
    <div className="w-full px-4 sm:px-10 lg:px-52 py-16 sm:py-24 lg:py-28 bg-gray-950 flex flex-col justify-center items-center gap-8 sm:gap-10">
      <div className="w-full flex flex-col justify-start sm:justify-center items-center gap-10 sm:gap-14">
        <h2 className="text-indigo-200 text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight sm:leading-[70px]">
          How to Get Started
        </h2>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6">
          {cardData.map((item, idx) => (
            <StartedCard
              key={idx}
              number={item.number}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowToGetStarted;
