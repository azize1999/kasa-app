import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AccommodationDetail from './pages/AccommodationDetail/AccommodationDetail';
import NotFound from './pages/NotFound/NotFound';
import MyHeader from './components/Header/MyHeader';
import Footer from './components/footer/MyFooter';
import About from './pages/Apropos/Apropos';



const App = () => {
  return (
    <Router>
      <MyHeader />
      <div className="app">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} /> {}
      <Route path="/accommodation/:id" element={<AccommodationDetail />} />
      <Route path="*" element={<NotFound />} />
      {/* (*=404 )*/}
      </Routes>
      </div>
      <Footer/>
    </Router>
  );
};
export default App;