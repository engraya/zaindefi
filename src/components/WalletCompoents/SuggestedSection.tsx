import { ViewIcon, ProIcon, StarIcon } from "../../Icons/WalletIcons"
import SuggestionCard from "./SuggestionCard"
import { coin, silver, diamond, gold } from "../../assets/coins"

const suggestionCardsData = [
  {
    image: gold,
    title: "Gold – 250g Bar",
    subtitle: "LBMA Certified",
    badge: "Top Rated",
    badgeBg: "bg-gray-800",
    certIcon: <ProIcon />,
    certLabel: "GoldTrust",
    rating: "4.9",
    ratingIcon: <StarIcon />,
    price: "$17,105.00",
    buttonLabel: "View Details",
  },
  {
    image: silver,
    title: "Silver – American Eagles",
    subtitle: "Set of 10 Coins",
    badge: undefined,
    badgeBg: "",
    certIcon: <ProIcon />,
    certLabel: "SilverStack",
    rating: "4.7",
    ratingIcon: <StarIcon />,
    price: "$385.00",
    buttonLabel: "View Details",
  },
  {
    image: diamond,
    title: "Platinum – 100g Bar",
    subtitle: "PGM Certified",
    badge: "New Listing",
    badgeBg: "bg-color-spring-green-39-80%/80",
    certIcon: <ProIcon />,
    certLabel: "PlatinumPro",
    rating: "4.8",
    ratingIcon: <StarIcon />,
    price: "$6,950.00",
    buttonLabel: "View Details",
  },
  {
    image: coin,
    title: "Palladium – 50g Bar",
    subtitle: "LPPM Certified",
    badge: undefined,
    badgeBg: "",
    certIcon: <ProIcon />,
    certLabel: "RareMetals",
    rating: "4.6",
    ratingIcon: <StarIcon />,
    price: "$5,560.00",
    buttonLabel: "View Details",
  },
]

function SuggestedSection() {
  return (
    <div className="self-stretch flex flex-col justify-start items-start gap-6">
      <div className="self-stretch flex justify-between items-center flex-wrap gap-2">
        <h6 className="text-white text-xl font-bold leading-7">Suggested For You</h6>
        <div className="flex justify-center items-center gap-1 cursor-pointer">
          <p className="text-[#3396FF] text-sm font-normal leading-tight">View Marketplace</p>
          <ViewIcon />
        </div>
      </div>
      {/* Responsive grid: 1 card on mobile, horizontal scroll on sm+, grid on md+ */}
      <div className="w-full pb-4 grid grid-cols-1 gap-5 sm:flex sm:gap-5 sm:overflow-x-auto">
        {suggestionCardsData.map((card, idx) => (
          <div
            key={idx}
            className="min-w-[285px] max-w-[350px] flex-shrink-0"
          >
            <SuggestionCard {...card} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SuggestedSection