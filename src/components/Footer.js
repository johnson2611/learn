import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
 
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
  const timer = setInterval(() => {
    setYear(new Date().getFullYear()); 
  }, 1000 * 60 * 60 * 24);
  return() => clearInterval(timer);
  }, []);

  const history = useHistory();
  const homeButtonClick = () =>{
    history.push('/');
  }
  return (
    <>
      <div className="footer">
        <div className="footer-title" onClick={homeButtonClick}>
          <span className="mT">Mt</span>
          <span className="learn">Learn</span>
        </div>
        <div className="footer-head">
          <div style={{ padding: "0 50px 0 0" }}>
            <span className="Abt">About</span>
            <h3 className="about"
              style={{
                fontSize: "14px",
                fontWeight: "lighter",
                padding: "0 2px 0 0",
              }}
            >
              Learn more about us
            </h3>
          </div>
          <div style={{ padding: "0 2px 0 10px" }}>
            <span className="Car">Careers</span>
            <h3 className="career"
              style={{
                fontSize: "14px",
                fontWeight: "lighter",
                padding: "0 24px 0 0",
              }}
            >
              Check out the latest jobs opportunities at MtLearn
            </h3>
          </div>
          <div style={{ padding: "0 2px 0 0" }}>
            <span className="Fol">Follow Us</span>
            <h3 className="follow"
              style={{
                fontSize: "14px",
                fontWeight: "lighter",
                padding: "0 24px 0 0",
                justifyContent: "space-around",
              }}
            >
              <ul>
                <ol>Facebook</ol>
                <ol>Instagram</ol>
                <ol>Twitter</ol>
                <ol>Linkedin</ol>
              </ul>
            </h3>
          </div>
          <div style={{ padding: "0 30px 0 50px" }}>
            <span className="con">Contact Us</span>
            <h3 className="contact"
              style={{ 
                fontSize: "14px",
                fontWeight: "lighter",
                padding: "0 21px 0 3px",
              }}
            >
              We'll love to hear from you
            </h3>
          </div>
        </div>
      </div>
      <div style={{ background: "#37012a" }} className="footer-bot">
        <div className="right">
          <span
            style={{
              color: "#fff",
            }}
          >
            &copy;
          </span>
          <div>
            <span style={{ color: "#fff", paddingLeft: "0.8rem" }}>{year}</span>
            <span style={{ color: "#fff", paddingLeft: "0.8rem" }}>Mt</span>
            <span style={{ color: "#ffff00" }}>Learn.</span>
            {/* <span style={{ color: "#fff", paddingLeft: "0rem", fontSize: "1rem"}}>All rights are reserved</span> */}
          </div>
          <div className="social" id="social">
            <span style={{ color: "#fff", paddingLeft: "0.4rem" }}>
              <FaFacebook size={20} />
            </span>
            <span style={{ color: "#fff", paddingLeft: "0.4rem" }}>
              <FaInstagram size={20}/>
            </span>
            <span style={{ color: "#fff", paddingLeft: "0.4rem" }}>
              <FaTwitter size={20}/>
            </span>
            <span style={{ color: "#fff", paddingLeft: "0.4rem" }}>
              <FaLinkedin size={20}/>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
