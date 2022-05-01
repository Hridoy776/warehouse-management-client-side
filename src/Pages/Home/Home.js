import React from "react";
import { Link } from "react-router-dom";
import useItems from "../../Hooks/useItems";
import Item from "./Item.js/Item";


const Home = () => {
  const [items] = useItems("http://localhost:5000/items");
  if (items.length) {
    items.length = 6;
  }
  return (
    <div>
      <p>home</p>
      <section
        className="container my-10 mx-auto grid lg:grid-cols-3 
            md:grid-cols-3  gap-8  justify-center items-center"
      >
        {items.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
        <Link to="/manage">manage</Link>
      </section>
    </div>
  );
};

export default Home;
