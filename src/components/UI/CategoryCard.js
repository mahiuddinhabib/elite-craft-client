import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({category}) => {
    console.log(category);
    return (
      <Link href={'/'} className="card bg-base-100 shadow-xl image-full">
        <figure>
          <Image
            src="/images/ssd.png"
            width={500}
            height={500}
            alt="Picture of the product"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl text-white font-bold text-center my-auto">{category}</h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </Link>
    );
};

export default CategoryCard;