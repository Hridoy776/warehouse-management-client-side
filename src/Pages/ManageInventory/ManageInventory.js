import React from "react";
import { useNavigate } from "react-router-dom";
import useItems from "../../Hooks/useItems";
import AllItem from "../AllItem/AllItem";

const ManageInventory = () => {
  const [items, setItems] = useItems(
    "https://lit-oasis-49315.herokuapp.com/items"
  );
  const navigate = useNavigate();
  const handleDeleteItem = (id) => {
    const url = `https://lit-oasis-49315.herokuapp.com/item/${id}`;
    const proceed=window.confirm("are you sure to delete?")
    if(proceed){
      fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };

  const handleNavigate = () => {
    navigate("/additem");
  };
  return (
    <div className="container mx-auto h-screen mt-[100px] ">
      <p className="  text-4xl my-10 font-500 text-[purple] text-center">
        MANAGE INVENTORY
      </p>
      <table className="rounded my-3 table    mx-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>price</th>
            <th>quantity</th>
            <th>delete</th>
          </tr>
        </thead>
        {items.map((item) => (
          <AllItem
            key={item._id}
            handleDeleteItem={handleDeleteItem}
            item={item}
          ></AllItem>
        ))}
      </table>

      <p className="text-center">
        <button
          onClick={handleNavigate}
          className="btn btn-active mb-2 w-[300px] bg-[purple]  "
        >
          add new item
        </button>
      </p>
    </div>
  );
};

export default ManageInventory;
