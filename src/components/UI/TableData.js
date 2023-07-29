import Image from 'next/image';
import React from 'react';

const TableData = ({product}) => {
    console.log(product);
    return (
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <Image
                src="/images/ssd.png"
                width={100}
                height={100}
                alt="Picture of the product"
                className="max-w-sm rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div>
            <div className="font-semibold">{product?.productName}</div>
          </div>
        </div>
      </td>
    );
};

export default TableData;