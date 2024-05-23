import AddProduct from "./AddProduct";
import CustomizeProduct from "./CustomizeProduct";
import ProductImages from "./ProductImages";

interface IProps {
  product: IProduct;
}

const ProductDetail = ({ product }: IProps) => {
  return (
    <div className="mt-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        {product.images && <ProductImages images={product.images} />}
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.title}</h1>
        <p className="text-gray-500">{product.description}</p>
        <div className="h-[2px] bg-gray-100" />
        {product.originalPrice === product.price ? (
          <h2 className="font-medium text-2xl">${product.price}</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.originalPrice}
            </h3>
            <h2 className="font-medium text-2xl">${product.price}</h2>
          </div>
        )}
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProduct />
        <AddProduct />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <div className="font-medium mb-4">Title</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            necessitatibus ratione deleniti iusto excepturi similique architecto
            hic, harum tenetur molestiae nulla ipsum, ea esse, nihil quasi?
            Animi esse cum maxime.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-medium mb-4">Title</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            necessitatibus ratione deleniti iusto excepturi similique architecto
            hic, harum tenetur molestiae nulla ipsum, ea esse, nihil quasi?
            Animi esse cum maxime.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-medium mb-4">Title</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            necessitatibus ratione deleniti iusto excepturi similique architecto
            hic, harum tenetur molestiae nulla ipsum, ea esse, nihil quasi?
            Animi esse cum maxime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
