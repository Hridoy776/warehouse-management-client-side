import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Item = ({ item }) => {
  
 useEffect(()=>{
   AOS.init({duration:2000})
 },[])

  const {_id, img, name,description,quantity,suplier,price}=item;
  const navigate=useNavigate()
  const handleUpdateItem=(id)=>{
    navigate(`/inventory/${id}`);
  }
  return (
    <>
      <div data-aos="zoom-in" className="card w-full h-[600px] shadow-2xl mx-auto">
        <figure>
          <img className="w-[300px] h-[200px]" src={img} alt="car!" />
        </figure>
        <div data-aos="ease-in-out"  className="card-body ">
          <h2 className="card-title mx-auto text-3xl ">{name}</h2>
          <p>price:{price}</p>
          <span className="text-xl mb-0"> quantity:{quantity}</span>  
          <span className="my-0">suplier: {suplier}</span>
          <p className="">{description}</p>
          
        </div>
        <div className="card-actions my-10 justify-center">
            <button onClick={()=>handleUpdateItem(_id)} className="btn absolute bottom-5 bg-[#a201a2] hover:bg-[purple] ">Update</button>
          </div>
      </div>
    </>
  );
};

export default Item;
