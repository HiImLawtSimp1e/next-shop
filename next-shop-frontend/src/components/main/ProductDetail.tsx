import ProductImages from "./ProductImages";

interface IProps {
  product: IProduct;
}

const ProductDetail = ({ product }: IProps) => {
  return (
    <div className="mt-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.title}</h1>
        <p className="text-gray-500">{product.description}</p>
        <div className="h-[2px] bg-gray-100" />
        <h2 className="font-medium text-2xl">${product.price}</h2>
      </div>
    </div>
  );
};

export default ProductDetail;
