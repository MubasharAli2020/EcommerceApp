import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';
import logo from './images/logo.png'; // relative path to image 
function Header() {
  
    const [initialState,dispatch] = useStateValue();
  //  {console.log(initialState.basket.length);}
    return (
     <div>
        <div className='navbar'>
   <nav class="navbar navbar-expand-lg navbar-light container">
  <Link class="navbar-brand " to="/"><img src={logo} alt="sorry"/></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
    <ul class="navbar-nav ">
      <li class="nav-item active">
  <Link  to="/login" class="nav-link px-4">Login </Link>
      </li>
      <li class="nav-item">
      <Link  to="/register" class="nav-link px-4">Register</Link>
      </li>
      <li class="nav-item ">
        <Link to="/checkout" class="nav-link px-4">  <ShoppingBasketIcon  />   <span className="header__optionLineTwo  header__basketCount">{initialState.basket?.length}</span></Link>
      </li>
    </ul>
  </div>

</nav>

    </ div>
     </div>
    )
}

export default Header;
