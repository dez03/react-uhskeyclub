import Ambulatory from "../../assets/gallery/ambulatory.jpg";
import BigGarden from "../../assets/gallery/biggarden.jpg";
import BikeRodeo from "../../assets/gallery/bikerodeo.jpg";
import BookFair from "../../assets/gallery/bookfair.jpg";
import ClothingDrive from "../../assets/gallery/clothingsdirve.jpg";
import Easter from "../../assets/gallery/EasterEvent.jpg";
import Garden1 from "../../assets/gallery/garden1.jpg";
import GardenMe from "../../assets/gallery/gardenpartyme.jpg";
import GirlsNight from "../../assets/gallery/girlsnightout.jpg";
import KMSDrive from "../../assets/gallery/KMSClotheDrive1.jpg";
import MarketPLace from "../../assets/gallery/Marketplace.jpg";
import MovieUnderStars from "../../assets/gallery/movieunder.jpg";
import Nursing from "../../assets/gallery/NursingHome1.jpg";
import PrideClean from "../../assets/gallery/pridecleanup.jpg";
import Scholarships from "../../assets/gallery/scholarships.jpg";
import TipYour from "../../assets/gallery/tipcap.jpg";
import GardenAgain from "../../assets/gallery/gardenpartyagain.jpg";

const galleryImages = [
  {
    id: 1,
    imgPath: Easter,
    eventName: "Easter Egg Hunt",
    date: "4/9/22",
  },
  {
    id: 2,
    imgPath: Nursing,
    eventName: "Clark Nursing Home Bingo",
    date: "4/24/22",
  },
  {
    id: 3,
    imgPath: KMSDrive,
    eventName: "KMS Clothing Drive",
    date: "4/30/22",
  },
  {
    id: 4,
    imgPath: MarketPLace,
    eventName: "Hannah Caldwell Marketplace",
    date: "4/30/22",
  },
  {
    id: 5,
    imgPath: ClothingDrive,
    eventName: "UHS Clothing Drive",
    date: "5/7/22",
  },
  {
    id: 6,
    imgPath: Garden1,
    eventName: "Garden Work Party",
    date: "5/15/22",
  },
  {
    id: 7,
    imgPath: Scholarships,
    eventName: "Pasta Fundraiser",
    date: "5/20/22",
  },
  {
    id: 8,
    imgPath: BikeRodeo,
    eventName: "Bike Rodeo",
    date: "5/21/22",
  },
  {
    id: 9,
    imgPath: BookFair,
    eventName: "BMS Book Fair",
    date: "5/24/22",
  },
  {
    id: 10,
    imgPath: TipYour,
    eventName: "Tip Your Cap Classic",
    date: "5/25/22",
  },
  {
    id: 11,
    imgPath: Ambulatory,
    eventName: "Tristate Wheelchair and Ambulatory Games",
    date: "5/28/22",
  },
  {
    id: 12,
    imgPath: MovieUnderStars,
    eventName: "Movies Under the Stars",
    date: "6/10/22",
  },
  {
    id: 13,
    imgPath: BigGarden,
    eventName: "Garden Work Party",
    date: "6/11/22",
  },
  {
    id: 14,
    imgPath: PrideClean,
    eventName: "Pride Party Clean Up",
    date: "6/12/22",
  },
  {
    id: 15,
    imgPath: GardenMe,
    eventName: "Garden Party",
    date: "7/9/22",
  },
  {
    id: 16,
    imgPath: GirlsNight,
    eventName: "Girls Night Out 🤪",
    date: "8/12/22",
  },
  {
    id: 17,
    imgPath: GardenAgain,
    eventName: "Garden Party",
    date: "8/13/22",
  },
  // More products...
];

export default function GalleryFull() {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {galleryImages.map((galleryImages) => (
            <div key={galleryImages.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <img
                  src={galleryImages.imgPath}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-around">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute" />
                    {galleryImages.eventName}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {galleryImages.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl m-0 font-bold tracking-tight text-gray-900">
          More pictures coming soon!
        </h2>
      </div>
    </div>
  );
}
