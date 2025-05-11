import FaqSection from "./FaqSection";

function Faq() {
  return (
    <div className="w-full px-6 sm:px-16 md:px-36 py-20 bg-gray-900 inline-flex flex-col justify-start items-start gap-2.5">
      <div className="flex flex-col justify-start items-center gap-16">
        <h1 className="w-full md:w-[706px] text-center justify-start text-indigo-50 text-2xl sm:text-4xl font-bold leading-[48px] sm:leading-[62px]">
          Frequently Asked Questions
        </h1>
        <div className="inline-flex flex-col sm:flex-row justify-center items-start gap-8 sm:gap-16">
          <div className="inline-flex flex-col justify-start items-start gap-3.5">
            <FaqSection />
            <FaqSection />
            <FaqSection />
          </div>
          <div className="inline-flex flex-col justify-start items-start gap-3.5">
            <FaqSection />
            <FaqSection />
            <FaqSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
