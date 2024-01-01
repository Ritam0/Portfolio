import React from 'react'
import Achivements from './Achivements'
import Academics from './Academics'
import Skills from './Skills'
import About from './About'
import "./Home.css"
import Home_avatar from "./images/Home_avatar.jpg"
import TextTransition, { presets } from 'react-text-transition';


const TEXTS=["Ritam Majumder","DSA problem solver","Competitive programer","Full Stack Web developer"];

const Home = () => {

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
    <div className="main_home">
    <div className="middle_section_home">
    <div className="home_img_avatar">
        <img src={Home_avatar} alt="" />
      </div>
      <div className="Home_oneliner">
        <h1>Hello</h1>
        <h4>I am <h2>
      <TextTransition springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </h2>
        </h4>
        <button>
          About me
        </button>
      </div>
  </div>
    </div>
  
    
    
    </>
  )
}

export default Home
