import TableData from "@/components/UI/TableData";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const PcBuilder = () => {
  const router = useRouter()
  const component = useSelector((state) => state.component);

  const noOfEmptySelect = Object.values(component).reduce(
    (count, value) => count + (Object.keys(value).length === 0 ? 1 : 0),
    0
  );
// console.log(noOfEmptySelect);
  return (
    <div className="min-h-screen md:mx-72 my-8">
      <h1 className="text-center text-4xl">Select & Craft Your Dream Machine</h1>
      <table className="table overflow-auto mt-10">
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
              <td>
                <Link
                  href={"/pc-builder/Processor"}
                  className="btn btn-primary"
                >
                  Select
                </Link>
              </td>
            )}
          </tr>
          <tr>
            <td className="text-[17px] text-gray-500 font-bold">Motherboard</td>
            {Object.keys(component?.Motherboard).length !== 0 ? (
              <TableData product={component.Motherboard} />
            ) : (
              <td>
                <Link
                  href={"/pc-builder/Motherboard"}
                  className="btn btn-primary"
                >
                  Select
                </Link>
              </td>
            )}
          </tr>
          <tr>
            <td className="text-[17px] text-gray-500 font-bold">RAM</td>
            {Object.keys(component?.RAM).length !== 0 ? (
              <TableData product={component.RAM} />
            ) : (
              <td>
                <Link href={"/pc-builder/RAM"} className="btn btn-primary">
                  Select
                </Link>
              </td>
            )}
          </tr>
          <tr>
            <td className="text-[17px] text-gray-500 font-bold">
              Power Supply Unit
            </td>
            {Object.keys(component?.PowerSupplyUnit).length !== 0 ? (
              <TableData product={component.PowerSupplyUnit} />
            ) : (
              <td>
                <Link
                  href={"/pc-builder/Power Supply Unit"}
                  className="btn btn-primary"
                >
                  Select
                </Link>
              </td>
            )}
          </tr>
          <tr>
            <td className="text-[17px] text-gray-500 font-bold">
              Storage Device
            </td>
            {Object.keys(component?.StorageDevice).length !== 0 ? (
              <TableData product={component.StorageDevice} />
            ) : (
              <td>
                <Link
                  href={"/pc-builder/Storage Device"}
                  className="btn btn-primary"
                >
                  Select
                </Link>
              </td>
            )}
          </tr>
          <tr>
            <td className="text-[17px] text-gray-500 font-bold">Monitor</td>
            {Object.keys(component?.Monitor).length !== 0 ? (
              <TableData product={component.Monitor} />
            ) : (
              <td>
                <Link href={"/pc-builder/Monitor"} className="btn btn-primary">
                  Select
                </Link>
              </td>
            )}
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center">
        <button
          onClick={() => {
            router.push("/");
          }}
          disabled={noOfEmptySelect > 1}
          className={`btn btn-primary`}
        >
          Complete Build
        </button>
      </div>
    </div>
  );
};

export default PcBuilder;
