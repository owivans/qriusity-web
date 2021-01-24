import React from 'react';

import logo from '../../img/logo.svg';
import './style.scss';

const Navbar = () => {
	return (
		<div className='navbar'>
			<img className='navbar__logo' src={logo} alt="logo"/>
		</div>
	);
};

export default Navbar;