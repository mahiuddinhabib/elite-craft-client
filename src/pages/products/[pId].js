import ProductCard from "@/components/UI/ProductCard";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Category = ({ product }) => {
  const router = useRouter();
  const {
    _id,
    image,
    productName,
    category,
    price,
    description,
    keyFeatures,
    reviews,
    status,
    averageRating,
    individualRating,
  } = product.data;

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="/images/dummy_pc.png"
          width={500}
          height={500}
          alt="Picture of the product"
          className="md:max-w-sm rounded-lg shadow-2xl md:mr-12"
        />
        <div>
          <h1 className="text-5xl font-bold">{productName}</h1>
          <p className="py-6">{description}</p>
          <p>Category: {category}</p>
          <p>Status: {status}</p>
          <p>Price: {price}</p>
          <p>AverageRating: {averageRating}</p>
          <p>IndividualRating: {individualRating}</p>

          <h2 className="text-xl mt-4">Key Features</h2>
          {keyFeatures?.map((feature, featureIndex) => {
            const [key, value] = Object.entries(feature)[1];
            // console.log(feature);
            return (
              <li key={featureIndex}>
                <strong className="text-gray-600">{key}:</strong> {value}
              </li>
            );
          })}
          <h2 className="text-xl mt-4">Reviews</h2>

          {reviews.map((review, index) => (
            <ul className="list-inside" key={index}>
              <li className="mt-4">
                <Image
                  src={
                    "https://www.freeiconspng.com/thumbs/profile-icon-png/user-icon-png-person-user-profile-icon-20.png"
                  }
                  width={25}
                  height={25}
                  alt="profile img"
                  className="inline mr-2"
                />{" "}
                {review}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://elite-craft-backend.vercel.app/api/v1/products"
  );
  const products = await res.json();

  const paths = products?.data?.map((p) => ({
    params: { pId: p._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://elite-craft-backend.vercel.app/api/v1/products/${params.pId}`
  );
  const product = await res.json();
  return { props: { product } };
};
