import { useState } from "react";

import "./style.scss"
import assets from "../../assets/index.js"
import Path from "../../navigations/constants.js"

import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from "../logo/index.js";

const FullLayout = ({children, showFooter = true}) => {
  const [flag, setFlag] = useState(false);
  const toggleNav = ()=>{
    setFlag((prevState)=>!prevState)
  }
  return (
    <>
        <nav className="pharmaplug-nav-cover">
          <div className="left-nav">
            <NavLink to={Path.home}>
              <img src={assets.logoSvg}  alt="PharmaPlug Logo"/>
            </NavLink>
            
            <div className="toggle-div">
              <button onClick={toggleNav} className="toggle-button">
                <FaBars size={20} color="1E1E1E" />
              </button>
            </div>
          </div>
          <div className={`right-nav ${flag?"show":""}`}>
              <NavLink className={"nav-link"} to={Path.drugStore}>Drug Store</NavLink>
              <NavLink className={"nav-link"} to={Path.doctorPortal}>Doctor Portal</NavLink>
              <NavLink className={"nav-link"} to={Path.partners}>Partners</NavLink>
              <NavLink className={"nav-link"} to={Path.blogs}>Blogs</NavLink>
              <NavLink className={"nav-link"} to={Path.registerPreview}>Create Account</NavLink>
          </div>
        </nav>
        <div className="content-container">
          
          {children}
        </div>
        {showFooter && (
          <div className="footer">
            <div className="footer-top-area">
              <div className="w-60 sm-w-100 mb-1em">
                <Logo altLogo />
              </div>
              <div className="w-40 sm-w-100 flex-between" style={{alignItems:"flex-start"}}>
                
                <ul>
                    <li className="text-bold"> Our Services</li>
                    <li>
                      <NavLink className={"footer-nav-link"} to={Path.drugStore}>Drug Store</NavLink>
                    </li>
                    <li>
                      <NavLink className={"footer-nav-link"} to={Path.drugStore}>Our Portal</NavLink>
                    </li>
                    <li>
                      <NavLink className={"footer-nav-link"} to={Path.drugStore}>Forum</NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="text-bold">Social media</li>
                    <li>
                      <NavLink className={"footer-nav-link"} to={Path.drugStore}>Instagram</NavLink>
                    </li>
                    <li>
                      <NavLink className={"footer-nav-link"} to={Path.drugStore}>Facebook</NavLink>
                    </li>
                    <li>
                      <NavLink className={"footer-nav-link"} to={Path.drugStore}>Tiktok</NavLink>
                    </li>
                    <li>
                      <NavLink className={"footer-nav-link"} to={Path.drugStore}>linkedin</NavLink>
                    </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom-area">
                <h3 className="w-60 sm-w-100 text-white">
                    © 2024 Pharmaplug.
                </h3>
                <div className="w-40 sm-w-100 flex-between">
                  <NavLink className={"footer-nav-link"} to={Path.drugStore}>Privacy and security</NavLink>
                  <NavLink className={"footer-nav-link"} to={Path.drugStore}>Terms and condition</NavLink>
                  <NavLink className={"footer-nav-link"} to={Path.drugStore}> Accessibility</NavLink>
                </div>
            </div>
          </div>
        )}
    </>
  );
}
 
export default FullLayout;