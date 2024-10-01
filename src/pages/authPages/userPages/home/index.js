import { FaCaretLeft, FaRegFileAlt, FaRegClock } from "react-icons/fa";
import { WhiteButton } from "../../../../components/button/index.js";
import { CiCalendar } from "react-icons/ci";
import { RxCaretRight } from "react-icons/rx";
import { LuShoppingCart } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import assets from "../../../../assets/index.js";
import "./style.scss"

const UserDashboard = () => {
    return ( 
        <div>
            <div className="mb-3em">
                <h1 style={{marginBottom: 0.5}}>Welcome, David</h1>
                <p className="font-16 text-gray">We hope you’re taking good care of your health 😊</p>
            </div>
            <div className="flex gap-20">
                <div className="w-45 sm-w-100">
                    <div className="flex-between mb-1em">
                        <div className="w-45">
                            <div className="flex-between curved-box p-2 light-border-gray">
                                <div>
                                    <p className="mb-2em">Medications</p>
                                    <h3 className="font-22">11</h3>
                                </div>
                                <div className="rounded-icon light-border-gray bg-white">
                                    <FaRegFileAlt size={20} />
                                </div>
                            </div>
                        </div>
                        <div className="w-45">
                            <div className="flex-between curved-box p-2 light-border-gray p-2">
                                <div>
                                    <p className="mb-2em">Consultations</p>
                                    <h3 className="font-22">11</h3>
                                </div>
                                <div className="rounded-icon light-border-gray bg-white">
                                    <FaRegFileAlt size={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="light-border-gray curved-box">
                        <div className="flex-between light-border-bottom-gray p-1">
                            <h3>Upcoming Consultations</h3>
                            <button className="blue-button">
                                Reschedule
                            </button>
                        </div>
                        <div className="p-1">
                            <div className="flex gap-20">
                                <img src={assets.profile} className="little-rounded-image" />
                                <div>
                                    <h3 className="mb-1em">
                                        Dr. ALission
                                    </h3>
                                    <p className="mb-05em">
                                        General Pratictioner
                                    </p>
                                    <p className="text-gray font-14 mb-05em">
                                        <FaRegClock /> <span>11.30 - 12.00 (30 min) Friday, 6 July</span>
                                    </p>
                                    <p className="text-gray font-14 mb-05em">
                                        <IoLocationOutline /> <span>Cottage Medicare Hospital, 18 Iwaya Rd, Yaba 101245, Lagos</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-45 sm-w-100 light-border-gray curved-box">
                   <div className="flex-between light-border-bottom-gray p-1">
                        <h3>Quick Actions</h3>
                    </div>
                    <div className="p-1">
                        <div className="quick-action-box" >
                            <div className="quick-action-icon">
                                <CiCalendar fontSize={22} color="#1E1E1E" />
                            </div>
                            <div className="quick-action-link">
                                <div>
                                    <h3>Book an Appointment</h3>
                                    <p>Find a doctor and specialization</p>
                                </div>
                                <span>
                                    <RxCaretRight size={30} color="#1E1E1E" />
                                </span>
                            </div>
                        </div>
                        <div className="quick-action-box" >
                            <div className="quick-action-icon">
                                <IoLocationOutline fontSize={22} color="#1E1E1E" />
                            </div>
                            <div className="quick-action-link">
                                <div>
                                    <h3>Locate a hospital near you</h3>
                                    <p>Find closest hospitals</p>
                                </div>
                                <span>
                                    <RxCaretRight size={30} color="#1E1E1E" />
                                </span>
                            </div>
                        </div>
                        <div className="quick-action-box" >
                            <div className="quick-action-icon">
                                <LuShoppingCart fontSize={22} color="#1E1E1E" />
                            </div>
                            <div className="quick-action-link" style={{borderBottom:"none"}}>
                                <div>
                                    <h3>Buy Medication</h3>
                                    <p>Search and buy medications</p>
                                </div>
                                <span>
                                    <RxCaretRight size={30} color="#1E1E1E" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default UserDashboard;