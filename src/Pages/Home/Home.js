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
    <div className="bg-[#DDB9D3]">
      <h1 className="text-4xl font-medium my-5 text-center">
        WELLCOME TO{" "}
        <span className="text-[purple] italic">PRISTINE PERFUMES</span>
      </h1>
      <section   className="  ">
        <Banner></Banner>
      </section>
      <section>
        <div /* style={{background:`url("https://images.unsplash.com/photo-1572435275534-21fbaabee5ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1917&q=80")`,backgroundPosition:"center",backgroundRepeat:"no-repeat",opacity:'inherit',backgroundSize:"cover"}} */
          className="xl:container my-10 mx-auto grid lg:grid-cols-3 
            md:grid-cols-3  gap-8 p-5 justify-center items-center bg-[#DDB9D3]"
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
