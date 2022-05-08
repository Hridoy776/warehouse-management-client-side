import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const {_id, img, name,description,quantity,suplier,price}=item;
  const navigate=useNavigate()
  const handleUpdateItem=(id)=>{
    navigate(`/inventory/${id}`);
  }
  return (
    <>
      <div className="card w-full h-[550px] shadow-2xl mx-auto">
        <figure>
          <img className="w-[300px] h-[200px]" src={img} alt="car!" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title mx-auto text-3xl ">{name}</h2>
          <p>price:{price}</p>
          <span className="text-xl mb-0"> quantity:{quantity}</span>  
          <span className="my-0">suplier: {suplier}</span>
          <p className="">{description}</p>
          <div className="card-actions my-10 justify-center">
            <button onClick={()=>handleUpdateItem(_id)} className="btn absolute bottom-5 bg-[#a201a2] hover:bg-[purple] ">Update</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
