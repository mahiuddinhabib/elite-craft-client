import ProductCard from "./ProductCard";

export default function FeaturedProducts({ products }) {
    // console.log(products);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
      {products.map(p=><ProductCard key={p._id} product={p}/>)}
    </div>
  );
}


