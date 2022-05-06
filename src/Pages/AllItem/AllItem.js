import { TrashIcon } from "@heroicons/react/solid";
import React from "react";


const AllItem = ({ item,handleDeleteItem }) => {
    
    
  return (
    <tbody>
      <tr>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
        <th><button onClick={()=>handleDeleteItem(item._id)} className="btn bg-[purple] "><TrashIcon className="text-white  h-5 w-5"/></button></th>
      </tr>
    </tbody>
  );
};

export default AllItem;
