import React from 'react';
import '../style/header.css';
import {GrHomeRounded, GrContact} from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
        <div className='header-logo'></div>
        <ul className='header-nav-list'>
            <li className='list-elements'><Link to='/homepage' > <GrHomeRounded  />Anasayfa </Link></li>
            <li className='list-elements'><Link to='/contact' > <GrContact  />İletişim </Link></li>
            <li className='list-elements'><Link to='/contact' > <GrContact  />Settings </Link></li>
        </ul>
    </header>
  )
}

export default Header;