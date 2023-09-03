import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from './Stateprovider';
import { auth } from './firebase';
import logo from './images/logo/amazon_PNG11.png'



function Header() {

  const [{basket, user}, dispatch]= useStateValue();

  const handleAuthentication =() => {
    if (user) {
      auth.signOut()
    }
  }
  return (
    <div className='header'>
      <Link to="/">
      <img className='header__logo' src={logo}alt=""/>
      </Link>
        
      <div className='header__search'>
          <input className='header__searchInput' type="text" /> 
          <SearchIcon className='header__searchIcon'/>
      </div>
        
      <div className='header__nav'>
        <Link to={!user && "/login"}>
          <div onClick= {handleAuthentication} className='header__option'>
            <span className='header__optionlineone'> Hello {!user?'Guest':user.email}</span>
            <span className='header__optionlinetwo'>{user ? 'Sign Out' : "Sign In"}</span>
          </div>
        </Link>

        <Link to={"/orders"}>
          <div className='header__option'>
            <span className='header__optionlineone'>Returns</span>
            <span className='header__optionlinetwo'>& Orders</span>
            
          </div>
        </Link>
        
        
        <div className='header__option'>
          <span className='header__optionlineone'>Your</span>
          <span className='header__optionlinetwo'>Prime</span>
          
        </div>


        <Link to="/checkout">
          <div className='header__optionbasket'>
          <ShoppingBasketIcon />
          <span className='header__optionlinetwo header__basketcount'>{basket?.length}</span>
          
          </div> 

        </Link>
                
        
      </div>
    </div>
  )
}

export default Header