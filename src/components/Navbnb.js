// import React from "react";
// import profile from "./img/profile.jpg"

// function navbnb(){
//     return(
//         <nav>
//             <img src={profile} alt="logo" className="nav--logo" />
//         </nav>
//     )
// }
// export default navbnb;
import React , {useEffect, useState} from 'react'
import './index.css';
// import User from './User'
import { Link } from 'react-router-dom';


const Sidebar = () => {
  
  const[show, setShow] = useState(false);

  useEffect(() =>{
    function haandleResize() {
        setShow(window.innerWidth <= 759);
    }
    window.addEventListener('resize', haandleResize);
    haandleResize();
    return ()=>{
        window.removeEventListener('resize', haandleResize);
    };
  }, []);

  return (
       <main className={show ? 'space-toggle' : null}>
            {/* <header className={`header ${show ? 'space-toggle' : null}`}>
                <div className='header-toggle'  onClick={() => setShow(!show)}>
                    <li className="fas fa-bars"></li>
                </div>
            </header> */}
            <aside className={`sidebar ${show ? 'show' : null}`}>
                <header className={`header ${show ? 'space-toggle' : null}`}>
                    <div className='header-toggle'  onClick={() => setShow(!show)}>
                        <li className="fas fa-bars"></li>
                    </div>
                </header>
                <nav className='nav'>
                {/* <User/> */}
                    <div>
                        <Link to ="/" className='nav-logo'>
                            {/* <li className='fas fa-home-alt nav-logo-icon'></li> */}
                            <span className='nav-logo-name'>LOGO</span>
                        </Link>
                        <div className='nav-list' >
                            <Link to ="/Hom" className='nav-link active'>
                                <li className='fas fa-home-alt nav-logo-icon'  style={{fontSize:"18px"}} title='Homepage'></li>
                                <span className='nav-logo-name' >Homepage</span>
                            </Link>
                            <Link to ="/About" className='nav-link' >
                                <li className='fas fa-tachometer-alt nav-link-icon'  style={{fontSize:"18px"}} title='About'></li>
                                <span className='nav-logo-name' >About</span>
                            </Link>
                            <Link to ="/Portfolio" className='nav-link'>
                                <li className="fa-solid fa-music nav-link-icon"  style={{fontSize:"18px"}} title='Skills'></li>
                                <span className='nav-logo-name'>Portfolio</span>
                            </Link>
                            <Link to ="/Skills" className='nav-link'>
                                <li className='fa-brands fa-youtube nav-link-icon' style={{fontSize:"18px"}} title='Portfolio'></li>
                                <span className='nav-logo-name'>Portfolio</span>
                            </Link>
                            <Link to ="/Contact" className='nav-link'>
                                <li className='fa-solid fa-palette nav-link-icon' style={{fontSize:"18px"}} title='Gallery'></li>
                                <span className='nav-logo-name'>Gallery</span>
                            </Link>
                            <Link to ="/Favourite" className='nav-link'>
                                <li className='fa-solid fa-heart nav-link-icon' style={{fontSize:"18px"}} title='Favourite'></li>
                                <span className='nav-logo-name'>Favourite</span>
                            </Link>
                            <Link to ="/Chat" className='nav-link'>
                                <li className='fa-solid fa-comments nav-link-icon' style={{fontSize:"18px"}} title='Chat'></li>
                                <span className='nav-logo-name'>Chat</span>
                            </Link>
                            <Link to ="/Setting" className='nav-link'>
                                <li className='fa-solid fa-gear nav-link-icon' style={{fontSize:"18px"}} title='Settings'></li>
                                <span className='nav-logo-name'>Settings</span>
                            </Link>
                        </div>
                    </div>
                    <Link to ="/logout" className='nav-link'>
                        <li className='fas fa-sign-out nav-link-icon' style={{fontSize:"18px"}} title='Log Out'></li>
                        <span className='nav-logo-name'>Logout</span>
                    </Link>
                    
                </nav>
            </aside>
        </main>
  )
}

export default Sidebar