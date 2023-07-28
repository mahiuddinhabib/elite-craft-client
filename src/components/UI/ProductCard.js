import Image from "next/image";
import Link from "next/link";

const ProductCard = ({product}) => {
    const {_id, image, productName, category, price, description, status, averageRating} = product;
    return (
      <div className="card mx-2 md:w-80 bg-base-100 shadow-xl">
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
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          {/* <p>{description}</p> */}
          <div>
            <p>Price: ${price}</p>
            <p>Category: {category}</p>
            <p>Status: {status}</p>
            <p>Rating: {averageRating}</p>
          </div>
          <div className="card-actions justify-end">
            <Link href={`/${_id}`} className="btn btn-outline">See more</Link>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;