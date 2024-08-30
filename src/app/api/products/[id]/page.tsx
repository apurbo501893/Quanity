import { getData } from "@/app/helpers";
import Container from "@/components/Container";

interface Props {
  params: {
    id: string;
  };
}

const SingleProductPage = async ({ params }: Props) => {
  const { id } = params;
  const endpoint = `https://dummyjson.com/products/${id}`;
  const product = await getData(endpoint);

  return (
    <Container className="py-5">
      Single Product Page {id} {product?.title}
    </Container>
  );
};

export default SingleProductPage;
