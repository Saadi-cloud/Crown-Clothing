import { Fragment } from "react";
import './category-grid.css'
import Data from "./Data";
import { Link } from "react-router-dom";
function CategoryGrid(props) {
    return (
        <Fragment>
            <div className="container">
            <div className="row">
                {Data.map((val) => (
                    <div className={val.clm}>
                        <Link to={val.link}>
                            <div className={val.namee}>
                                <h3 className="bg">
                                    {val.details}
                                    <br />
                                    <span>{val.Comment}</span>
                                </h3>
                            </div>
                            </Link>
                    </div>
                ))}
                </div>
                </div>

                {/* <div className="column">
                <div className="img1">
                    <h3 className="bg">
                    Jackets
                    <br />
                    <span>Shop Now</span>
                    </h3>
                </div>
                </div>
                <div className="column">
                <div className="img2">
                    <h3 className="bg">
                    Sneakers
                    <br />
                    <span>Shop Now</span>
                    </h3>
                </div>
                </div> */}
            
            {/* <div className="row">
                <div className="column1">
                <a href="#" onClick={() => handleClick("women")}>
                    <div className="img3">
                    <h3 className="bg">
                        Womens
                        <br />
                        <span>Shop Now</span>
                    </h3>
                    </div>
                </a>
                </div>
                <div className="column1">
                <div className="img4">
                    <h3 className="bg">
                    Mens
                    <br />
                    <span>Shop Now</span>
                    </h3>
                </div>
                </div>
            </div> */}
        </Fragment>
    );
}

export default CategoryGrid;