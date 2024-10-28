import { Link } from 'react-router-dom'
import './homepage.css'
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");



  return (
    <div className="homepage">
    <img src="/orbital.png" alt="" className="orbital" />
    <div className="left">
      <h1>NEON AI</h1>
      <h2>Supercharge your creativity and productivity</h2>
      <h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sint
        dolorem doloribus, architecto dolor.
      </h3>
      <Link to="/dashboard">Get Started</Link>
    </div>
    <div className="right">
      <div className="imgContainer">
        <div className="bgContainer">
          <div className="bg"></div>
        </div>
        <img src="/Orbit-Robot.png" alt="" className="bot" />
        <div className="chat">
          <img
            src={
              typingStatus === "human1"
                ? "/human1.jpeg"
                : typingStatus === "human2"
                ? "/human2.jpeg"
                : "bot.png"
            }
            alt=""
          />
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Human: What your name? ",
              2000,
              () => {
                setTypingStatus("bot");
              },
              "Bot: My Name is Neon AI.",
              2000,
              () => {
                setTypingStatus("human2");
              },
              "Human2: Who Created You?",
              2000,
              () => {
                setTypingStatus("bot");
              },
              "Bot: I am created by Shuaib Ahmad.",
              2000,
              () => {
                setTypingStatus("human1");
              },
            ]}
            wrapper="span"
            repeat={Infinity}
            cursor={true}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
    <div className="terms">
      <img src="/Neon-Ai2.png" alt="" />
      <div className="links">
        <Link to="/">Terms of Service</Link>
        <span>|</span>
        <Link to="/">Privacy Policy</Link>
      </div>
    </div>
  </div>
  )
}

export default Homepage