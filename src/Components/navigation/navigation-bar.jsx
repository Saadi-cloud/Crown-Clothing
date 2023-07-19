import { Fragment } from 'react'
import './navigation.css'
import { Link, NavLink, Outlet } from 'react-router-dom'
function NavBar() {
    return (
      <div>
        <div className="container">
        <div className="head">
            <img src="./Assets/img/king.jpeg" alt="" />
            <nav className="head1">
              <ul className="menu">
                <li className="header-item">
                  <NavLink to="/" className="header-link">HOME</NavLink>
                </li>
                <li className="header-item">
                  <NavLink className="header-link">SHOP</NavLink>
                </li>
                <li className="header-item">
                  <NavLink to="/sign" className='header-link'>SIGNIN</NavLink>
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