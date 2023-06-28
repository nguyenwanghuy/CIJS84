import logo from './logo.svg';
import './App.css';

import Navigation from './Layout/Navigation';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Homepage from './pages/Homepage/Homepage';

function App() {
	return (
		<>
			<Navigation />
			<Header />
			<Homepage/>
			<Footer />
		</>
	);
}

export default App;
