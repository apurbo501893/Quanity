import { bannerImageFour, bannerImageThree } from "@/assets";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import { banner } from "@/constants";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const BannerMiddle = () => {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-5">
      <div className="relative w-full lg:col-span-2 overflow-hidden">
        <Image
          src={bannerImageFour}
          alt="bannerTwo"
          className="w-[850px] h-[256px] hover:scale-105 duration-200"
        />
        <div className="absolute top-0 left-6 mt-4 flex flex-col gap-2 py-4 ">
          <p className="text-xs">Sale 20% off all store</p>
          <h3 className="text-xl font-bold hover:text-[#0d6efd]">
            Smartphone
            <br /> BLU G91 Pro 2022
          </h3>
          <Button
            href={banner?.buttonLink}
            className="flex items-center mt-3 gap-1 bg-transparent text-black rounded-md w-32 px-0 justify-center text-sm font-semibold hover:bg-transparent hover:text-[#0d6efd]  py-3  duration-200"
          >
            Shop Now <GoArrowRight className="text-lg" />
          </Button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <Image
          src={bannerImageThree}
          alt="bannerThree"
          className="h-[260px] w-full hover:scale-105 duration-200"
        />
        <div className="absolute top-0 left-6 mt-4 flex flex-col gap-2 py-4">
          <h3 className="text-xl font-bold">
            HyperX Cloud II
            <br /> Wireless
          </h3>
          <p className="text-sm">Sale 35% off</p>
          <Button
            href={banner?.buttonLink}
            className="flex items-center mt-3 gap-1 bg-sky-400  text-black rounded-md w-32 px-0 justify-center text-sm font-semibold hover:bg-transparent py-3 duration-200"
          >
            Shop Now <GoArrowRight className="text-lg" />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default BannerMiddle;