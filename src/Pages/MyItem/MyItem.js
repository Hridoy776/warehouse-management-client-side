import React, { useEffect, useState } from "react";

const MyItem = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/user/items";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleDeleteItem = (id) => {
    const url = `http://localhost:5000/user/items/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = items.filter((item) => item._id !== id);
        setItems(remaining);
      });
  };
  return (
    <div>
      my item
      <div className="container mx-auto">
        <table className="rounded my-3 table table-compact   mx-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>quantity</th>
              <th>price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={()=>handleDeleteItem(item._id)} className="btn btn-circle bg-[purple]">x</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItem;
