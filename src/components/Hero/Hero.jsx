import React from "react";
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from "react-countup";
// import {motion} from "framer-motion";
function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle"/>
              <h1>
              Discover <br/>
              Your Favourite <br/>Properties
              </h1>
            </div>

            <div className="flexColStart hero-des">
                <span className="secondaryText">Find the properties that fulfill your needs.</span>
                <span className="secondaryText">We are committed to locating the ideal property for your needs.</span>
            </div>

            <div className="flexCenter search-bar">
              <HiLocationMarker color="var(--blue)" size={25}/>
              <input type="text"/>
              <button className="button">Search</button>
            </div>

            <div className="flexCenter stats"> 
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8800} end={9000} duration={4}/> 
                <span>+</span>
                </span>
                <span className="secondaryText">Premium Products</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={1950} end={2000} duration={4}/> 
                <span>+</span>
                </span>
                <span className="secondaryText">Happy Customers</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp end={28}/> 
                <span>+</span>
                </span>
                <span className="secondaryText">Awards Won</span>
              </div>
            </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
