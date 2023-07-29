import TableData from "@/components/UI/TableData";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const PcBuilder = () => {
  const component = useSelector((state) => state.component);
    const categories = [
      "Processor",
      "Motherboard",
      "RAM",
      "Power Supply Unit",
      "Storage Device",
      "Monitor",
    ];
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
            {Object.keys(component?.Processor).length !== 0 ? (
              <TableData product={component.Processor} />
            ) : (
              <td><Link href={'/pc-builder/Processor'} className="btn btn-primary">Select</Link></td>
            )}
          </tr>
          <tr>
            <td className="text-[17px] text-gray-500 font-bold">Motherboard</td>
            {Object.keys(component?.Motherboard).length !== 0 ? (
              <TableData product={component.Motherboard} />
            ) : (
              <td><Link href={'/pc-builder/Motherboard'} className="btn btn-primary">Select</Link></td>
            )}
          </tr>
          <tr>
            <td className="text-[17px] text-gray-500 font-bold">RAM</td>
            {Object.keys(component?.RAM).length !== 0 ? (
              <TableData product={component.RAM} />
            ) : (
              <td><Link href={'/pc-builder/RAM'} className="btn btn-primary">Select</Link></td>
            )}
          </tr>
          <tr>
            <td className="text-[17px] text-gray-500 font-bold">Power Supply Unit</td>
            {Object.keys(component?.PowerSupplyUnit).length !== 0 ? (
              <TableData product={component.PowerSupplyUnit} />
            ) : (
              <td><Link href={'/pc-builder/Power Supply Unit'} className="btn btn-primary">Select</Link></td>
            )}
          </tr>
          <tr>
            <td className="text-[17px] text-gray-500 font-bold">Storage Device</td>
            {Object.keys(component?.StorageDevice).length !== 0 ? (
              <TableData product={component.StorageDevice} />
            ) : (
              <td><Link href={'/pc-builder/Storage Device'} className="btn btn-primary">Select</Link></td>
            )}
          </tr>
          <tr>
            <td className="text-[17px] text-gray-500 font-bold">Monitor</td>
            {Object.keys(component?.Monitor).length !== 0 ? (
              <TableData product={component.Monitor} />
            ) : (
              <td><Link href={'/pc-builder/Monitor'} className="btn btn-primary">Select</Link></td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PcBuilder;
