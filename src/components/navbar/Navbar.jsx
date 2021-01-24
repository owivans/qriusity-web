import React from 'react';

import logo from '../../img/logo.svg';
import './style.scss';

const Navbar = ({history = {}, location = {}}) => {
  const { pathname } = location;
  const { push } = history;
	return (
		<div className='navbar'>
			<img className='navbar__logo' src={logo} alt="logo"/>
      {pathname === '/finish' ?
        <div
          onClick={() => push('/')}
          className='action'>New Quiz
        </div> : null }
		</div>
	);
};

export default Navbar;
