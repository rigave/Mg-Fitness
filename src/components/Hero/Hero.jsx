import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_img from "../../assets/hero.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

function Hero() {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <motion.div initial={{ left: mobile ? "178px" : "238px" }} whileInView={{ left: "8px" }} transition={{ ...transition, type: "tween" }}></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolores, iusto delectus soluta ipsa magnam reiciendis,</span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span> expert coach's</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>member joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={30} delay="4" preFix="+" />
            </span>
            <span>fitness program</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">Get started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <img src={hero_img} alt="" className="hero-img" />
      </div>
    </div>
  );
}

export default Hero;
