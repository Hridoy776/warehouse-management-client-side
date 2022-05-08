import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
  
  return (
    
      <div data-aos="fade-in" style={{background:`url("https://i.ibb.co/Sv6pxBp/charisse-kenion-Jm-ABk-Rm-LSpw-unsplash.jpg")`,backgroundPosition:"center",backgroundRepeat:"no-repeat",opacity:'inherit',backgroundSize:"cover"}}  className="hero min-h-screen bg-base-200 w-full ">
        <div  className="hero-content flex-col lg:flex-row-reverse">
          <img 
            src="https://i.ibb.co/VqD82mX/camille-paralisan-Lgoehzz-FAMA-unsplash.jpg"
            alt=""
            className="max-w-[300px]  rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-medium text-[#630863]">WELLCOME to PRISTINE PERFUME!</h1>
            <p className="py-6 text-3xl text-black">
              you can supply perfumes to us
            </p>
            <button className="btn btn-outline btn-secondary ">Get Started</button>
          </div>
        </div>
      </div>
    
  );
};

export default Banner;
