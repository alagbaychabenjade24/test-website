import React from 'react';
import englishAcademy from '../../assets/teaching-min.svg';
import educationalOppurtunity from '../../assets/work-space-min.svg';

import './Objectives.scss';

function Objectives() {
	return (
		<section className='objectives'>
			<h1 className='objectives__title'>OBJECTIVES</h1>

			<div className='objectives__linings'>
				<hr className='top' />
				<hr className='bottom' />
			</div>

			<p className='objectives__subtitle'>
				We believe that Internet is a great equalizer and in its depth there
				are thousands of opportunities for our well-trained English-speaking
				graduates. All services will be available at no charge. We are
				certain, that with education oppurtunities come, and with
				oppurtunities comes HOPE!
			</p>

			<div className='objectives__services'>
				<div className='objectives__service'>
					<img src={englishAcademy} alt='free english lesson' />

					<h2>American English Academy</h2>

					<p>
						Is an educational project, that provides free English lessons
						to the most vulnerable categories of children that come from
						the low-income families, children with disabilities, etc.
					</p>
				</div>

				<div className='objectives__service'>
					<img
						src={educationalOppurtunity}
						alt='educational oppurtunities'
					/>

					<h2>Educational Oppurtunity Center</h2>

					<p>
						Presents children with multiple ways to earn and operate a
						business through IT courses, drills and workshops.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Objectives;
