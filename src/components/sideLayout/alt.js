import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import { FaCog, FaHome, FaSignOutAlt, FaRegFileAlt } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { IoGiftOutline, IoWalletOutline } from "react-icons/io5";
import { TbSettings2 } from "react-icons/tb";
import { WhiteButton } from "../button/index.js";
import Logo from "../logo/index.js";
import { PiHeadset } from "react-icons/pi";
import Path from "../../navigations/constants.js";
import { SearchInput } from "../input/index.js";
import { FaBell, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import assets from "../../assets/index.js";
import { useState } from "react";
const SideLayoutAlt = ({children}) => {
    const [sideShow, setSideShow] = useState(false);
    const closeSideBar = ()=>{
        setSideShow(false)
    }
    return ( 
        <div className="side-layout-cover">
            <div className={`side-bar alt${sideShow ? " show":""}`} onBlur={closeSideBar}>
                <div className="top-nav">
                    <div className="mb-2em side-bar-brand">
                        <Logo coverStyle={{backgroundColor:"transparent",color:"white"}} altLogo />
                        <button onClick={()=>setSideShow(false)}>
                            <FaTimes />    
                        </button>
                    </div>
                    <NavLink className="side-nav-link" to={Path.userDashboard}>
                        <span>
                            <GrHomeRounded />
                        </span>
                        <p>
                            Dashboard
                        </p>
                    </NavLink>
                    <NavLink className="side-nav-link" to={Path.userHistory}>
                        <span>
                            <FaRegFileAlt />
                        </span>
                        <p>
                            History
                        </p>
                    </NavLink>
                </div>
                <div className="bottom-nav">
                    <NavLink className="side-nav-link" to={Path.userSettings}>
                        <span>
                            <TbSettings2 />
                        </span>
                        <p>
                            Settings
                        </p>
                    </NavLink>
                    <NavLink className="side-nav-link" to={Path.userSupport}>
                        <span>
                            <PiHeadset />
                        </span>
                        <p>
                            Help Center
                        </p>
                    </NavLink>
                    <NavLink className="side-nav-link" to={Path.userReferral}>
                        <span>
                            <IoGiftOutline />
                        </span>
                        <p>
                            Refer Family and Friends
                        </p>
                    </NavLink>
                    <WhiteButton full style={{border:"1px solid white", background:"transparent", "color":"white"}}>
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
 
export default SideLayoutAlt;