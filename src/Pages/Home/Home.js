import React from "react";
import { useNavigate } from "react-router-dom";
import useItems from "../../Hooks/useItems";
import Banner from "./Banner/Banner";
import Item from "./Item.js/Item";

const Home = () => {
  const [items] = useItems("http://localhost:5000/items");
  if (items.length) {
    items.length = 6;
  }
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/manage");
  };
  return (
    <div>
      <h1 className="text-4xl font-medium my-5 text-center">
        WELLCOME TO{" "}
        <span className="text-[purple] italic">PRISTINE PERFUMES</span>
      </h1>
      <section  className="  ">
        <Banner></Banner>
      </section>
      <section>
        <div
          className="xl:container my-10 mx-auto grid lg:grid-cols-3 
            md:grid-cols-3  gap-8 p-5 justify-center items-center bg-[#f3d0f357]"
        >
          {items.map((item) => (
            <Item key={item._id} item={item}></Item>
          ))}
        </div>
      </section>
      <p className="text-center text-2xl font-medium my-2">
        <button
          onClick={handleNavigate}
          className=" text-center  w-fit"
          to="/manage"
        >
          manage
        </button>
      </p>
    </div>
  );
};

export default Home;
