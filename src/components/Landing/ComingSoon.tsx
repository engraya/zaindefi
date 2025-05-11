import GooglePlayButton from "./GooglePlayButton";
import AppStoreButton from "./AppStoreButton";

function ComingSoon() {
  return (
    <div className="w-full flex flex-col bg-gray-900 justify-center items-center gap-6 px-4 py-10">
      <p className="w-full text-center text-white text-lg sm:text-xl md:text-2xl font-semibold leading-8 sm:leading-9">
        Coming soon to Google Play Store and App Store
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
        <AppStoreButton />
        <GooglePlayButton />
      </div>
    </div>
  );
}

export default ComingSoon;
