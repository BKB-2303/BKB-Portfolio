
import React  from 'react';
import HeaderSection from './components/HeaderSection';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer.jsx';
import Works from './components/Works';
function App() {
 

  return (
    <>
    <div className="bg-stone-900  font-inter ">
    <HeaderSection />
    <div className="max-w-5xl w-11/12 mx-auto">
      
      <Services />
      <Works />
      <About/>
      <Footer />
    </div>
  </div>
  </>
  )
}

export default App
