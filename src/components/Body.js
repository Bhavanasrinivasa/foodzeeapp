import RestCard from "./RestCard";
import resData from "../utils/sampleData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input className="input" type="text"></input>
      </div>
      <div className="res-container">
        {resData.map((restaurant) => (
          <RestCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
