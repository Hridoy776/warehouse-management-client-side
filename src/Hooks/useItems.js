import  { useEffect, useState } from 'react';

const useItems = (url) => {
    const [items, setItems]=useState([])
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[url])
    return [items,setItems];
};

export default useItems;