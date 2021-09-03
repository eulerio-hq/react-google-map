import React from "react";
import InfoWindow from "../window/Infowindow";
import MapIcon from "./mapIcon.jpg";

const Marker = (props: any) => {
    let { show,name,hours } = props;

    return (
      <div style={{cursor: "pointer"  }} >
      <img src={MapIcon}
            height= "42px"
            width= "50px"
            alt={name}
      />
         {show && <InfoWindow name={name} hours={hours} />}
      </div>
    );
  };

  export default Marker;
