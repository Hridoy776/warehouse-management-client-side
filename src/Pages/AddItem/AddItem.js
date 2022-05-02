import React from "react";

const AddItem = () => {
    const handlAddItem=(e)=>{
        e.preventDefault()
        const name=e.target.name.value;
        const price=e.target.price.value;
        const quantity=e.target.quantity.value;
        const supplier=e.target.supplier.value;
        const img=e.target.img.value;
        
        const newItem={name,price,quantity,supplier,img}
        console.log(newItem)
        const url=`http://localhost:5000/items`
        fetch(url,{
            "method":"POST",
            "headers":{
                "content-type":"application/json"
            },
            
            "body":JSON.stringify(newItem)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
  return (
    <div>
      <p>add item</p>
      <form onSubmit={handlAddItem}>
        <input
          className="border-solid rounded-md w-[300px] mb-5 px-2 border-2 border-gray-600 py-1"
          type="text"
          name="name"
          id="1"
          placeholder="name"
          required
        />
        <br />
        <input
          className="border-solid rounded-md w-[300px] mb-5 px-2 border-2 border-gray-600 py-1"
          type="number"
          name="price"
          id="2"
          placeholder="price"
          required
        />
        <br />
        <input
          className="border-solid rounded-md w-[300px] mb-5 px-2 border-2 border-gray-600 py-1"
          type="number"
          name="quantity"
          id="3"
          placeholder="quantity"
          required
        />
        <br />
        <input
          className="border-solid rounded-md w-[300px] mb-5 px-2 border-2 border-gray-600 py-1"
          type="text"
          name="supplier"
          id="4"
          placeholder="supplier"
          required
        />
        <br />
        <input
          className="border-solid rounded-md w-[300px] mb-5 px-2 border-2 border-gray-600 py-1"
          type="text"
          name="img"
          id="5"
          placeholder="img"
          required
        />
        <br />
        <input
          className="btn btn-active mb-2 w-[300px] bg-[purple]"
          type="submit"
          value="add"
        />
      </form>
    </div>
  );
};

export default AddItem;
