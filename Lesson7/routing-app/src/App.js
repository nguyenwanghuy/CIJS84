import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/index.jsx';
import Posts from './pages/Posts/index.jsx';
import About from './pages/About/index.jsx'; // do sửa file nên bị conflig và nên viết rõ tên file 
import Contact from './pages/Contact/Index.jsx';
import {Routes, Route} from 'react-router-dom';
import Navi from './layouts/Navi';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Header/>
      <Routes>
				<Route path="/" element={<Home/>} />
        <Route path='/posts/:blogId' element={<Posts />}></Route>
				<Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
			</Routes>
     <Footer/>
    </div>
  );
}

export default App;
