import "./style.scss";
import assets from "../../assets/index.js";
import Logo from "../../components/logo/index.js";
import { NormalInput, NormalSelect, SecondaryInput } from "../../components/input/index.js";
import { NormalButton } from "../../components/button/index.js";
import { Link, useNavigate } from "react-router-dom";
import Path from "../../navigations/constants.js";

const DoctorRegister = () => {
    const navigate = useNavigate()
    const submitForm = ()=>{
        navigate(Path.doctorDashboard)
    }
    return ( 
        <div className="auth-full-page2">
            <div className="image-div" style={{backgroundImage:`url("${assets.authBG2}")`}}>
                <p className="text-center text-white">
                Office ipsum you must be muted. Replied event activities closing eow like rehydrate. Points money agile including whistles initiative shower loss cadence running.
                </p>
            </div>
            <div className="main-page-div">
                <Logo />
                <h2 className="mb-2em text-center">Create your account</h2>
                <button></button>
                <div className="register-form-box">
                    <SecondaryInput label={"Full name"} placeholder="Enter your full name" />
                    <SecondaryInput label={"Email address"} placeholder="Enter your email address" />
                    <SecondaryInput label={"Phone number"} placeholder="Enter your phone number" />
                    <NormalSelect label="Select a field">
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </NormalSelect>
                    <SecondaryInput label={"Password"} placeholder="Enter your password" />
                    <div>
                        
                    </div>
                    <NormalButton full onClick={submitForm}>
                        Register
                    </NormalButton>
                    <p className="mb-2em text-center" style={{marginTop:"1em"}}>
                        Already have an account ? <Link to={Path.login} className="link">Log In</Link>
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default DoctorRegister;