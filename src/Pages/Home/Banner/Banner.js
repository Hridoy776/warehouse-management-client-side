import React from "react";

const Banner = () => {
  return (
    
      <div style={{background:`url("https://images.unsplash.com/photo-1543857261-f71238eb4188?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80")`,backgroundPosition:"center",backgroundRepeat:"no-repeat",opacity:'inherit',backgroundSize:"cover"}}  className="hero min-h-screen bg-base-200 w-full ">
        <div  className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://api.lorem.space/image/movie?w=260&h=400"
            alt=""
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-medium text-white">Box Office News!</h1>
            <p className="py-6 text-3xl text-white">
              you can supply perfumes to us
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    
  );
};

export default Banner;
