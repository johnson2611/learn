import React from "react";
import "./Courset.css";

// lists of carousel
import Devcarousel from "./Devcarousel";
import DesignCarousel from "./DesignCarousel";
import DataCarousel from "./DataCarousel";
import CyberCarousel from "./CyberCarousel";
import SciEngCarousel from "./SciEngCarousel";

const Courses = () => {
  return (
    <div>
      <div className="courseSection">
        <div className="Section">
          <div className="courseTitle">Our Courses</div>
          <div className="courseText">
            Learn from our best tutors around the world without limits.
          </div>
        </div>
      </div>
      <div className="course">
        <h1>Courses We offer </h1>
        <div className="row">
          <div className="course-col">
            <h3>Beginner</h3>
            <p className="des">
              MtLearn offers an extensive selection of courses designed
              specifically for beginners. Whether you're eager to code your
              first website, learn a new language, explore the basics of
              business, we've got you covered. Each course is crafted with
              beginners in mind, providing a solid foundation to build upon.
            </p>
          </div>
          <div className="course-col">
            <h3>Intermediate</h3>
            <p className="des">
              MtLearn platform is curated to serve leaners who have already
              taken their first steps into the world of knowledge and are ready
              to take the next leap. We believe that learning should be a
              lifelong adventure, and our intermediate-level categories reflect
              this belief.
            </p>
          </div>
          <div className="course-col">
            <h3>Advanced</h3>
            <p className="des">
              MtLearn platform is more than a repository of knowledge, it's your
              springboard to career advancement and personal development.
              Whether you're a seasoned professional looking to level up or an
              aspiring newcomer to a specific field, our advanced categories
              provide avenues or everyone
            </p>
          </div>
        </div>
      </div>
      <Devcarousel />
      <DesignCarousel />
      <DataCarousel />
      <CyberCarousel />
      <SciEngCarousel />
    </div>
  );
};
export default Courses;
