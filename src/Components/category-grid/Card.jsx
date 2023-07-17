import React from 'react';
import CategoryGrid from './category-grid';
import Data from './Data';

export default function Card(props) {
  return (
    <>
      <div className={props.clms}>
        <div className={props.names}>
          <h3 className="bg">
            {props.det}
            <br />
            <span>Shop Now</span>
          </h3>
        </div>
      </div>
    </>
  );
}
