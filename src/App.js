import Lining from './components/Lining/Lining';
import NavBar from './components/NavBar/NavBar';
import Homepage from './components/Homepage/Homepage';
import Objectives from './components/Objectives/Objectives';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

function App() {
	return (
		<div className='app'>
			<Lining />

			<Router>
				<NavBar />
			</Router>

			<Homepage />
			<Objectives />
			<Team />
			<Footer />
		</div>
	);
}

export default App;
