import Loading from "@/components/Loading";
import ProductDetail from "@/components/main/ProductDetail";
import { Suspense } from "react";

const Product = async ({ slug }: { slug: string }) => {
  const res = await fetch(`http://localhost:8000/product-detail?slug=${slug}`, {
    method: "GET",
  });

  const product = await res.json();

  return <ProductDetail product={product} />;
};

const ProductDetailPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Product slug={slug} />
      </Suspense>
    </>
  );
};

export default ProductDetailPage;
