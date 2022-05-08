import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const url = `https://lit-oasis-49315.herokuapp.com/item/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  const delevary = () => {
    const url = `https://lit-oasis-49315.herokuapp.com/item/${id}`;
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
        .then((data) => {
          console.log(data);
        });
      const { quantity, ...rest } = item;
      const updateItem = rest;
      updateItem["quantity"] = newQuantity.quantity;
      setItem(updateItem);
    }
  };

  const handleRestore = (e) => {
    e.preventDefault();
    const inputquantity = e.target.number.value;

    const url = `https://lit-oasis-49315.herokuapp.com/item/${id}`;
    if (item.quantity>=0) {
      const newQuantity = {
        quantity: parseInt(item.quantity) + parseInt(inputquantity),
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
      e.target.reset();

      const { quantity, ...rest } = item;
      const updateItem = rest;
      updateItem["quantity"] = newQuantity.quantity;
      setItem(updateItem);
    }
  };
  
  const handleNavigate = () => {
    navigate("/manage");
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center mt-[100px]">
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure className="p-2">
          <img className="rounded-lg " src={item.img} alt="Album" />
        </figure>
        <div class="card-body h-[400px] my-auto">
          <p className="text-4xl ">{item.name}</p>
          <p className="text-2xl">price:{item.price}</p>
          <p className="text-2xl ">quantity:{item.quantity}</p>
          <button
            onClick={delevary}
            className="btn bg-[purple] hover:bg-[white] hover:text-[purple] w-[300px]"
          >
            delevered
          </button>
          <form onSubmit={handleRestore}>
            <input
              className="border-solid  rounded-md w-[300px] my-5 px-2 border-2 border-gray-600 py-1"
              type="number"
              name="number"
              id="1"
              placeholder="quantity"
              required
            />
            <br />
            <input
              className="btn btn-active mb-2 w-[300px] hover:bg-[white] hover:text-[purple] bg-[purple]"
              type="submit"
              value="restore"
            />
          </form>
        </div>
      </div>

      <p className="text-center text-2xl font-medium my-10">
        <button
          onClick={handleNavigate}
          className=" link link-secondary text-center  w-fit"
          
        >
          manage inventory <ArrowRightIcon className="h-5 inline w-5"/>
        </button>
      </p>
    </div>
  );
};

export default Inventory;
