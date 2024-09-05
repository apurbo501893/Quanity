import Banner from "@/components/pages/home/Banner";
import ProductList from "@/components/ProductList";
import { getData } from "./helpers";
import BannerSub from "@/components/pages/home/BannerSub";
import BannerBot from "@/components/pages/home/BannerBot";
import BannerMiddle from "@/components/pages/home/BannerMiddle";
import Carosel from "@/components/Carosel";

export default async function Home() {
  const product = await getData("https://dummyjson.com/products");

  return (
    <main>
      <Banner />
      <ProductList product={product} />
      <BannerMiddle />
      <BannerBot />
      <BannerSub />
      <Carosel />
    </main>
  );
}
