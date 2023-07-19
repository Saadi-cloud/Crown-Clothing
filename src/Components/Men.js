import React from 'react'
import M_Data from './MenData'

export default function Men() {
  return (
    
      <div>
      <h1 style={{textAlign: "center"}}>M e n</h1>  
      <div className="container">
        <div className="row">
          {M_Data.map((val) =>(
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
              <img src="https://www.crown-clothes.com/images/floral-shirt.jpg" alt="" className="dd" />
              <div className='row' style={{justifyContent: "space-between"}}>
                    <span style={{paddingLeft: "23px"}}>Floral</span>
                    <span style={{paddingRight: "23px"}}>25</span>
                </div>
            </div>
          </div>
          <div className="column">
          <div className="detail">
              <img src="https://www.crown-clothes.com/images/long-sleeve.jpg" alt=""  className="dd"/>
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
              <img src="https://www.crown-clothes.com/images/pink-shirt.jpg" alt=""  className="dd"/>
              <div className='row' style={{justifyContent: "space-between"}}>
                    <span style={{paddingLeft: "23px"}}>Red Dots Dress</span>
                    <span style={{paddingRight: "23px"}}>25</span>
                </div>
            </div>
          </div>
          <div className="column">
          <div className="detail">
              <img src="https://www.crown-clothes.com/images/roll-up-jean-shirt.jpg" alt=""  className="dd"/>
              <div className='row' style={{justifyContent: "space-between"}}>
                    <span style={{paddingLeft: "23px"}}>Striped Sweater</span>
                    <span style={{paddingRight: "23px"}}>25</span>
                </div>
            </div>
          </div>
          <div className="column">
          <div className="detail">
              <img src="https://www.crown-clothes.com/images/polka-dot-shirt.jpg" alt=""  className="dd"/>
              <div className='row' style={{justifyContent: "space-between"}}>
                    <span style={{paddingLeft: "23px"}}>Yellow Track Suit</span>
                    <span style={{paddingRight: "23px"}}>25</span>
                </div>
            </div>
          </div>
        </div> */}
        
      </div>
    </div>
    
  )
}
