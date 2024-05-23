import Loading from "@/components/Loading";
import CategoryList from "@/components/main/CategoryList";
import ProductList from "@/components/main/ProductList";
import Slider from "@/components/main/Slider";
import { Suspense } from "react";

const Slides = async () => {
  const res = await fetch(`http://localhost:8000/slides`, {
    method: "GET",
  });

  const slides = await res.json();

  return <Slider slides={slides} />;
};

const Products = async () => {
  const res = await fetch(`http://localhost:8000/list-product`, {
    method: "GET",
  });

  const products = await res.json();

  return <ProductList products={products} />;
};

const Categories = async () => {
  const res = await fetch(`http://localhost:8000/categories`, {
    method: "GET",
  });

  const categories = await res.json();

  return <CategoryList categories={categories} />;
};

export default function Home() {
  return (
    <div className="">
      <Slides />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={<Loading />}>
          <Products />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Categories</h1>
        <Suspense fallback={<Loading />}>
          <Categories />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">News Products</h1>
        <Suspense fallback={<Loading />}>
          <Products />
        </Suspense>
      </div>
    </div>
  );
}
