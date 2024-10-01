import "./style.scss"
import { NormalButton } from "../../components/button/index.js";
import { LargeAccordion } from "../../components/accordion/index.js";
import { NormalInput, NormalSelect } from "../../components/input/index.js";
import { MiniCartItem } from "../../components/cartItem/index.js";
import assets from "../../assets/index.js";

import { useState } from "react";


const Checkout = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [state, setState] = useState("");
    const [region, setRegion] = useState("");
    const [address, setAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    let subtotal = 0; 
    data.forEach((value)=>{
        subtotal += value.price;
    })
    return ( 
        <div className="checkout-page-cover">
            <div className="breadcrump-header-top">
                <p>
                    <span></span>
                    <p></p>
                </p> <hr />
                <p>
                    <span></span>
                    <p></p>
                </p> <hr />
                <p>
                    <span></span>
                    <p></p>
                </p>
            </div>
            <div className="container">
                <div className="flex-between">
                    <h3 className="checkout-header">Checkout</h3>
                </div>
                <div className="checkout-cover">
                    <div className="checkout-box">
                        <div className="info-box">
                            <LargeAccordion 
                                header1={"Personal details"}
                                header2={"Provide your personal details for delivery"}
                            >
                                <div className="personal-info-box">
                                    <div className="info-input">
                                        <NormalInput 
                                            label={"Full name"}
                                            onChange={(e)=>setFullName(e.target.value)} 
                                            value={fullName}
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div className="info-input">
                                        <NormalInput 
                                            label={"Email Address"}
                                            onChange={(e)=>setEmail(e.target.value)} 
                                            type="email" 
                                            value={email}
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div className="info-input">
                                        <NormalInput 
                                            label={"Phone Number"}
                                            onChange={(e)=>setPhoneNumber(e.target.value)} 
                                            type="tel" 
                                            value={phoneNumber}
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                </div>
                            </LargeAccordion>
                            <div style={{paddingLeft:"1.2em", paddingRight:"1.2em"}}>
                                <hr />
                            </div>
                            <LargeAccordion 
                                header1={"Delivery location"}
                                header2={"Provide your address for delivery"}
                            >
                                <div className="personal-info-box">
                                    <div className="info-input">
                                        <NormalSelect 
                                            label={"State"}
                                            onChange={(e)=>setState(e.target.value)} 
                                            value={state}
                                        >

                                        </NormalSelect>
                                    </div>
                                    <div className="info-input">
                                        <NormalSelect 
                                            label={"Region"}
                                            onChange={(e)=>setRegion(e.target.value)} 
                                            value={region}
                                        >

                                        </NormalSelect>
                                    </div>
                                    <div style={{width:"100%"}}>
                                        <NormalInput 
                                            label={"Address"}
                                            onChange={(e)=>setAddress(e.target.value)}  
                                            value={address}
                                            placeholder="Enter your Address"
                                        />
                                    </div>
                                </div>
                            </LargeAccordion>
                            <div className="checkout-btn-cover">
                                <NormalButton>
                                    Save details
                                </NormalButton>
                            </div>
                        </div>
                        <div className="info-box">
                            <LargeAccordion
                                header1={"Delivery option"}
                                header2={"Choose how you want to receive your products"}
                            >
                                <div>
                                    <div className="select-section">
                                        <div>
                                            <input type="radio" name="delivery-method" value={"home"} />
                                        </div>
                                        <div>
                                            <h3>Home delivery ($2.7 delivery fee)</h3>
                                            <p>You will be redirected at checkout to complete payment</p>
                                        </div>
                                    </div>
                                    <div className="select-section">
                                        <div>
                                            <input type="radio" name="delivery-method" value={"pharmacy"} />
                                        </div>
                                        <div>
                                            <h3>Pick up from pharmacy (no delivery fee)</h3>
                                            <p>You will pay at the point of delivery</p>
                                        </div>
                                    </div>
                                </div>
                            </LargeAccordion>
                        </div>
                        <div className="info-box">
                            <LargeAccordion
                                header1={"Payment Method"}
                                header2={"Choose how you want to pay"}
                            >
                                <div>
                                    <div className="select-section">
                                        <div>
                                            <input type="radio" name="payment-method" value={"card"} />
                                        </div>
                                        <div>
                                            <h3>Pay with Card</h3>
                                            <p>You will be redirected at checkout to complete payment</p>
                                        </div>
                                    </div>
                                    <div className="select-section">
                                        <div>
                                            <input type="radio" name="payment-method" value={"bank"} />
                                        </div>
                                        <div>
                                            <h3>Pay with bank transfer</h3>
                                            <p>You will be redirected at checkout to complete payment</p>
                                        </div>
                                    </div>
                                    <div className="select-section">
                                        <div>
                                            <input type="radio" name="payment-method" value={"delivery"} />
                                        </div>
                                        <div>
                                            <h3>Pay on delivery</h3>
                                            <p>You will pay at the point of delivery </p>
                                        </div>
                                    </div>
                                </div>

                            </LargeAccordion>
                        </div>
                    </div>
                    <div className="item-box">
                        <div className="checkout-items">
                            <h3>Order summary</h3>
                            <div>
                                {data.map((value, idx)=>(
                                    <MiniCartItem key={idx} data={value} />
                                ))}
                            </div>
                        </div>
                        <div className="total-box">
                            <h3>Price details</h3>
                            <div className="flex-between">
                                <p>Subtotal</p>
                                <h3>₦ {`${subtotal}`}</h3>
                            </div>
                            <div className="flex-between">
                                <p>Shipping Fee</p>
                                <h3>₦ 200</h3>
                            </div>
                            <div className="flex-between">
                                <p>Total</p>
                                <h3>₦ {subtotal}</h3>
                            </div>
                        </div>
                        <div style={{paddingTop:"1em", paddingBottom:"1em"}}>
                            <NormalButton full>
                                Pay Now
                            </NormalButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );  
}
 
export default Checkout;

const data = [
    {
        id: 1,
        name: "Aloe vera",
        price: 1000,
        quantity: 2,
        image: assets.drug1,
    },
    {
        id: 2,
        name: "Aloe vera",
        price: 1000,
        quantity: 1,
        image: assets.drug2,
    },
    {
        id: 3,
        name: "Aloe vera",
        price: 1000,
        quantity: 1,
        image: assets.drug3,
    },
]