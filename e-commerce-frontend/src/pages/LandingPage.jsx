import React from 'react'
import CarouselContainer from '../Components/Carousel'
import DumiProducts from '../Components/DumiProducts'
import Products from './Products';
import FooterComponent from './../Components/FooterComponent';
const LandingPage = () => {
  const handleGreeting = () => {
 let txt="Welcome to Alpha Mart";
 let wSpeech =window.speechSynthesis;
 let voice = new SpeechSynthesisUtterance(txt);
wSpeech.speak(voice);
voice.rate=2;
console.log(wSpeech.getVoices());
  };
  return (
    <div>
      <button id="greeting-btn" onClick={handleGreeting}>Click to Announce Greeting</button>
        <CarouselContainer/>
        <h1>Products</h1>
        <DumiProducts/>
        <FooterComponent/>
    </div>
  )
}

export default LandingPage;