import React from 'react';
import InventoryItem from './InventoryItem/InventoryItem';
import  { useEffect, useState } from "react";
const Home = () => {
    
    const [items, setItems]=useState([])
    useEffect(()=>{
        fetch('items.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div>
            <p>home</p>
            <section className='container my-10 mx-auto grid lg:grid-cols-3 
            md:grid-cols-3  gap-8  justify-center items-center'>
                {
                    items.map(item=><InventoryItem key={item.id} item={item}></InventoryItem>)
                }
            </section>
        </div>
    );
};

export default Home;