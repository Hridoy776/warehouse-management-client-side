import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";
import useItems from "../../Hooks/useItems";
import Banner from "./Banner/Banner";
import Item from "./Item.js/Item";
import Services from "./Services/Services";
import Slider from "./Slider/Slider";

const Home = () => {
  const [items] = useItems("https://lit-oasis-49315.herokuapp.com/items");
  if (items.length) {
    items.length = 6;
  }
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/manage");
  };
  return (
    <div className="   min-h-screen  ">
      {/* <h1 className="text-4xl font-medium  mt-[100px]  text-center">
        WELLCOME TO{" "}
        <span className="text-[purple] italic">PRISTINE PERFUMES</span>
      </h1> */}
      <section>
        <Banner></Banner>
      </section>
      <section>
        <div
          className=" lg:w-[90%] my-10 mx-auto grid lg:grid-cols-3 
            md:grid-cols-3  gap-8 p-5 justify-center items-center  min-h-screen"
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
          
        >
          manage <ArrowRightIcon className="h-5 inline w-5"/>
        </button>
      </p>
      <section>
        <div className="m-10">
          <Slider></Slider>
        </div>
      </section>
      <section>
        <div className="container lg:px-[100px] px-0 lg:grid justify-center items-center grid-cols-3 bg-[purple] p-5">
          <Services></Services>
        </div>
      </section>
    </div>
  );
};

export default Home;
