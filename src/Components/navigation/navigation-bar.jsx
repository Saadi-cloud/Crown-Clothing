import { Fragment } from 'react'
import './navigation.css'
import { Link, Outlet } from 'react-router-dom'
function NavBar() {
    return (
      <div>
        <div className="container">
        <div className="head">
            <img src="./Assets/img/king.jpeg" alt="" />
            <nav className="head1">
              <ul className="menu">
                <li className="header-item">
                  <a className="header-link">HOME</a>
                </li>
                <li className="header-item">
                  <a className="header-link">SHOP</a>
                </li>
                <li className="header-item">
                  <Link to="/sign" className='header-link'>SIGNIN</Link>
                </li>
                <li className="header-item">
                  <a className="header-link">LOGIN</a>
                </li>
                <li className="header-item">
                  <a className="header-link"><img src="./Assets/img/shopping-bag.svg"/></a>
                </li>
              </ul>
            </nav>
            
          </div>
          </div>
          <Outlet/>
          </div>
    )
}

export default NavBar