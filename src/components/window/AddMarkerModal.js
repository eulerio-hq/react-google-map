import React from "react";
import "./modal.css";

const Modal = ({ show, landmarkName ,landmarkOpening,handleClose,handleSubmit,handleChange}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div className="modal-content">
      <div className="modal-header">
        <span className="close" onClick={handleClose}>&times;</span>
          <h3>Landmark Details</h3>
      </div>
      <form id="addLandmarkForm" onSubmit={handleSubmit}>
      <div className="modal-body">
           <p>
          <label className="labels">Enter Landmark Name:</label>
          <input id="landmarkName" type="text" value={landmarkName} name="landmarkName" className="form-control" onChange={handleChange} required/>
          </p>
          <p>
          <label className="labels">Enter Opening Hours:</label>
          <input id="landmarkOpening" type="text" value={landmarkOpening} name="landmarkOpening" className="form-control" onChange={handleChange} required/>
          </p>
      </div>
      <div>
        <button className="button buttonRounded" type="submit" >
        Save
        </button>
      </div>
      </form>

      </div>
    </div>
  );
};

export default Modal;
