import RestCard from "./RestCard";
import { useState, useEffect } from "react";
import resData from "../utils/sampleData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listRes, setListRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9596294&lng=77.70231439999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);

    setListRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listRes.length === 0) {
    return <Shimmer />;
  }

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
              (res) => res.info.avgRating > 4.0
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
