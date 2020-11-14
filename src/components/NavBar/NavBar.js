import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../../assets/icons8-huawei-logo-min.svg';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import './NavBar.scss';
import './NavBar.responsive.scss';

function NavBar() {
	return (
		<nav className='navBar'>
			<div className='navBar__logo'>
				<Link to='home'>
					<img src={BrandLogo} alt='brand logo' />
				</Link>
			</div>

			<div className='navBar__links'>
				<ul>
					<Link to='/about'>
						<li className='navBar__link--bold'>About</li>
					</Link>

					<Link to='/projects'>
						<li className='navBar__link--icon'>
							Projects <ArrowDropDownIcon />
						</li>
					</Link>

					<Link to='/news'>
						<li>News</li>
					</Link>

					<Link to='volunteers'>
						<li>Volunteers</li>
					</Link>

					<Link to='contact'>
						<li>Contact</li>
					</Link>

					<Link to='/donate'>
						<li className='navBar__link--yellowBtn'>Donate</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;
