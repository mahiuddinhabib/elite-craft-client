import { setComponent } from "@/redux/features/components/componentSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const BuilderCard = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
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

  const handleBuilderBtn = () => {
    console.log(productName);
    if (category === "Power Supply Unit")
        dispatch(setComponent({ category: "PowerSupplyUnit", component: product }));
    else if (category === "Storage Device")
        dispatch(setComponent({ category: "StorageDevice", component: product }));
    else
        dispatch(setComponent({ category, component: product }));

    router.push("/pc-builder");
  };
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
        <h2 className="card-title">{productName}</h2>
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
