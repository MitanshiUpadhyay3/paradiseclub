import './App.css';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';

import HomePage from './Pages/HomePage';

import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'

import GalleryPage from './Pages/GalleryPage';
import TouristBlog from './Pages/TeamPage';

function App() {
  return (
    <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/fleet' element={<GalleryPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
       

        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/tourist' element={<TouristBlog/>}/>
          
          
          
          
          
      </Routes>
    <Footer/>
    </BrowserRouter>

  );
}

export default App;
