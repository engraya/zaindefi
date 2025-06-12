import { useParams, Link } from 'react-router-dom';
import { trendingCardsData } from '../lib/TrendingData';
import PagesWrapper from '../layouts/PagesWrapper';
import CardDetailsRightColumn from '../components/CardDetailsRightColumn';
import AssetSpecifications from '../components/AssetSpecifications';
import Authentication from '../components/Authentication';

function CardDetails() {
  const { id } = useParams();
  const card = trendingCardsData.find(card => card.id === id);

  if (!card) {
    return (
      <PagesWrapper>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-white mb-6">Card Not Found</h1>
        </div>
      </PagesWrapper>
    );
  }

  return (
    <PagesWrapper>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-sm overflow-x-auto whitespace-nowrap">
          <Link to="/market-place" className="text-white hover:text-white transition-colors">
            Marketplace
          </Link>
          <span className="text-white">/</span>
          <Link to="/market-place/overview" className="text-white hover:text-white transition-colors">
            Overview
          </Link>
          <span className="text-white">/</span>
          <span className="text-white">{card.title}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* Left Column - Asset Details */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Image Carousel */}
            <div className="p-4 sm:p-6 bg-gray-900 rounded-lg flex flex-col gap-4">
              <div className="relative rounded-lg flex flex-col justify-center items-center overflow-hidden">
                <img className="w-full h-48 sm:h-80 object-cover" src={card.image} alt={card.title} />
              </div>
              <div className="flex justify-center items-start gap-2">
                {[...Array(5)].map((_, idx) => (
                  <div key={idx} className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-Primary-primary-500' : 'bg-Grey-Icons'}`} />
                ))}
              </div>
            </div>
            {/* Asset Specifications */}
            <AssetSpecifications 
              details={{
                assetType: "Crude Oil",
                gradeQuality: "Light sweet crude, API 34.0",
                contractAddress: "0x7a23...8f91",
                quantity: "500,000 barrels"
              }}
              primaryDescription="Premium Bonny Light crude oil from Nigerian terminals with certificate of authenticity. Each barrel is verified and meets international quality standards."
              secondaryDescription="This light sweet crude is ideal for refineries seeking low sulfur content and high yield of gasoline, diesel and jet fuels. All documentation available for verification including assay reports."
            />

            {/* Authentication Section */}
            <Authentication />
          </div>

          {/* Right Column - Price and Seller Info */}
          <div className="w-full lg:w-[480px]">
            <CardDetailsRightColumn card={card} />
          </div>
        </div>
      </div>
    </PagesWrapper>
  );
}

export default CardDetails;