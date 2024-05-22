import Loading from "@/components/Loading";
import Filter from "@/components/main/Filter";
import ProductList from "@/components/main/ProductList";
import Image from "next/image";
import { Suspense } from "react";

const Products = async ({ slug }: { slug: string }) => {
  const res = await fetch(
    `http://localhost:8000/products-by-category?slug=${slug}`,
    {
      method: "GET",
    }
  );

  const products = await res.json();

  return <ProductList products={products} />;
};

const ListDetailPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      <Filter />
      <Suspense fallback={<Loading />}>
        <Products slug={slug} />
      </Suspense>
    </div>
  );
};

export default ListDetailPage;
