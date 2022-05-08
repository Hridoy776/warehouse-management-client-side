import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useEffect }  from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import auth from "../../firebase.init";
import useItems from "../../Hooks/useItems";
import Banner from "./Banner/Banner";
import Item from "./Item.js/Item";
import Services from "./Services/Services";
import Slider from "./Slider/Slider";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [,loading,]=useAuthState(auth)
  const [items] = useItems("https://lit-oasis-49315.herokuapp.com/items");
  if (items.length) {
    items.length = 6;
  }
  useEffect(()=>{
    AOS.init({duration:2000})
   },[])
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/manage");
  };
  if(loading){
    return (
      <div className="h-screen flex justify-center">
        <SpinnerCircular></SpinnerCircular>
      </div>)
  }
  
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
        <p className="text-center text-4xl my-10 font-medium text-[#bf0abf]">inventory</p>
        <div
          className=" lg:w-[90%] my-10 mx-auto grid lg:grid-cols-3 
            md:grid-cols-3  gap-8 p-5 justify-center items-center  min-h-screen"
        >
          {items.map((item) => (
            <Item key={item._id} item={item}></Item>
          ))}
        </div>
      </section>
      <p data-aos="slide-left" className="text-center text-2xl font-medium my-2">
        <button
          onClick={handleNavigate}
          className=" link link-secondary text-center  w-fit"
          
        >
          manage inventory <ArrowRightIcon className="h-5 inline w-5"/>
        </button>
      </p>
      <section>
        <div data-aos="slide-up" className="m-10 ">
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
