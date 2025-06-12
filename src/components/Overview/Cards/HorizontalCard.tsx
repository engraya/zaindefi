import { useNavigate } from 'react-router-dom';

type HorizontalCardProps = {
  id: string;
  image: string;
  title: string;
  price: string;
  details: {
    label: string;
    value: string;
  }[];
  buttonLabel: string;
};

function HorizontalCard({ id, image, title, price, details, buttonLabel }: HorizontalCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/market-place/card/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      data-device="Desktop"
      data-type="Buy"
      data-view="List"
      className="self-stretch bg-gray-900 rounded-xl outline outline-slate-600 flex flex-col md:flex-row justify-start items-stretch gap-4 md:gap-6 cursor-pointer hover:outline-emerald-500 transition-all"
    >
      {/* Image at the top on mobile, left on desktop */}
      <div className="w-full md:w-80 h-48 md:h-64 rounded-t-xl md:rounded-tl-xl md:rounded-bl-xl flex justify-center items-center overflow-hidden">
        <img className="w-full md:w-80 h-full object-cover rounded-t-xl md:rounded-tl-lg md:rounded-tr-lg" src={image} alt={title} />
      </div>
      {/* Content */}
      <div className="flex-1 flex flex-col justify-between px-4 md:pr-6 py-4 md:py-6 gap-4">
        <div className="flex flex-col gap-4">
          {/* Title and Price */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <h6 className="text-white text-base md:text-lg font-semibold leading-6 md:leading-7">{title}</h6>
            <h5 className="text-white text-lg md:text-xl font-semibold leading-6 md:leading-7">{price}</h5>
          </div>
          {/* Details */}
          <div className="flex flex-col gap-1">
            {details.map((detail, idx) => (
              <div key={idx} className="flex flex-row justify-between items-center">
                <p className="text-[#94A3B8] text-xs md:text-sm font-normal leading-tight">{detail.label}</p>
                <span className="text-white text-xs md:text-sm font-normal leading-tight">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Button at the bottom, full width on mobile */}
        <button className="w-full md:w-28 px-4 md:px-6 py-2 md:py-3 bg-emerald-500 rounded-lg flex justify-center items-center overflow-hidden mt-4 md:mt-0">
          <div className="h-5 flex justify-center items-center gap-2 w-full">
            <p className="text-indigo-50 text-xs md:text-sm font-semibold leading-snug w-full text-center">{buttonLabel}</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default HorizontalCard