import React from 'react';

import homepageBG from '../../assets/homepage__img-min.png';

import './Homepage.scss';
import './Homepage.responsive.scss';

function Homepage() {
	return (
		<section className='homepage'>
			<div className='homepage__content'>
				<h1>
					<span className='homepage__content__colored'>About</span> Us
				</h1>

				<p>
					Hope Ukraine is a nonprofit organization established in the
					United States that exists to provide hope for orphans and
					children in need from all over Ukraine. The initiative is based
					on the beliefthat by providing orphans with an ability to speak
					English, they will have a much greater oppurtunity to succeed as
					they age out of the Orphanage system. That's why, we are
					dedicated to several objectives.
				</p>
			</div>

			<div className='homepage__img'>
				<img src={homepageBG} alt='one adult and one child playing lego' />
			</div>
		</section>
	);
}

export default Homepage;
