import { useNavigate } from 'react-router-dom';

type TrendingCardProps = {
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

function TrendingCard({ id, image, title, price, details, buttonLabel }: TrendingCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/market-place/card/${id}`);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="flex-1 pb-6 sm:pb-10 bg-gray-900 rounded-xl outline outline-slate-600 flex flex-col justify-start items-start gap-4 sm:gap-6 cursor-pointer hover:outline-emerald-500 transition-all"
    >
      <div className="w-full h-40 sm:h-60 rounded-tl-xl rounded-tr-xl flex justify-between items-center overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
          src={image}
          alt={title}
        />
      </div>
      <div className="w-full px-2 sm:px-4 flex flex-col justify-start items-start gap-1 sm:gap-2">
        <div className="w-full flex flex-col justify-start items-start gap-2 sm:gap-4">
          <div className="flex justify-center items-center gap-2.5">
            <h6 className="text-white text-base sm:text-lg font-semibold leading-6 sm:leading-7">{title}</h6>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-0.5 sm:gap-1">
            {details.map((detail, idx) => (
              <div
                key={idx}
                className="w-full flex flex-row justify-between items-center"
              >
                <p className="flex-1 text-[#94A3B8] text-xs sm:text-sm font-normal leading-tight sm:w-14">
                  {detail.label}
                </p>
                <span className="flex-1 text-right text-white text-xs sm:text-sm font-normal leading-tight">
                  {detail.value}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div className="w-24 flex flex-col justify-start items-start">
              <h5 className="text-white text-lg sm:text-xl font-semibold leading-6 sm:leading-7">{price}</h5>
            </div>
            <button className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 cursor-pointer bg-emerald-500 rounded-lg flex justify-center items-center overflow-hidden">
              <div className="h-5 flex justify-center items-center gap-2 w-full">
                <p className="text-indigo-50 text-xs sm:text-sm font-semibold leading-snug w-full text-center">{buttonLabel}</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingCard