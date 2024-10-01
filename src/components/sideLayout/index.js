import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import { FaCog, FaHome, FaSignOutAlt, FaRegFileAlt, FaRegTimesCircle, FaTimes } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { IoGiftOutline, IoWalletOutline } from "react-icons/io5";
import { TbSettings2 } from "react-icons/tb";
import { WhiteButton } from "../button/index.js";
import Logo from "../logo/index.js";
import { PiHeadset } from "react-icons/pi";
import Path from "../../navigations/constants.js";
import { SearchInput } from "../input/index.js";
import { FaBars, FaBell } from "react-icons/fa6";
import assets from "../../assets/index.js";
import { useEffect, useRef, useState } from "react";
const SideLayout = ({children}) => {
    
    const sideBarRef = useRef(null);
    const [sideShow, setSideShow] = useState(false)
    const closeSideBar = ()=>{
        setSideShow(false)
    }
    // useEffect(()=>{
        
    // },[])
    return ( 
        <div className="side-layout-cover">
            <div className={`side-bar${sideShow ? " show":""}`} onBlur={closeSideBar}>
                <div className="top-nav">
                    <div className="mb-2em side-bar-brand">
                        <Logo />
                        <button onClick={()=>setSideShow(false)}>
                            <FaTimes />    
                        </button>
                        
                    </div>
                    <NavLink className="side-nav-link" to={Path.doctorDashboard}>
                        <span>
                            <GrHomeRounded />
                        </span>
                        <p>
                            Dashboard
                        </p>
                    </NavLink>
                    <NavLink className="side-nav-link" to={Path.doctorWallet}>
                        <span>
                            <IoWalletOutline />
                        </span>
                        <p>
                            Wallet
                        </p>
                    </NavLink>
                    <NavLink className="side-nav-link" to={Path.doctorConsultations}>
                        <span>
                            <FaRegFileAlt />
                        </span>
                        <p>
                            Consultation
                        </p>
                    </NavLink>
                </div>
                <div className="bottom-nav">
                    <NavLink className="side-nav-link" to={Path.doctorSettings}>
                        <span>
                            <TbSettings2 />
                        </span>
                        <p>
                            Settings
                        </p>
                    </NavLink>
                    <NavLink className="side-nav-link" to={Path.doctorSupport}>
                        <span>
                            <PiHeadset />
                        </span>
                        <p>
                            Help Center
                        </p>
                    </NavLink>
                    <NavLink className="side-nav-link" to={Path.doctorReferral}>
                        <span>
                            <IoGiftOutline />
                        </span>
                        <p>
                            Refer Family and Friends
                        </p>
                    </NavLink>
                    <NavLink className="side-profile-nav-link">
                        <img className="little-rounded-image" src={assets.profile} />
                        <div>
                            <h3>Ikeena Name</h3>
                            <p>Certified</p>
                        </div>
                    </NavLink>
                    <WhiteButton full>
                        <FaSignOutAlt />
                        <p>Logout</p>
                    </WhiteButton>
                </div>
            </div>
            <div className="side-layout-content">
            <div className="flex-between mb-2em">
                <div className="w-70 flex align-center">
                    <button className="side-nav-toggle" style={{marginRight:10}} onClick={()=>setSideShow((prevState)=> !prevState)} >
                        <FaBars size={16} color="#1E1E1E" />
                    </button>
                    <div className="w-90">
                        <SearchInput placeholder="Search" 
                            showCategory={false} coverStyle={{backgroundColor:"#F9FAFB", flexGrow: 1}} 
                            style={{backgroundColor:"#F9FAFB"}} 
                        />
                    </div>
                </div>
                <div className="w-30 flex-end gap-20">
                    <Link className="rounded-icon">
                        <FaBell size={20} color="#1E1E1E" />
                    </Link>
                    <img src={assets.profile} className="little-rounded-image" />
                </div>
            </div>
            {children}
            </div>
        </div>
    );
}
 
export default SideLayout;