import { data } from "./../data/data";
import { FaShoppingBag } from "react-icons/fa";
export const RecentOrders = () => {
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1>Transacciones recientes</h1>
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className="bg-gray-100 hover:bg-gray-100 rounded-lg my-3 flex items-center cursor-pointer"
          >
            <div className="bg-purple-100 rounded-lg p-3">
              {" "}
              <FaShoppingBag className="text-purple-800" />
            </div>
            <div className="pl-4">
              <p className="text-purple-600 font-bold  rounded">{order.tipo}</p>
              <p className="text-gray-600 font-bold">${order.total}</p>
              <p className="text-gray-400 text-sm">{order.name.first}</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-small">
              {" "}
              {order.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
