import RestCard from "./RestCard";
import { useState } from "react";
import resData from "../utils/sampleData";

const Body = () => {
  const [listRes, setListRes] = useState(resData);

  return (
    <div className="body">
      <div className="search">
        <input className="input" type="text"></input>
      </div>
      <div>
        <button
          className="fil-btn"
          onClick={() => {
            const filteredList = listRes.filter(
              (res) => res.info.avgRating > 4.3
            );
            console.log(filteredList);
            setListRes(filteredList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {listRes.map((restaurant) => (
          <RestCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
