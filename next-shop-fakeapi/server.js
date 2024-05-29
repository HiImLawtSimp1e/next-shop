const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const db = router.db;

// Using default middleware
server.use(middlewares);

// [GET] /products-by-category?slug=
server.get("/products-by-category", (req, res) => {
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).send({ error: "Category slug is required" });
  }

  // get category by slug
  const category = db.get("categories").find({ slug }).value();

  if (!category) {
    return res.status(404).send({ error: "Category not found" });
  }

  // get products list by categoryId
  const products = db
    .get("products")
    .filter({ categoryId: category.id })
    .value();

  // get images of product
  const enrichedPosts = products.map((product) => {
    const image = db
      .get("images")
      .find({ productId: product.id, isMain: true, isSub: false })
      .value();

    const media_image = db
      .get("images")
      .find({ productId: product.id, isMain: false, isSub: true })
      .value();

    return {
      ...product,
      image: image.image,
      media_image: media_image.image,
    };
  });
  res.json(enrichedPosts);
});

// [GET] /product-detail?slug=
server.get("/product-detail", (req, res) => {
  const { slug } = req.query;

  if (!slug) {
    return res.status(400).send({ error: "Product slug is required" });
  }

  // get category by slug
  const product = db.get("products").find({ slug }).value();

  if (!product) {
    return res.status(404).send({ error: "Product not found" });
  }

  // get products list by categoryId
  const images = db.get("images").filter({ productId: product.id }).value();
  const result = { ...product, images };
  console.log(result);
  res.json(result);
});

// [GET] /list-product
server.get("/list-product", (req, res) => {
  // get product list
  let products = db.get("products").value();
  if (!products) {
    return res.status(404).send({ error: "Product not found" });
  }
  // Limit the number of products
  const limit = 8; // Change this to your desired limit
  products = products.slice(0, limit);

  // get images of product
  const enrichedPosts = products.map((product) => {
    const image = db
      .get("images")
      .find({ productId: product.id, isMain: true, isSub: false })
      .value();

    const media_image = db
      .get("images")
      .find({ productId: product.id, isMain: false, isSub: true })
      .value();

    return {
      ...product,
      image: image.image,
      media_image: media_image.image,
    };
  });
  res.json(enrichedPosts);
});

// [GET] /search-product?searchParam=
server.get("/search-product", (req, res) => {
  const { searchParam } = req.query;
  if (!searchParam) {
    return res.status(400).send({ error: "Product slug is required" });
  }
  // get product list
  let products = db
    .get("products")
    .filter((product) =>
      product.title.toLowerCase().includes(searchParam.toLowerCase())
    )
    .value();
  // Limit the number of products
  const limit = 8; // Change this to your desired limit
  products = products.slice(0, limit);

  // get images of product
  const enrichedPosts = products.map((product) => {
    const image = db
      .get("images")
      .find({ productId: product.id, isMain: true, isSub: false })
      .value();

    const media_image = db
      .get("images")
      .find({ productId: product.id, isMain: false, isSub: true })
      .value();

    return {
      ...product,
      image: image.image,
      media_image: media_image.image,
    };
  });
  res.json(enrichedPosts);
});

server.use(router);
server.listen(8000, () => {
  console.log("Author: Lawther Nguyen");
  console.log("json-server running on port:");
  console.log("http://localhost:8000");
});
