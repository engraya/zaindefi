import { useState } from "react";

function FaqSection() {
  // State to manage the visibility of the answer
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  // Function to toggle the visibility of the answer
  const handleToggleAnswer = () => {
    setIsAnswerVisible((prev) => !prev);
  };

  return (
    <div
      data-property-1="Frame 54"
      className="w-full px-5 py-4 bg-zinc-950 rounded-lg flex flex-col justify-start items-start gap-2.5"
    >
      <div className="inline-flex justify-start items-center gap-5 sm:gap-32">
        <div className="w-full sm:w-96 text-indigo-50 text-sm whitespace-nowrap sm:text-xl font-medium leading-7">
          Why is Webflow the best no-code tool?
        </div>
        <svg
          onClick={handleToggleAnswer}
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 42 42"
          fill="none"
          className="cursor-pointer"
        >
          <rect
            x="0.0151367"
            y="0.258179"
            width="41.5"
            height="41.5"
            rx="8"
            fill="#F7F7FF"
          />
          <path
            d="M20.7651 11.8578C21.4003 11.8578 21.9155 12.3731 21.9155 13.0082V29.0082C21.9155 29.6433 21.4003 30.1586 20.7651 30.1586C20.13 30.1586 19.6147 29.6433 19.6147 29.0082V13.0082C19.6147 12.3731 20.13 11.8578 20.7651 11.8578Z"
            fill="#B6B7BB"
            stroke="#B6B7BB"
            stroke-width="0.3"
            stroke-linecap="round"
          />
          <path
            d="M28.7651 19.8578C29.4003 19.8578 29.9155 20.3731 29.9155 21.0082C29.9155 21.6433 29.4003 22.1586 28.7651 22.1586H12.7651C12.13 22.1586 11.6147 21.6433 11.6147 21.0082C11.6147 20.3731 12.13 19.8578 12.7651 19.8578H28.7651Z"
            fill="#B6B7BB"
            stroke="#B6B7BB"
            stroke-width="0.3"
            stroke-linecap="round"
          />
        </svg>
      </div>

      {/* Answer section with transition */}
      <div
        className={`text-white text-sm sm:text-base transition-all duration-300 ease-in-out overflow-hidden ${
          isAnswerVisible ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <p className="italic">
          Webflow is the best no-code tool because it offers a powerful
          visual editor that allows designers to create responsive websites
          without writing a single line of code. It also provides
          high-performance hosting, CMS features, and integrates well with other
          tools, making it an ideal choice for both beginners and experienced
          designers.
        </p>
      </div>
    </div>
  );
}

export default FaqSection;
