import { Fragment } from "react";
import './category-grid.css'
import Data from "./Data";
import Card from "./Card";
function CategoryGridsimple({handleClick}) {
  return (
    <Fragment>
        <div className="row">

        {Data.map((val) => (
     <Card clms={val.clm} names={val.namee} det={val.details}  />
      ))}
               
              </div>
          </Fragment>
  );
}

export default CategoryGridsimple;