import { IMG_URL } from "../utils/links";

const RestCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, avgRating, cuisines, areaName, sla } =
    resData?.info;
  return (
    <div className="rescard">
      <img className="resimg" src={IMG_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <p>
        {avgRating} . {sla.slaString}
      </p>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
    </div>
  );
};

export default RestCard;
