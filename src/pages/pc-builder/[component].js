import BuilderCard from "@/components/UI/BuilderCard";
import { useRouter } from "next/router";
import React from "react";

const Component = ({ products }) => {
  const router = useRouter();
//   console.log(products);
  return (
    <div>
      <h1 className="text-center mt-8 text-3xl font-bold">
        Select a {router.query.component}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-2 md:mx-48 py-12">
        {products?.data?.map((p) => (
          <BuilderCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Component;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/api/v1/products/?category=${params.component}`
  );
  const products = await res.json();
  return { props: { products } };
};
