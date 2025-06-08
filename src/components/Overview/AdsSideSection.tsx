import { coin, silver, crudeOil, diamond, gold, guns, watches } from "../../assets/coins"
import SideCard from "./SideCard"

const sideCardsData = [
  { image: gold, title: "Gold", adsCount: 12 },
  { image: silver, title: "Silver", adsCount: 4 },
  { image: "https://placehold.co/40x40", title: "Wine", adsCount: 120 },
  { image: watches, title: "Watches", adsCount: 23 },
  { image: diamond, title: "Diamonds", adsCount: 678 },
  { image: coin, title: "Coins", adsCount: 876 },
  { image: crudeOil, title: "Crude Oil", adsCount: 987 },
  { image: guns, title: "Guns", adsCount: 579 },
]

function AdsSideSection() {
  return (
    <div className="w-52 bg-gray-900 rounded-xl outline outline-offset-[-1px] outline-gray-800 inline-flex flex-col justify-start items-start">
      {sideCardsData.map((card, idx) => (
        <SideCard
          key={card.title + idx}
          image={card.image}
          title={card.title}
          adsCount={card.adsCount}
        />
      ))}
    </div>
  )
}

export default AdsSideSection