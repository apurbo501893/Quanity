import { bannerImageTwo } from "@/assets";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";

const BannerBot = () => {
  return (
    <Container className="h-96 bg-sky-500">
      <div className="md:grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className=" mt-4 ml-5 text-white py-11">
          <p className="text-sm uppercase tracking-wider font-semibold">
            Tablet Collection 2024
          </p>
          <h2 className="text-4xl font-bold">
            Samsung Galaxy Tab
            <br /> S6, Wifi Tablet
          </h2>
          <p className="line-through text-xs">1240.00</p>
          <p>$975.00</p>
          <Button className="text-xs bg-black text-white hover:bg-white hover:text-black rounded-md">
            Shop now
          </Button>
        </div>
        <div>
          <Image src={bannerImageTwo} alt="bannerbot" />
        </div>
      </div>
    </Container>
  );
};
export default BannerBot;
