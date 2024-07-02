import React, { useState } from "react";
// import { webDat } from "./ProgData/WebData";
import "./dev.css";
import {FaYoutube } from "react-icons/fa";
import Footer from "../../../../Footer";
import DevCaousel from "./../Devcarousel";

const Web = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowAll = () => {
    setShowMore(!showMore);
  };

  const [clickedItems, setClickedItems] = useState([]);

  const handleClick = (index) => {
    // Create a copy of the clickedItems array
    const newClickedItems = [...clickedItems];
    // Toggle the clicked state for the clicked item
    newClickedItems[index] = !newClickedItems[index];
    // Update the state with the new array
    setClickedItems(newClickedItems);
  };
  return (
    <div className="ty">
      <div className="webSection">
        <div className="Section">
          <div className="courseTitle" style={{ color: "#fff000",textAlign:"justify" }}>
            Web Development
          </div>
          <div
            className="courseText"
            style={{ color: "#fff", paddingTop: "0.7rem", paddingLeft:"2rem"}}
          >
            Learn all you need to know to become a web developer
          </div>
        </div>
      </div>
      {/* {webDat.map((card, index) => (
        <div key={index} className="courset">
          <iframe
            className="vid"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cwBxMU_YtaY"
            title="Top 10 Programmer TV Series"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p className="devTitle">{card.title}</p>
          <h2 className="devDes">{card.description}</h2>
          <h5 className="devPrice">{card.price}</h5>
          <h5 className="devRating">
            {card.rating}
            <span style={{ color: " #fff000", paddingLeft: "0.4rem" }}>
              <FaStar size={20} />
            </span>
            <span style={{ color: " #fff000", paddingLeft: "0.4rem" }}>
              <FaStar size={20} />
            </span>
            <span style={{ color: " #fff000", paddingLeft: "0.4rem" }}>
              <FaStar size={20} />
            </span>
            <span style={{ color: " #fff000", paddingLeft: "0.4rem" }}>
              <FaStar size={20} />
            </span>
            <span style={{ color: " #fff000", paddingLeft: "0.4rem" }}>
              <FaStar size={20} />
            </span>
          </h5>
        </div>
      ))} */}
      <div className="container">
        <h1 className="head">What you'll learn</h1>
        <div>
          <li>
            Understand the basics of structuring web content using HTML tags.
          </li>
          <li>
            Learn how to style and design web pages, including layouts, fonts
            etc.
          </li>
          <li>
            Explore the fundamentals of JavaScript to add interactivity to web
            pages.
          </li>
          <li>
            Dive into popular frontend frameworks to build powerful, responsive,
            and interactive user interfaces
          </li>
          <li>
            Gain knowledge about server-side technologies to handle data,
            requests, and application logic.
          </li>
          {showMore && (
            <>
              <li>
                Learn how to manage and manipulate data in databases to create
                and maintain dynamic web applications.
              </li>
              <li>
                Understand version control systems to effectively manage and
                track changes in code, facilitating collaboration.
              </li>
              <li>
                Master the art of designing websites that adapt seamlessly to
                various screen sizes and devices.
              </li>
              <li>
                Gain insights into web security principles and best practices to
                protect websites from potential attacks.
              </li>
              <li>
                Gain insights into web security principles and best practices to
                protect websites from potential threats and attacks.
              </li>
              <li>
                Learn the process of deploying web applications on servers or
                cloud platforms for public access.
              </li>
            </>
          )}

          <button
            onClick={toggleShowAll}
            style={{ fontSize: "1rem", cursor: "pointer", color: "#37012a" }}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
      {/* <a href="www.google.com">Hello</a> */}
      {/* Course Content */}
      <div>
        <h1 className="head2">Course Content</h1>
        <span className="num">
          60 section .200 lectures .40h 50m total length
        </span>
        <div className="container2">
          <div>
            <li
              style={{ color: clickedItems[0] ? "red" : "black" }}
              onClick={() => handleClick(0)}
            >
              <FaYoutube className="ic" />
              Understand the basics of structuring web content using HTML tags.
            </li>
            <li
              style={{ color: clickedItems[1] ? "red" : "black" }}
              onClick={() => handleClick(1)}
            >
              <FaYoutube className="ic" />
              Learn how to style and design web pages, including layouts, fonts
              etc.
            </li>
            <li
              style={{ color: clickedItems[2] ? "red" : "black" }}
              onClick={() => handleClick(2)}
            >
              <FaYoutube className="ic" />
              Explore the fundamentals of JavaScript to add interactivity to web
              pages.
            </li>
            <li
              style={{ color: clickedItems[3] ? "red" : "black" }}
              onClick={() => handleClick(3)}
            >
              <FaYoutube className="ic" />
              Explore the fundamentals of JavaScript to add interactivity to web
              pages.
            </li>
            <li
              style={{ color: clickedItems[4] ? "red" : "black" }}
              onClick={() => handleClick(4)}
            >
              <FaYoutube className="ic" />
              Explore the fundamentals of JavaScript to add interactivity to web
              pages.
            </li>
            <li
              style={{ color: clickedItems[5] ? "red" : "black" }}
              onClick={() => handleClick(5)}
            >
              <FaYoutube className="ic" />
              Explore the fundamentals of JavaScript to add interactivity to web
              pages.
            </li>
          </div>
        </div>
        <div>
          <h1 className="head3">Requirements</h1>
          <div className="req">
            <li>
              {" "}
              No programming experience needed- We'll teach you everything you
              need to know{" "}
            </li>
            <li> A Mac or PC computer with access to the internet</li>
            <li>
              {" "}
              No paid software is required. We'll teach you how to use Vscode
            </li>
            <li>
              We'll walk you through, step-by-step how to get all the software
              installed and set up
            </li>
          </div>
        </div>
        <div>
          <div>
            <h1 className="head4">Sign Up today and look forward to:</h1>
            <ol className="sign-list">
              <li>Video lectures</li>
              <li>Code Challenges and Exercises</li>
              <li>Fully Fledged Projects</li>
              <li>Quizes</li>
              <li>programming Resources and Cheatsheets</li>
              <li>Downloads</li>
            </ol>
          </div>
          {/* who is this course is for */}
          <div className="container3">
            <h1 className="head3">Who this course is for:</h1>
            <div className="req">
              <li>
                If you want to learn to code from scratch through building fun
                and useful Projects, then take this course.{" "}
              </li>
              <li>
                If you want to start your own startup by building your own
                websites and web apps.
              </li>
              <li>
                If you are a complete beginner then this course will be
                everything you need to become a Web developer.
              </li>
              <li>
                If you are a seasoned programmer wanting to switch to Web
                development then this is the quickest way. Learn through the
                coding Projects
              </li>
              <li>
                If you are an intermediate Web developer then you know the
                coding Challenges will help you level up
              </li>
              {showMore && (
                <>
                  <li>
                    If you are a complete beginner then this course will be
                    everything you need to become a Web developer.
                  </li>
                  <li>
                    If you are a seasoned programmer wanting to switch to Web
                    development then this is the quickest way. Learn through the
                    coding Projects
                  </li>
                  <li>
                    If you are an intermediate Web developer then you know the
                    coding Challenges will help you level up
                  </li>
                </>
              )}
            </div>
          </div>
        </div>
        {/* more courses */}
        <div>
          <h1 className="head4">
            More Courses by{" "}
            <span style={{ color: "#fff000" }}>Emmanuel John</span>
          </h1>
          <DevCaousel />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Web;
