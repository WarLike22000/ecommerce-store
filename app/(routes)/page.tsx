import Container from "@/app/components/Container";
import Billboard from "../components/Billboard";
import getBillboard from "../actions/getBillboard";
import getProducts from "../actions/getProducts";
import ProductList from "../components/ProductList";

export default async function Home() {

  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard();
  
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard[0]} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  )
}
