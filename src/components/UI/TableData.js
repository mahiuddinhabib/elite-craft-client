import { resetComponent } from "@/redux/features/components/componentSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const TableData = ({ product }) => {
  const dispatch = useDispatch();
  const handleResetBtn = () => {
    // console.log(product.category);
    if (product?.category === "Power Supply Unit")
      dispatch(resetComponent({ category: "PowerSupplyUnit" }));
    else if (product?.category === "Storage Device")
      dispatch(resetComponent({ category: "StorageDevice" }));
    else dispatch(resetComponent({ category: product?.category }));
  };
  return (
    <td>
      <div className="flex items-center space-x-3">
        <button
          onClick={handleResetBtn}
          className="btn btn-xs btn-outline btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <Image
              src="/images/dummy_pc.png"
              width={100}
              height={100}
              alt="Picture of the product"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
        </div>
        <div>
          <div className="font-semibold">
            <span>{product?.productName}</span>
          </div>
        </div>
      </div>
    </td>
  );
};

export default TableData;
