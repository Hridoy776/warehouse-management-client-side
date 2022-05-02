import React from "react";


const AllItem = ({ item,handleDeleteItem }) => {
    
    
  return (
    <tbody>
      <tr>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
        <th><button onClick={()=>handleDeleteItem(item._id)} className="btn bg-[purple]">x</button></th>
      </tr>
    </tbody>
  );
};

export default AllItem;
