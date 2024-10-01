import "./style.scss"
import { MiniAccordion } from "../../components/accordion/index.js";
import { MiniItemCard } from "../../components/card/index.js";
import CartItem from "../../components/cartItem/index.js";
import assets from "../../assets/index.js";

import { Link } from "react-router-dom";
import { NormalButton } from "../../components/button/index.js";

import { useState } from "react";

const Cart = () => {
    const [checkedDelete, setCheckDelete] = useState([]);
    const increaseQuantity = (id)=>{

    }
    const decreaseQuantity = (id)=>{
        
    }
    const onCheckClick = (flag, id)=>{
    }

    const add_to_cart = (item)=>{

    }
    return ( 
        <div className="cart-page-section">
            <div className="container">
                <div className="nav-header-div">
                    <p>
                        &lt; <Link>Drug store</Link>
                        <Link> / Sickness</Link>
                        <span> / Headache</span>
                    </p>
                </div>

                <h3 className="header-title">My Cart</h3>
                <div>
                    <div className="main-cart-page-cover">
                        <div className="main-items">
                            <div className="delete-div">
                                <label>
                                    <input type="checkbox" className="custom-check" />
                                    &nbsp; &nbsp; &nbsp;
                                    Select all
                                </label>
                                <button className="delete-button">
                                    delete selected
                                </button>
                                
                            </div>
                            {data.map((value, idx)=>(
                                <div className="cart-item-cover-main">
                                    <CartItem 
                                        key={idx}
                                        data={value} 
                                        onCheckClick={onCheckClick} 
                                        onQuantityDecrease={()=> increaseQuantity(value.id)} 
                                        onQuantityIncrease={()=> decreaseQuantity(value.id)} 
                                    />
                                    <MiniAccordion header={"see all alternatives"} >
                                        <div className="alt-item-cover-main">
                                            {value.alternatives.map((alt_value, idx)=>(
                                                <div className="alt-item-cover">
                                                    <MiniItemCard 
                                                        key={idx} 
                                                        name={alt_value.name} 
                                                        price={alt_value.price}
                                                        image={alt_value.image}
                                                        onCartAdd={()=>add_to_cart(alt_value)}

                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </MiniAccordion>
                                </div>
                            ))}
                        </div>
                        <div className="price-details">
                            <div className="cover">
                                <h3>
                                    Order Summary
                                </h3>
                                <div className="flex-between subtotal">
                                    <p>Subtotal</p>
                                    <p><strong>1000000</strong></p>
                                </div>
                                <NormalButton full>
                                    <strong>Pay Now ({data.length})</strong>
                                </NormalButton>
                            </div>
                            
                        </div>  
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Cart;

const data = [
    {
        id: 1,
        name: "Aloe vera",
        price: "1000",
        quantity: 2,
        image: assets.drug1,
        alternatives:[

        ]
    },
    {
        id: 2,
        name: "Aloe vera",
        price: "1000",
        quantity: 1,
        image: assets.drug2,
        alternatives:[
            
        ]
    },
    {
        id: 3,
        name: "Aloe vera",
        price: "1000",
        quantity: 2,
        image: assets.drug3,
        alternatives:[
            {
                id: 4,
                name: "Aloe vera",
                price: "1000",
                quantity: 2,
                image: assets.drug4,
            },
            {
                id: 3,
                name: "Aloe vera",
                price: "1000",
                quantity: 2,
                image: assets.drug3,

            },
            {
                id: 5,
                name: "Aloe vera",
                price: "1000",
                quantity: 2,
                image: assets.drug1,

            }
            
        ]
    },
    {
        id: 4,
        name: "Aloe vera",
        price: "1000",
        quantity: 2,
        image: assets.drug4,
        alternatives:[
            
        ]
    },
]