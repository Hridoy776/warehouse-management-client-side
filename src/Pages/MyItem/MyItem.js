
import { TrashIcon } from "@heroicons/react/solid";

import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {  useNavigate } from "react-router-dom";
import axiosSecret from "../../api/axiosSecret";

import auth from "../../firebase.init";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    const getMyItem = async () => {
      const email = user?.email;

      const url = `https://lit-oasis-49315.herokuapp.com/user/items?email=${email}`;
     try {
      const { data } = await axiosSecret.get(url);
      setItems(data);
     } catch (error) {
       console.log(error.message)
       if(error.response.status===403 || error.response.status === 401){
         signOut(auth)
         navigate('/login')
       }
     }
    };
    getMyItem();
  }, [user,navigate]);
  
  const handleDeleteItem = (id) => {
    const url = `https://lit-oasis-49315.herokuapp.com/user/items/${id}`;
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
    <div className="mt-[100px] h-screen">
      <p className="  text-4xl my-10 font-500 text-[purple] text-center">
        MY ITEMS
      </p>
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
                  <button
                    onClick={() => handleDeleteItem(item._id)}
                    className="btn btn-circle bg-[purple]"
                  >
                    <TrashIcon className="text-white  h-5 w-5" />
                  </button>
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
