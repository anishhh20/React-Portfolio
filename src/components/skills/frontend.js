import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Tilt from "react-parallax-tilt";

const Frontend = () => {
  return (
    <Tilt perspective={5000} scale={1} gyroscope={true} transitionSpeed={7000}>
      <div className="skills__content" data-aos="flip-left">
        <h3 className="skills__title">Frontend Developer</h3>

        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <CircularProgressbar value="95" className="circle-progress" />

              <div>
                <h3 className="skills__name">React JS</h3>
                <span className="skills__level"></span>
              </div>
            </div>
            <div className="skills__data">
              <CircularProgressbar value="90" className="circle-progress" />

              <div>
                <h3 className="skills__name">React Native</h3>
                <span className="skills__level"></span>
              </div>
            </div>
            <div className="skills__data">
              <CircularProgressbar value="70" className="circle-progress" />

              <div>
                <h3 className="skills__name">Next JS</h3>
                <span className="skills__level"></span>
              </div>
            </div>

            <div className="skills__data">
              <CircularProgressbar value="85" className="circle-progress" />

              <div>
                <h3 className="skills__name">Web Development</h3>
                <span className="skills__level"></span>
              </div>
            </div>

            <div className="skills__data">
              <CircularProgressbar value="65" className="circle-progress" />

              <div>
                <h3 className="skills__name">Bootstrap</h3>
                <span className="skills__level"></span>
              </div>
            </div>

            <div className="skills__data">
              <CircularProgressbar value="75" className="circle-progress" />

              <div>
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__level"></span>
              </div>
            </div>

            <div className="skills__data">
              <CircularProgressbar value="55" className="circle-progress" />

              <div>
                <h3 className="skills__name">Sass</h3>
                <span className="skills__level"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default Frontend;
