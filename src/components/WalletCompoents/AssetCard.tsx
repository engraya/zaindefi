import React from "react";

export interface AssetCardProps {
  variant?: 1 | 2 | 3;
  title: string;
  certification: string;
  tokenizedLabel: string;
  tokenizedColorClass: string;
  gradeLabel: string;
  gradeValue: string;
  locationLabel: string;
  locationValue: string;
  dateLabel: string;
  dateValue: string;
  valueLabel: string;
  value: string;
  buttonLabel: string;
  onButtonClick?: () => void;
}

const AssetCard: React.FC<AssetCardProps> = ({
  variant = 1,
  title,
  certification,
  tokenizedLabel,
  tokenizedColorClass,
  gradeLabel,
  gradeValue,
  locationLabel,
  locationValue,
  dateLabel,
  dateValue,
  valueLabel,
  value,
  buttonLabel,
  onButtonClick,
}) => {
  // Unified card layout for all variants, responsive and without absolute positioning
  return (
    <section
      data-variant={variant}
      className="flex-1 min-w-[260px] max-w-[360px] bg-gray-900 rounded-2xl p-5 flex flex-col gap-4 justify-between"
    >
      <header className="flex flex-col gap-1">
        <div className="flex justify-between items-start gap-2">
          <div>
            <h3 className="text-white text-lg font-bold leading-7 whitespace-nowrap">{title}</h3>
            <span className="text-[#94A3B8] text-sm font-normal leading-tight">{certification}</span>
          </div>
          <span className={`px-2 py-0.5 rounded-full inline-flex items-center ${tokenizedColorClass}`}>
            <span className="text-xs font-normal leading-none">{tokenizedLabel}</span>
          </span>
        </div>
      </header>
      <dl className="flex flex-col gap-2 mt-2">
        <div className="flex justify-between items-center">
          <dt className="text-[#94A3B8] text-sm font-normal">{gradeLabel}</dt>
          <dd className="text-white text-sm font-normal">{gradeValue}</dd>
        </div>
        <div className="flex justify-between items-center">
          <dt className="text-[#94A3B8] text-xs font-normal">{locationLabel}</dt>
          <dd className="text-white text-sm font-normal">{locationValue}</dd>
        </div>
        <div className="flex justify-between items-center">
          <dt className="text-[#94A3B8] text-sm font-normal">{dateLabel}</dt>
          <dd className="text-white text-sm font-normal">{dateValue}</dd>
        </div>
      </dl>
      <footer className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-color-grey-16 pt-3 mt-2">
        <div>
          <div className="text-[#94A3B8] text-xs font-normal">{valueLabel}</div>
          <div className="text-white text-lg font-bold">{value}</div>
        </div>
        <button
          type="button"
          className="px-4 py-2 bg-zinc-800 rounded-lg flex justify-center items-center mt-2 sm:mt-0"
          onClick={onButtonClick}
        >
          <span className="text-white text-sm whitespace-nowrap font-normal">{buttonLabel}</span>
        </button>
      </footer>
    </section>
  );
};

export default AssetCard;