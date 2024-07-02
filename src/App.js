import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/assets/Data/Courses/Courset";
import Tutorial from "./components/Tutorial";
import Tutor from "./components/Tutor";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scroll";

import SignUp from "./components/SignUp";
import LogIn from "./components/Login";

// sub development section
import Web from "./components/assets/Data/Courses/WebDev/Web";
import Python from "./components/assets/Data/Courses/WebDev/python";
import Java from "./components/assets/Data/Courses/WebDev/java";
import Science from "./components/assets/Data/Courses/WebDev/machine";
import Mobile from "./components/assets/Data/Courses/WebDev/mobile";
import Block from "./components/assets/Data/Courses/WebDev/block";
import Cloud from "./components/assets/Data/Courses/WebDev/devOps"

// sub design section
import Grap from "./components/assets/Data/Courses/Designs/Graphics";
import Arts from "./components/assets/Data/Courses/Designs/DigitalArts";
import User from "./components/assets/Data/Courses/Designs/UI";
// analysis sub section
import Analysis from "./components/assets/Data/Courses/Analytics/PhythonR";
import Database from "./components/assets/Data/Courses/Analytics/SQL"; 
import Business from "./components/assets/Data/Courses/Analytics/Business";
import Visualization from "./components/assets/Data/Courses/Analytics/Visual";

// cyber sub section
import Ethical from "./components/assets/Data/Courses/Cyber/Hacking";
import Network from "./components/assets/Data/Courses/Cyber/Network";
import Troubleshooting from "./components/assets/Data/Courses/Cyber/Support";

// science sub section
import Phy from "./components/assets/Data/Courses/Science/Physics";
import Chem from "./components/assets/Data/Courses/Science/Chemistry";
import Bio from "./components/assets/Data/Courses/Science/Biology";
import Maths from "./components/assets/Data/Courses/Science/Maths";
import Rob from "./components/assets/Data/Courses/Science/Robotics";



const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" components={Home} exact>
            <Home />
            <Footer />
          </Route>
          <Route path="/courses" components={Courses} exact>
            <Courses />
          </Route>
          <Route path="/tutorial" components={Tutorial} exact>
            <Tutorial />
          </Route>
          <Route path="/tutor" components={Tutor} exact>
            <Tutor />
          </Route>
          <Route path="/signup" components={SignUp} exact>
            <SignUp />
          </Route>
          <Route path="/logIn" components={LogIn} exact>
            <LogIn />
          </Route>

          {/* Sub development section */}
          <Route path="/web" components={Web} exact>
            <Web />
          </Route>
          <Route path="/python" components={Python} exact>
            <Python />
          </Route>
          <Route path="/java" components={Java} exact>
            <Java />
          </Route>
          <Route path="/science" components={Science} exact>
            <Science />
          </Route>
          <Route path="/mobile" components={Mobile} exact>
            <Mobile />
          </Route>
          <Route path="/blockchain" components={Block} exact>
            <Block />
          </Route>
          <Route path="/devOps" components={Cloud} exact>
            <Cloud />
          </Route>
          {/* end of development */}

          {/* Sub for graphics section */}
          <Route path="/graphics" components={Grap} exact>
            <Grap />
          </Route>
          <Route path="/digital" components={Arts} exact>
            <Arts />
          </Route>
          <Route path="/ui-ux" components={User} exact>
            <User />
          </Route>
          {/* end of graphics section */}
          {/* Sub for Analysis */}
          <Route path="/analysis" components={Analysis} exact>
            <Analysis />
          </Route>
          <Route path="/sql-database" components={Database} exact>
            <Database />
          </Route>
          <Route path="/business-intelligence" components={Business} exact>
            <Business />
          </Route>
          <Route path="/data-visualization" components={Visualization} exact>
            <Visualization />
          </Route>
          {/* end of sub analysis */}

          {/* Cyber sub Security */}
          <Route path="/cybersecurity" components={Ethical} exact>
            <Ethical />
          </Route>
          <Route path="/network-administration" components={Network} exact>
            <Network />
          </Route>
          <Route path="/support-troubleshooting" components={Troubleshooting} exact>
            <Troubleshooting />
          </Route>
          {/* end of sub security */}

          {/* science  sub section*/}
          <Route path="/physics" components={Phy} exact>
            <Phy/>
          </Route>
          <Route path="/chemistry" components={Chem} exact>
            <Chem/>
          </Route>
          <Route path="/biology" components={Bio} exact>
            <Bio/>
          </Route>
          <Route path="/mathematics" components={Maths} exact>
            <Maths/>
          </Route>
          <Route path="/robotics" components={Rob} exact>
            <Rob/>
          </Route>

          {/* end of science section */}
        </Switch>
      </Router>
    </>
  );
};
export default App;
