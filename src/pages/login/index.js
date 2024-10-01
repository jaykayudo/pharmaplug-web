import "./style.scss";
import { useState } from "react";
import { NormalInput } from "../../components/input/index.js";
import { NormalButton } from "../../components/button/index.js";
import { Link, useNavigate } from "react-router-dom";
import Path from "../../navigations/constants.js";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const submitForm = ()=>{
        navigate(Path.doctorDashboard)
    }
    return ( 
        <div className="auth-full-page">
            <div className="form-box">
                <h2 className="mb-2em text-center">Log In</h2>
                <p className="mb-2em text-center">Lorem ipsum dolor sit amet consectetur.</p>
                
                <div className="auth-form-group">
                    <NormalInput 
                        value={email} 
                        label={"Email"} 
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="auth-form-group">
                    <NormalInput 
                        value={password}
                        label={"Password"}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <p className="mb-2em text-center">
                    Don't have an account ? <Link to={Path.register} className="link">Register</Link>
                </p>
                <NormalButton full onClick={submitForm}>
                    Log In
                </NormalButton>
                <p className="mb-2em text-center" style={{marginTop:"1em"}}>
                    Forgot Password ? <Link to={Path.forgotPassword} className="link">Click here</Link>
                </p>
            </div>
        </div>
     );
}
 
export default Login;