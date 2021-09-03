
const InfoWindow = (props) => {
  const { name , hours } = props;
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
      </div>
    </div>
  );
};

export default InfoWindow;
