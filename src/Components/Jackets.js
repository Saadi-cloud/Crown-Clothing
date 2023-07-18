import React from 'react'
import J_Data from './Jacket_Data'

export default function Jackets() {
  return (
    <div>
      <div>
      <h1 style={{textAlign: "center"}}>J a c k e t s</h1>  
      <div className="container">
        <div className="row">
          {J_Data.map((val) => (
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
          {/* <div className="column">
          <div className="detail">
              <img src="https://www.crown-clothes.com/images/blue-jean-jacket.jpg" alt="" className="cc" />
              <div className='row' style={{justifyContent: "space-between"}}>
                    <span style={{paddingLeft: "23px"}}>Floral</span>
                    <span style={{paddingRight: "23px"}}>25</span>
                </div>
            </div>
          </div>
          <div className="column">
          <div className="detail">
              <img src="https://www.crown-clothes.com/images/grey-jean-jacket.jpg" alt=""  className="cc"/>
              <div className='row' style={{justifyContent: "space-between"}}>
                    <span style={{paddingLeft: "23px"}}>Floral Dress</span>
                    <span style={{paddingRight: "23px"}}>25</span>
                </div>
            </div>
          </div> */}
          </div>
          
          {/* <div className="row">
          <div className="column">
          <div className="detail">
              <img src="https://www.crown-clothes.com/images/brown-shearling.jpg" alt=""  className="cc"/>
              <div className='row' style={{justifyContent: "space-between"}}>
                    <span style={{paddingLeft: "23px"}}>Red Dots Dress</span>
                    <span style={{paddingRight: "23px"}}>25</span>
                </div>
            </div>
          </div>
          <div className="column">
          <div className="detail">
              <img src="https://www.crown-clothes.com/images/brown-trench.jpg" alt=""  className="cc"/>
              <div className='row' style={{justifyContent: "space-between"}}>
                    <span style={{paddingLeft: "23px"}}>Striped Sweater</span>
                    <span style={{paddingRight: "23px"}}>25</span>
                </div>
            </div>
          </div>
          <div className="column">
          <div className="detail">
              <img src="https://www.crown-clothes.com/images/brown-trench.jpg" alt=""  className="cc"/>
              <div className='row' style={{justifyContent: "space-between"}}>
                    <span style={{paddingLeft: "23px"}}>Striped Sweater</span>
                    <span style={{paddingRight: "23px"}}>25</span>
                </div>
            </div>
          </div>
          
        </div> */}
        
      </div>
    </div>
    </div>
  )
}
