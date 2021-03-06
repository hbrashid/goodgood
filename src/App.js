import * as React from 'react';
// import GGlogo from './GGlogo.jpeg';
// import Button from '@mui/material/Button';
import './App.css';
import ButtonAppBar from './navBar';
// import SimplePaper from './bubbiePaper';
// import GoodAbout from './goodGoodAbout';
// import bubbiePic from './bubbiePic.jpg';
import BubbieCard from './bubbieCard';
import MicahCard from './micahCard';
import GrantCard from './grantCard';
import StephenCard from './stephenCard';
import GarrettCard from './garrettCard';
import MattCard from './mattCard';
import GGCard from './goodGoodAbout';
import Typography from '@mui/material/Typography';
import logoImage from './logoImage.png';
import VideoIntro from './VideoIntro.mov'

function App() {
  return (
    
    <main>
        <ButtonAppBar />
        

      <div className="header">
        
        <video id="backgroundVideo" autoPlay muted poster={logoImage}><source src={VideoIntro} type="video/mp4"></source></video>
      <a href="#about">
      <div className="scroll-down"></div>
      </a>
      </div>

      <div className="about">
          <div className="aboutContent">
          

          </div>
          {/* <div className="aboutImage">
          </div> */}


      </div>

      <div id ="about" className="aboutParagraph">
        <GGCard />
      {/* <p>Good Good started back in 2020. The world was in chaos, but these boys had one thing in mind, Golf. They joined forces in Dallas, TX and began to release unreal golf content. With the art and camera direction of Colin and Max, they have taken the golf game by storm. The squad consists of Bubbie, Micah, Grant, Stephen, Garrett, and Matt.</p> */}

      </div>

      
      {/* <div className="bubbie">
      <h1 style={{textAlign:"center", fontStyle:"oblique"}}>Bubbie Golf</h1>
      <img className="bubbiePic" src={bubbiePic} alt="Pic of Bubbie" />
      <SimplePaper /> */}
      {/* <p className="bubbieContent">Bubbie Golf (AKA Tom Broders) is a member of Good Good and a member of Team Stumps. He's a self-proclaimed Chicago boy. He is known for his tings and joints, along with his Bubbie draw and crushing tee shots. One of the most positive group members, Bubbie aims to keep the good thoughts flowing.</p> */}
      {/* <h2 style={{textAlign:"center"}}>Socials</h2>
      <div className="bubbieSocials">
        <Button variant="outlined" style={{margin:"0 7%"}} href="https://www.youtube.com/c/BubbieGolf">
        Youtube
      </Button> 
     <Button variant="outlined" href="https://www.instagram.com/bubbiegolf/?hl=en">
        Instagram
      </Button> 
      </div> */}

      <Typography variant="h2" textAlign="center" marginBottom="3%">Good Good Squad</Typography>
      
      <div className="squadCards">
        <BubbieCard />
        <MicahCard />
        <GrantCard />
        <StephenCard />
        <GarrettCard />
        <MattCard />
      </div>
      


      













      </main>

  
  );
}

export default App;
