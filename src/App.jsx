import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Home from './components/Home';
import RequestPage from './Pages/RequestPage';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
   {/* <RequestPage/> */}
   
    <Router>
      <div className="App">
        <Header />
        <main style={{marginTop:10}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
     <Footer />
      </div>
    </Router>
 
    </div>
  );
}



export default App;
