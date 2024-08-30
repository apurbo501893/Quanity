import Container from "@/components/Container";
import Button from "@/components/ui/Button";

const BannerSub = () => {
  return (
    <div className=" bg-sky-500  text-white h-72  mt-10">
      <Container>
        <div className="mt-14 py-16  flex justify-between items-center">
          <div>
            <p className="text-sm font-semibold tracking-wider">
              Sale 20% off all store
            </p>
            <h2 className="text-5xl font-bold">Subscribe our Newsletter</h2>
          </div>
          <div className="border-1 border-themeColor">
            <input
              type="text"
              placeholder="Enter Your E-mail"
              className="w-80 h-16  px-3 text-black outline-none"
            />
            <Button className=" bg-black rounded-md text-sm h-16">
              Subcriber
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default BannerSub;
