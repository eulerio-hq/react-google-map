
import StarRating from '../../components/rating/StarRating';
import {NUMBER_OF_STARS} from "../../Constants.js";

const InfoWindow = (props) => {
  const { name , hours , category , starRating } = props;
  const infoWindowStyle = {
    position: "relative",
    bottom: 150,
    left: "-45px",
    width: 220,
    backgroundColor: "white",
    boxShadow: "0 2px 7px 1px rgba(0, 0, 0, 0.3)",
    padding: 10,
    fontSize: 14,
    zIndex: 100,
    border: "2px solid grey",
    borderRadius: "12px"
  };

  return (
    <div style={infoWindowStyle}>
      <div style={{ fontSize: 12 }}>
      <label>Landmark Name: {name}</label>
      <br></br>
      <label>Opening Hours: {hours}</label>
      <br></br>
      <label>Category: {category} </label>
      </div>
      <StarRating  numberOfStars={NUMBER_OF_STARS} currentRating={starRating} editable="false"/>
    </div>
  );
};

export default InfoWindow;
