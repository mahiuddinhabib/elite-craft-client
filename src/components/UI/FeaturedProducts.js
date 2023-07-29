import ProductCard from "./ProductCard";

export default function FeaturedProducts({ products }) {
  // console.log(products);
  return (
    <div>
      <h1 className="text-center mt-8 text-4xl font-bold">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-2 md:mx-48 py-12">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}
