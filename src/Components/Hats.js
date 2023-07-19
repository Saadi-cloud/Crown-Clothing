import React from "react";
import H_Data from "./HatData";
export default function Hats() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>H A T S</h1>
      <div className="container">
        <div className="row">
          {H_Data.map((val) =>(
          <div className={val.col}>
            <div className={val.img_det}>
              <img src={val.img} alt="" className={val.img_setting} />
              <div className='row' style={{justifyContent: "space-between"}}>
                    <span style={{paddingLeft: "23px"}}>{val.name}</span>
                    <span style={{paddingRight: "23px"}}>{val.number}</span>
                </div>
            </div> 
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
