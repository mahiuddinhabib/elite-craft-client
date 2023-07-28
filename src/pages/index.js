import Image from "next/image";
import { Inter } from "next/font/google";
import FeaturedProducts from "@/components/UI/FeaturedProducts";

export default function Home({data}) {
  const featuredProducts = data?.data;
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1>This is Home</h1>
      <FeaturedProducts  products={featuredProducts}/>
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