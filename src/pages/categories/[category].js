import ProductCard from "@/components/UI/ProductCard";
import { useRouter } from "next/router";
import React from "react";

const Category = ({ products }) => {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-center mt-8 text-4xl font-bold">
        {router.query.category}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-2 md:mx-48 py-12">
        {products?.data?.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Category;

export const getStaticPaths = async () => {
  const categories = [
    "Processor",
    "Motherboard",
    "RAM",
    "Power Supply Unit",
    "Storage Device",
    "Monitor",
    "Others",
  ];

  const paths = categories.map((category) => ({
    params: { category: category },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://elite-craft-backend.vercel.app/api/v1/products/?category=${params.category}`
  );
  const products = await res.json();
  return { props: { products } };
};
