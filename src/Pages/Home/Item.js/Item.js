import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const {_id, img, name,description,quantity}=item;
  const navigate=useNavigate()
  const handleUpdateItem=(id)=>{
    navigate(`/inventory/${id}`);
  }
  return (
    <>
      <div className="card w-4/5 h-[600px] glass mx-auto">
        <figure>
          <img className="w-full" src={img} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title mx-auto">{name}</h2>
          <p> quantity:{quantity}</p>
          
          <p>suplier name:</p>
          <p>{description}</p>
          <div className="card-actions justify-center">
            <button onClick={()=>handleUpdateItem(_id)} className="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
