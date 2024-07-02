import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Tutor.css";
import learner from "./assets/Images/learner.jpg";
import reward from "./assets/Images/reward.jpg";
import teach from "./assets/Images/teach.jpg";
import test from "./assets/Images/test.png";
import CategoryContent from "./filter";
import Footer from "./Footer";
// import ReactPlayer from 'react-player'

const Tutor = () => {
  const [activeStart, setActiveStart] = useState("test");

  useEffect(() => {
    setActiveStart("test");
  }, []);

  // Function to handle filter button click
  const handleStartClick = (start) => {
    setActiveStart(start);
  };

  const signup = useHistory();
  const handleSignUp = () => {
    signup.push("/signup");
  };

  return (
    <section>
      <div className="tutorSection">
        <div className="tutorBanner">
          <div className="tutorText">
            Join our team at MtLearn and help shape the future of education by
            sharing knowledge.
          </div>
          <div
            className="res-btn"
            style={{ color: "#ffff00" }}
            onClick={handleSignUp}
          >
            Join Us for Free
          </div>
        </div>
      </div>
      <div>
        <h1 className="res">Reasons to Join Us</h1>
      </div>
      <div className="res-group">
        <div className="res-row">
          <div className="res-col">
            <img src={learner} alt="learn-img" className="learn-img" />
            <h3>Teach your way</h3>
            <p className="res-des">
              Publish the course you want, in the way you want, and always have
              control of your content.
            </p>
          </div>
          <div className="res-col">
            <img src={teach} alt="reward-img" className="learn-img" />
            <h3>Inspire learners</h3>
            <p className="res-des">
              Teach what you know and help learners explore their interests,
              gain new skills, and advance their careers.
            </p>
          </div>
          <div className="res-col">
            <img src={reward} alt="teach-img" className="learn-img" />
            <h3>Get rewarded</h3>
            <p className="res-des">
              Expand your professional network, build your expertise, and earn
              money on each paid enrollment.
            </p>
          </div>
        </div>
      </div>

      {/* video section */}
      <div className="video-section">
        <div className="video-sub">
          {/* <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' /> */}
          <img src={test} alt="vid" className="vimg" />
          <div className="">
            <span className="vihead">A day in the life of a tutor</span>
            <p className="vitxt">
              {" "}
              Being a tutor is a demanding but incredibly fulfilling job. Each
              day is filled with opportunities to make a difference in students'
              lives, helping them overcome challenges and achieve their academic
              goals.
            </p>
          </div>
        </div>
      </div>

      {/* end of video section */}

      {/* Process to start */}
      <div>
        <h2 className="start">How to Start</h2>
        <div className="btn-filter">
          <button
            className={activeStart === "test" ? "btn-test active" : "btn-test"}
            onClick={() => handleStartClick("test")}
          >
            Test
          </button>
          <button
            className={activeStart === "plan" ? "btn-plan active" : "btn-plan"}
            onClick={() => handleStartClick("plan")}
          >
            Plan
          </button>
          <button
            className={
              activeStart === "record" ? "btn-record active" : "btn-record"
            }
            onClick={() => handleStartClick("record")}
          >
            Record
          </button>
          <button
            className={
              activeStart === "launch" ? "btn-launch active" : "btn-launch"
            }
            onClick={() => handleStartClick("launch")}
          >
            Launch
          </button>
        </div>
        <CategoryContent startCategory={activeStart} />
      </div>

      {/* Have you got */}
      <div className="got-section">
        <div className="got-text">
          <h2>Have you got what it takes to become a tutor?</h2>
        </div>
        <p
          className="filter-text"
          style={{ color: "#000", textAlign: "justify", marginTop: "1rem" }}
        >
          The passion and knowledge. Then choose a promising topic with the help
          of our Marketplace Insights tool. The way that you teach — what you
          bring to it — is up to you. How we help you We offer plenty of
          resources on how to create your first course. And, our instructor
          dashboard and curriculum pages help keep you organized. The passion
          and knowledge. Then choose a promising topic with the help of our
          Marketplace Insights tool. The way that you teach — what you bring to
          it — is up to you. How we help you We offer plenty of resources on how
          to create your first course. And, our instructor dashboard and
          curriculum pages help keep you organized.
        </p>
        <button
          className="res-btn"
          style={{
            color: "#ffff00",
            margin: "auto",
            alignItems: "center",
            marginTop: "2.3rem",
          }}
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>

      <Footer />
    </section>
  );
};

export default Tutor;
