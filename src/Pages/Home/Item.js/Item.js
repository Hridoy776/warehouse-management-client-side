const Item = ({ item }) => {
  return (
    <>
      <div className="card w-4/5 h-[600px] glass mx-auto">
        <figure>
          <img className="w-full" src={item.img} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title mx-auto">{item.name}</h2>
          <p>quantity:</p>
          <p>suplier name:</p>
          <p>{item.description}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
