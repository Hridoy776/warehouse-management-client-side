import React from "react";

const Banner = () => {
  return (
    
      <div style={{background:`url("https://images.unsplash.com/photo-1543857261-f71238eb4188?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80")`,backgroundPosition:"center",backgroundRepeat:"no-repeat",opacity:'inherit',backgroundSize:"cover"}}  className="hero min-h-screen bg-base-200 w-full ">
        <div  className="hero-content flex-col lg:flex-row-reverse">
          <img 
            src="https://i.ibb.co/VqD82mX/camille-paralisan-Lgoehzz-FAMA-unsplash.jpg"
            alt=""
            className="max-w-[300px]  rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-medium text-white">WELLCOME to PRISTINE PERFUME!</h1>
            <p className="py-6 text-3xl text-white">
              you can supply perfumes to us
            </p>
            <button className="btn btn-outline btn-secondary ">Get Started</button>
          </div>
        </div>
      </div>
    
  );
};

export default Banner;
