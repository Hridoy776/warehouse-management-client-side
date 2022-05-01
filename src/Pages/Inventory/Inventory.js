import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
 const [newItem, setNewItem]=useState({})
  useEffect(() => {
    const url = `http://localhost:5000/item/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  const delevary = () => {
    const url = `http://localhost:5000/item/${id}`;
    if (item.quantity > 0) {
      const newQuantity = {
        quantity: item.quantity - 1,
      };
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newQuantity),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    
    
  };

  const handleRestore=e=>{
    e.preventDefault()
    const quantity=e.target.number.value;

    const url = `http://localhost:5000/item/${id}`;
    if (item.quantity) {
      const newQuantity = {
        quantity: parseInt(item.quantity) + parseInt(quantity),
      };
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newQuantity),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    
  }
  

  return (
    <div>
      <div>
      <h3>{item.name}</h3>
      <p>quantity:{item.quantity}</p>
      <button onClick={delevary} className="btn btn-primary">
        delevered
      </button>
      </div>
      <div>
        <form onSubmit={handleRestore}>
        <input
          className="border-solid rounded-md w-[300px] my-5 px-2 border-2 border-gray-600 py-1"
          type="number"
          name="number"
          id="1"
          placeholder="quantity"
          required
        />
        <br />
        <input
          className="btn btn-active mb-2 w-[300px] bg-[purple]"
          type="submit"
          value="restore"
        />
        </form>
      </div>
      <Link to="/manage">manage</Link>
    </div>
  );
};

export default Inventory;
