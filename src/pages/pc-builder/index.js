import TableData from "@/components/UI/TableData";
import Image from "next/image";
import { useSelector } from "react-redux";

const PcBuilder = () => {
  const component = useSelector((state) => state.component);
  return (
    <div className="min-h-screen overflow-x-auto md:mx-72">
      <table className="table mt-8">
        {/* head */}
        <thead>
          <tr>
            <th className="text-[19px] text-gray-800 font-bold">Component</th>
            <th className="text-[19px] text-gray-800 font-bold">Selection</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-[17px] text-gray-500 font-bold">Processor</td>
            {Object.keys(component?.processor).length !== 0 ? (
              <TableData product={component.processor} />
            ) : (
              <td><button className="btn btn-primary">Select</button></td>
            )}
          </tr>
          <tr>
            <td className="text-[17px] text-gray-500 font-bold">Motherboard</td>
            {Object.keys(component?.motherboard).length !== 0 ? (
              <TableData product={component.motherboard} />
            ) : (
              <td><button className="btn btn-primary">Select</button></td>
            )}
          </tr>
          <tr>
            <td className="text-[17px] text-gray-500 font-bold">RAM</td>
            {Object.keys(component?.ram).length !== 0 ? (
              <TableData product={component.ram} />
            ) : (
              <td><button className="btn btn-primary">Select</button></td>
            )}
          </tr>
          <tr>
            <td className="text-[17px] text-gray-500 font-bold">Power Supply Unit</td>
            {Object.keys(component?.powerSupplyUnit).length !== 0 ? (
              <TableData product={component.powerSupplyUnit} />
            ) : (
              <td><button className="btn btn-primary">Select</button></td>
            )}
          </tr>
          <tr>
            <td className="text-[17px] text-gray-500 font-bold">Storage Device</td>
            {Object.keys(component?.storageDevice).length !== 0 ? (
              <TableData product={component.storageDevice} />
            ) : (
              <td><button className="btn btn-primary">Select</button></td>
            )}
          </tr>
          <tr>
            <td className="text-[17px] text-gray-500 font-bold">Monitor</td>
            {Object.keys(component?.monitor).length !== 0 ? (
              <TableData product={component.monitor} />
            ) : (
              <td><button className="btn btn-primary">Select</button></td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PcBuilder;
