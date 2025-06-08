import { ProIcon, StarIcon } from '../../Icons/WalletIcons'

type SuggestionCardProps = {
  image: string
  title: string
  subtitle: string
  badge?: string
  badgeBg?: string
  certIcon?: React.ReactNode
  certLabel: string
  rating: string
  ratingIcon?: React.ReactNode
  price: string
  buttonLabel: string
  onButtonClick?: () => void
}

function SuggestionCard({
  image,
  title,
  subtitle,
  badge,
  badgeBg = "bg-gray-800",
  certIcon = <ProIcon />,
  certLabel,
  rating,
  ratingIcon = <StarIcon />,
  price,
  buttonLabel,
  onButtonClick,
}: SuggestionCardProps) {
  return (
    <div className="flex-1 bg-gray-900 rounded-2xl overflow-hidden flex flex-col min-w-[220px] max-w-full sm:min-w-[260px] sm:max-w-[320px]">
      {/* Image & Badge */}
      <div className="relative w-full h-36 sm:h-40 bg-color-grey-16 flex flex-col justify-center items-start">
        <img className="w-full h-full object-cover max-w-full sm:max-w-72 rounded-t-2xl" src={image} alt={title} />
        {badge && (
          <div
            className={`absolute top-3 right-3 w-16 px-2 py-1 ${badgeBg} rounded-full flex flex-col justify-start items-start`}
          >
            <div className="justify-start text-white text-xs whitespace-nowrap font-normal leading-none">{badge}</div>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="flex flex-col gap-2 p-3 sm:p-4">
        <div className="text-white text-base sm:text-lg font-bold leading-6 sm:leading-7">{title}</div>
        <div className="text-[#94A3B8] text-xs sm:text-sm font-normal leading-tight">{subtitle}</div>
        <div className="flex items-center justify-between gap-2 sm:gap-4 mt-2">
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#3F3F46] rounded-full flex justify-center items-center">
              {certIcon}
            </div>
            <div className="text-[#CBD5E1] text-xs sm:text-sm font-normal">{certLabel}</div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="flex items-center">{ratingIcon}</span>
            <span className="text-[#CBD5E1] text-xs sm:text-sm font-normal">{rating}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-3 sm:mt-4 border-t border-[#94A3B8] pt-2 sm:pt-3">
          <div className="text-[#94A3B8] text-xs font-normal">Price</div>
          <div className="text-white text-base sm:text-lg font-bold">{price}</div>
          <button
            className="px-2 py-1 sm:px-3 sm:py-1.5 bg-emerald-500 rounded-lg flex justify-center items-center mt-2"
            onClick={onButtonClick}
          >
            <p className="text-white text-xs sm:text-sm font-normal">{buttonLabel}</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuggestionCard