import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const handlAddItem = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const supplier = e.target.supplier.value;
    const img = e.target.img.value;
    const email = user.email;
    const description=e.target.description.value;

    const newItem = { name, price, quantity, supplier, img, email,description };
    console.log(newItem);
    const url = `https://lit-oasis-49315.herokuapp.com/add?email=${user?.email}`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        window.alert("item added")
      });
  };
  return (
    <div className="flex flex-col justify-center items-center mt-[100px]">
      <p className="text-5xl my-10 font-500 text-[purple]">ADD ITEM</p>
      <form
        onSubmit={handlAddItem}
        className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-10"
      >
        <div className="card-body">
          <div className="form-control mt-3">
            <input
              className="input input-bordered"
              type="text"
              name="email"
              id="0"
              value={user.email}
              readOnly
              required
            />
          </div>
          <div className="form-control mt-3">
            <input
              className="input input-bordered"
              type="text"
              name="name"
              id="1"
              placeholder="name"
              required
            />
          </div>

          <div className="form-control mt-3">
            <input
              className="input input-bordered"
              type="number"
              name="price"
              id="2"
              placeholder="price"
              required
            />
          </div>

          <div className="form-control mt-3">
            <input
              className="input input-bordered"
              type="number"
              name="quantity"
              id="3"
              placeholder="quantity"
              required
            />
          </div>

          <div className="form-control mt-3">
            <input
              className="input input-bordered"
              type="text"
              name="supplier"
              id="4"
              placeholder="supplier"
              required
            />
          </div>
          <div className="form-control mt-3">
            <textarea
              className=" textarea textarea-secondary"
              type="textarea"
              name="description"
              id="4"
              placeholder="description"
              required
            />
          </div>

          <div className="form-control mt-3">
            <input
              className="input input-bordered"
              type="text"
              name="img"
              id="5"
              placeholder="img"
              required
            />
          </div>

          <div className="form-control mt-3">
            <input className="btn bg-[purple]" type="submit" value="add" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
