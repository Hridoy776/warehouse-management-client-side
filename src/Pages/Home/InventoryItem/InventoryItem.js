

const InventoryItem = ({ item}) => {
    
  return (
    <>
      <div className="card w-3/4 glass mx-auto">
        <figure>
          <img className="w-full" src={item.img} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title mx-auto">{item.name}</h2>
          <p>{item.description}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryItem;
