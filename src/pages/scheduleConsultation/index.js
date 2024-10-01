import "./style.scss"
import { RxCaretLeft } from "react-icons/rx";
import assets from "../../assets/index.js";
import { IoLocationOutline } from "react-icons/io5";
import { NormalInput, NormalTextArea } from "../../components/input/index.js";
import { NormalButton } from "../../components/button/index.js";

const ScheduleConsultation = () => {
    return ( 
        <div className="container" style={{paddingTop:"1em"}}>
            <div className="flex mb-3em">
                <button style={{background:"none"}}>
                    <RxCaretLeft fontSize={30} style={{marginRight: "1em"}} />    
                </button>
                
                <div>
                    <h3 className="mb-05em">Book appointment</h3>
                    <p className="text-gray font-14">fill up the details to schedule an appointment</p>
                </div>
            </div>
            <h1 className="text-green">
                Schedule Online Consultation
            </h1>
            <div className="w-50 sm-w-100 p-3">
                <div className="flex-between mb-2em">
                    <div className="flex">
                        <img className="little-rounded-image" src={assets.doctor2} style={{marginRight: "1em"}} />
                        <div>
                            <h4>
                                Dr. Jerome Bell
                            </h4>
                            <h4>
                                Radiologist
                            </h4>
                            <p className="text-gray font-14">
                                <IoLocationOutline size={14} /> Lagos, Nigeria
                            </p>
                        </div>
                    </div>
                    <button className="blue-button">Change</button>
                </div>
                <div>
                    <NormalInput label={"Select Date and Time"} />
                </div>
                <div className="mb-2em">
                    <h3 className="mb-1em">Have you consulted this doctor before on Pharmplug?</h3>
                    <label>
                        <input type="radio" /> Yes
                    </label>
                    &nbsp;
                    <label>
                        <input type="radio" /> No
                    </label>
                </div>
                <div className="mb-1em">
                    <NormalTextArea 
                    label={"Leave a note for the Doctor "}
                    placeholder="leave a note for the doctor"
                    />
                </div>
                <div>
                    <button className="p-2 curved-box flex-between mb-2em bg-gray gap-20">
                        <span >Amount:</span>
                        <h3>NGN 4,500</h3>
                    </button>
                    <NormalButton>
                        book appointment
                    </NormalButton>
                </div>
            </div>
        </div>
     );
}
 
export default ScheduleConsultation;