import FeaturedProducts from "@/components/UI/FeaturedProducts";

export default function Home({data}) {
  const featuredProducts = data?.data;
  return (
    <main className="min-h-screen md:flex justify-center">
      <FeaturedProducts products={featuredProducts} />
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "http://localhost:5000/api/v1/products/?sortBy=averageRating&limit=6"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}