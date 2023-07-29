import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const BuilderCard = ({ product }) => {
    const router = useRouter()
  const {
    _id,
    image,
    productName,
    category,
    price,
    description,
    status,
    averageRating,
  } = product;

  const handleBuilderBtn = () =>{
    console.log(productName);
    router.push('/pc-builder')
  }
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <Image
          src="/images/ssd.png"
          width={500}
          height={500}
          alt="Picture of the product"
        />
      </figure>
      <div className="card-body py-4">
        <h2 className="card-title">
          {productName}
        </h2>
        <div>
          <p>Category: {category}</p>
          <p>Price: ${price}</p>
          <p>Status: {status}</p>
          <p>Rating: {averageRating}</p>
        </div>
        <div className="card-actions justify-end">
          <button onClick={handleBuilderBtn} className="btn btn-outline">
            Add To Builder
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuilderCard;
