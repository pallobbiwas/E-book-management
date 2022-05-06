import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='d-flex flex-column text-start container'>
            <Link to='/home'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/addproducts'>Add product</Link>
            <Link to='/manageproducts'>Manage</Link>
        </div>
    );
};

export default Header;