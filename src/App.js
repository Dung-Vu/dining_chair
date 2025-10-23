import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Brand from './components/Brand/Brand';
import Collection from './components/Collection/Collection';
import Gallery from './components/Gallery/Gallery';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Brand />
      <Collection />
      <Gallery />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
