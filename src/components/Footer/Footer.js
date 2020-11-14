import React from 'react';
import Lining from '../Lining/Lining';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import './Footer.scss';
import './Footer.responsive.scss';

function Footer() {
	return (
		<section className='footer'>
			<Lining />

			<div className='footer__top'>
				<div className='footer__top__description'>
					<img
						src='https://img.icons8.com/dusk/64/000000/huawei-logo.png'
						alt='company logo'
					/>

					<p>
						Hope Ukraine is the U.S. non-profit orgnization that is funded
						by the generous gifts of our donors in the US and around the
						globe.
					</p>
				</div>

				<div className='footer__top__contact'>
					<h3>Contact</h3>
					<address>
						Bilhorod-Dnistrovskyi, Ukraine <br />
						<a href='mailto:vo.ko.gm@gmail.com'>
							vo.ko.gm@gmail.com
						</a>{' '}
						<br />
						<a href='tel:+380 (96) 427-42-61'>+380 (96) 427-42-61</a>
					</address>
				</div>
			</div>

			<div className='footer__bottom'>
				<p>
					&copy; 2020 Copyright:{' '}
					<span className='footer__bottom--bold'>Hope Ukraine</span>
				</p>

				<div className='footer__bottom--socialLinks'>
					<a
						href='https://www.facebook.com/'
						target='_blank'
						rel='noreferrer'
					>
						<FacebookIcon className='facebook' />
					</a>

					<a href='https://twitter.com/' target='_blank' rel='noreferrer'>
						<TwitterIcon className='twitter' />
					</a>

					<a
						href='https://instagram.com/'
						target='_blank'
						rel='noreferrer'
					>
						<InstagramIcon className='instagram' />
					</a>
				</div>
			</div>
		</section>
	);
}

export default Footer;
