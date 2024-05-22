const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Using default middleware
server.use(middlewares);

// [GET] /products-by-category?slug=
server.get("/products-by-category", (req, res) => {
  const db = router.db;
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
  res.json(products);
});

server.use(router);
server.listen(8000, () => {
  console.log("Author: Lawther Nguyen");
  console.log("json-server running on port:");
  console.log("http://localhost:8000");
});
