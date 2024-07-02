import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import mt from "./assets/Images/mt.png";
import Carousel from "./testifyCarousel";
import Typewriter from "../Type";
import { TypeAnimation } from "react-type-animation";



// Data
import { categoriesData } from "./assets/Data/categoriesData";
import { tutorData } from "./assets/Data/tutorData";

const Home = () => {
  const history = useHistory();
  const handleButtonClick = () => {
    history.push("/courses");
  };

  const handleSignUp = () => {
    history.push("/signup");
  };

  return (
    <>
      <div>
        <div className="heroSection">
          <div className="section1">
            <div className="title">
              <TypeAnimation
                  sequence={[
                    "Fastest and Easiest way", 
                    1000, // Waits 1s
                    "to learn online.", 
                    1000, // Waits 1s
                    "Start your Learning today",
                   
                  ]}
                  cursor={true}
                  repeat={Infinity}
                />
            </div>
            <div className="title">
              {/* <span className="way" style={{ color: "#ffff00" }}>
                <Typewriter text="to learn online." delay={400} />
              </span> */}
            </div>
            <div className="text" style={{ color: "#ffff00" }}>
              <Typewriter
                text="Learn from our best tutors around the world in the easiest way"
                delay={200}
              />
              .
            </div>
            <div
              className="btn"
              style={{ color: "#ffff00" }}
              onClick={handleSignUp}
            >
              Join for Free
            </div>
          </div>
          <div className="section2">
            <div className="bg" />
          </div>
        </div>
        <div className="pace">
          <div className="paceText">
            <img src={mt} alt="img" className="mt" />
            <p>
              Learning at your own pace and convenience is what we give to our
              students. you can't afford to miss the packages we have for you.
            </p>
          </div>
        </div>
        <div className="collection">
          <h1 className="categories ">Our Categories</h1>
          <div className="courseList">
            {categoriesData.map((items) => {
              return <Categories {...items} key={items.id} />;
            })}
          </div>
          <button
            onClick={handleButtonClick}
            className="btn_more"
            value="button"
          >
            More
          </button>
        </div>
        <div className="tutor">
          <h1 className="tutors ">Our Tutors</h1>
          <div className="courseList">
            {tutorData.map((items) => {
              return <Tutor {...items} key={items.id} />;
            })}
          </div>
        </div>

        {/* testimonial section */}
        <Carousel />
        <div className="news_letter">
          <p className="news">Subscribe to our newsletter</p>
          <input type="text" placeholder="Enter your email" className="field" />
          <button className="newsbtn" value="button">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

const Categories = ({ img, title, description, price }) => {
  return (
    <>
      <div className="latest">
        <div className="cateImg">
          <img src={img} width="100%" height="100%" alt="img" />
        </div>
        <div className="textCont">
          <p>{title}</p>
          <h1>{description}</h1>
          <h6>{price}</h6>
        </div>
      </div>
    </>
  );
};

const Tutor = ({ img, title, description }) => {
  return (
    <>
      <div className="latest">
        <div className="cateImg">
          <img src={img} width="100%" height="100%" alt="img" />
        </div>
        <div className="textCont">
          <p>{title}</p>
          <h1>{description}</h1>
        </div>
      </div>
    </>
  );
};

// import React from "react";
// import { useRef } from "react";
// import {FaFacebook, FaTwitter,FaGithub} from "react-icons/fa";
// import "./main.css"
// import profile from "./Img/profile.jpg"
// import About from "./About";

// // import { useEffect, useRef } from 'react';
// // import { useLocation } from "react-router-dom";
// // import {FaFacebook, FaTwitter,FaGithub} from "react-icons/fa";
// // import "./main.css"
// // import profile from "./Img/profile.jpg"
// // import About from "./About";

// // function HomePage() {
// //   const aboutRef = useRef(null);
// //   let location = useLocation();

// //   useEffect(() => {
// //     if (location.pathname === '/about') {
// //       aboutRef.current.scrollIntoView({ behavior: 'smooth' });
// //     }
// //   }, [location]);

// //   return (
// //     <div>
// //       <nav>
// //         <a href="/about">About</a>
// //       </nav>
// //       <div>
// //       <section className="home-name">
// //             <h1>Hi all, I'm Ayinla Johnson <img src={profile} alt="avatar" className="profile-pic" /></h1>
// //             <h1 className="skills">
// //             Physicist || Frontend-Developer || UI/UX Designer || Python ||
// //             Project manager || Mentor || Virtual Assistance || follow me for more details on my social handles below.
// //             </h1>
// //             <div className="social">
// //                 <a className="fb" href="https://web.facebook.com/"><span><FaFacebook size={20} /></span></a>
// //                 <a className="tw" href="www.twitter.com"><span><FaTwitter size={20} /></span></a>
// //                 <a className="gh" href="https://github.com/"><span><FaGithub size={20} /></span></a>
// //             </div>
// //             <div>
// //                 <button className="btn" value="button"> Contact Me</button>
// //                 <button className="btn1" value="button"> See my resume</button>
// //             </div>
// //             <About/>
// //        </section>
// //       </div>
// //       <div ref={aboutRef}>
// //                 <h3>I'm, multi-talented human in wide range of development and design disciplines.
// //                     You can also called me a poroduct desiger, experience designer, interaction, UI,UX or by any other market defined function-title.
// //                 </h3>
// //       </div>
// //     </div>
// //   );
// // }
// // export default HomePage;
// const Home = ({sectionRef}) => {
//     return(
//        <section className="home-name">
//             <h1>Hi all, I'm Ayinla Johnson <img src={profile} alt="avatar" className="profile-pic" /></h1>
//             <h1 className="skills">
//             Physicist || Frontend-Developer || UI/UX Designer || Python ||
//             Project manager || Mentor || Virtual Assistance || follow me for more details on my social handles below.
//             </h1>
//             <div className="social">
//                 <a className="fb" href="https://web.facebook.com/"><span><FaFacebook size={20} /></span></a>
//                 <a className="tw" href="www.twitter.com"><span><FaTwitter size={20} /></span></a>
//                 <a className="gh" href="https://github.com/"><span><FaGithub size={20} /></span></a>
//             </div>
//             <div>
//                 <button className="btn" value="button"> Contact Me</button>
//                 <button className="btn1" value="button"> See my resume</button>
//             </div>
//             <About/>
//        </section>
//     )
// }
// export default Home
