import "./style.scss";
import { useState } from "react";
import { NormalInput } from "../../components/input/index.js";
import { NormalButton } from "../../components/button/index.js";
import { Link, useNavigate } from "react-router-dom";
import Path from "../../navigations/constants.js"

const Register = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()
    const submitForm = ()=>{
        navigate(Path.userDashboard)
    }
    return ( 
        <div className="auth-full-page">
            <div className="form-box">
                <h2 className="mb-2em text-center">Create Account</h2>
                <p className="mb-2em text-center">Lorem ipsum dolor sit amet consectetur.</p>
                <div className="auth-form-group">
                    <NormalInput label={"Full name"} value={fullName} onChange={(e)=>setFullName(e.target.value)} />
                </div>
                <div className="auth-form-group">
                    <NormalInput label={"Email"} value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
                </div>
                <div className="auth-form-group">
                    <NormalInput label={"Phone Number"} value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} type="tel" />
                </div>
                <div className="auth-form-group">
                    <NormalInput label={"Password"} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <p className="mb-2em text-center">
                    Already have an account ? <Link to={Path.login} className="link">Login</Link>
                </p>
                <NormalButton full onClick={submitForm}>
                    Create Account
                </NormalButton>
            </div>
        </div>
     );
}
 
export default Register;