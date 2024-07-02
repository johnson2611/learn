import React from "react";
import {useHistory} from "react-router-dom";
import test from "./assets/Images/test.png";
import mt from "./assets/Images/mt.png";

const CategoryContent = ({ startCategory }) => {
  const signup = useHistory();
  const handleSignUp = () => {
    signup.push("/signup");
  };
  if (startCategory === "test") {
    return (
      <div className="filter">
        <div className="filter-text">
          <img src={test} alt="img" className="filter-img" />
          <p>
            Hello passion and knowledge. Then choose a promising topic with the
            help of our Marketplace Insights tool. The way that you teach — what
            you bring to it — is up to you. How we help you We offer plenty of
            resources on how to create your first course. And, our instructor
            dashboard and curriculum pages help keep you organized.
            <button className="filter-btn" onClick={handleSignUp}>Journey With Us</button>
          </p>
        </div>
      </div>
    );
  } else if (startCategory === "plan") {
    return (
      <div className="filter">
        <div className="filter-text">
          <img src={mt} alt="img" className="filter-img" />
          <p>
            Your passion and knowledge. Then choose a promising topic with the
            help of our Marketplace Insights tool. The way that you teach — what
            you bring to it — is up to you. How we help you We offer plenty of
            resources on how to create your first course. And, our instructor
            dashboard and curriculum pages help keep you organized.
            <button className="filter-btn" onClick={handleSignUp}>Journey With Us</button>
          </p>
        </div>
      </div>
    );
  } else if (startCategory === "record") {
    return (
      <div className="filter">
        <div className="filter-text">
          <img src={test} alt="img" className="filter-img" />
          <p>
            The passion and knowledge. Then choose a promising topic with the
            help of our Marketplace Insights tool. The way that you teach — what
            you bring to it — is up to you. How we help you We offer plenty of
            resources on how to create your first course. And, our instructor
            dashboard and curriculum pages help keep you organized.
            <button className="filter-btn" onClick={handleSignUp}>Journey With Us</button>
          </p>
        </div>
      </div>
    );
  } else if (startCategory === "launch") {
    return (
      <div className="filter">
        <div className="filter-text">
          <img src={mt} alt="img" className="filter-img" />
          <p>
            My passion and knowledge. Then choose a promising topic with the
            help of our Marketplace Insights tool. The way that you teach — what
            you bring to it — is up to you. How we help you We offer plenty of
            resources on how to create your first course. And, our instructor
            dashboard and curriculum pages help keep you organized.
            <button className="filter-btn" onClick={handleSignUp}>Journey With Us</button>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export default CategoryContent;

// Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
