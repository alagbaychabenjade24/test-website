import React from 'react';
import teamUpperBackground from '../../assets/team-min.png';
import slasha from '../../assets/slasha-min.png';
import lily from '../../assets/lily-min.png';
import valentine from '../../assets/valentine-min.png';
import andrei from '../../assets/andrei-min.png';
import emily from '../../assets/emily-min.png';
import julia from '../../assets/julia-min.png';
import jennifer from '../../assets/jennifer-min.png';
import rachael from '../../assets/rachael-min.png';

import './Team.scss';
import './Team.responsive.scss';

function Team() {
	return (
		<section className='team'>
			<div className='team__upperBackground'>
				<img src={teamUpperBackground} alt='team members' />
			</div>

			<div className='volunteers'>
				<h1>OUR VOLUNTEERS</h1>

				<div className='volunteers__linings'>
					<hr className='top' />
					<hr className='bottom' />
				</div>

				<div className='volunteer'>
					<div className='volunteer__one'>
						<img src={slasha} alt='Slavik and Sasha Rimskiy' />
						<h3>Slavik and Sasha Rimskiy</h3>
						<a href='mailto:outreachwork@gmail.com'>
							outreachwork@gmail.com
						</a>
					</div>

					<div className='volunteer__two'>
						<img src={lily} alt='Lily Tsveklova' />
						<h3>Lily Tsveklova</h3>
						<a href='mailto:outreachwork@gmail.com'>
							lili4ka.tsveklova@gmail.com
						</a>
					</div>

					<div className='volunteer__three'>
						<img src={valentine} alt='Valentine Lupashko' />
						<h3>Valentine Lupashko</h3>
						<a href='mailto:outreachwork@gmail.com'>vo.ko.gm@gmail.com</a>
					</div>

					<div className='volunteer__four'>
						<img src={andrei} alt='Andrei Zelenskiy' />
						<h3>Andrei Zelenskiy</h3>
						<a href='mailto:outreachwork@gmail.com'>
							zelenskyiandrii@gmail.com
						</a>
					</div>

					<div className='volunteer__five'>
						<img src={emily} alt='Emily Logan' />
						<h3>Emily Logan</h3>
						<a href='mailto:outreachwork@gmail.com'>
							emily@cornerstoneemail.cc
						</a>
					</div>

					<div className='volunteer__six'>
						<img src={julia} alt='Julia Logan' />
						<h3>Julia Logan</h3>
						<a href='mailto:outreachwork@gmail.com'>
							jalogan@cstonemail.com
						</a>
					</div>

					<div className='volunteer__seven'>
						<img src={jennifer} alt='Jennifer Logan' />
						<h3>Jennifer Logan</h3>
						<a href='mailto:outreachwork@gmail.com'>
							jlogan@cstonemail.com
						</a>
					</div>

					<div className='volunteer__eight'>
						<img src={rachael} alt='Rachael Logan' />
						<h3>Rachael Logan</h3>
						<a href='mailto:outreachwork@gmail.com'>
							rlogan@cstonemail.com
						</a>
					</div>
				</div>

				<div className='volunteer--btn'>
					<button>I volunteer!</button>
				</div>
			</div>
		</section>
	);
}

export default Team;
