import "./style.scss"
import { useRef } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartItem = ({data, onQuantityIncrease, onQuantityDecrease, onCheckClick}) => {
    const checkBoxRef = useRef()
    const analyseCheckBox = ()=>{
        onCheckClick(checkBoxRef.current.checked, data.id)
    }

    return ( 
        <div className="cart-item-cover">
            <div className="check-box-cover">
            <input 
                className="custom-check" 
                type="checkbox"
                ref={checkBoxRef} 
                onChange={analyseCheckBox}
            />
            </div>
            <div className="item-detail-cover">
                <div className="image">
                   <img src={data.image} />
                </div>
                <div className="details">
                    <h3>{data.name}</h3>
                    <p>
                        Size: <span></span> &nbsp;
                        Type: <span></span>
                    </p>
                </div>
            </div>
            <div className="item-price-cover">
                <h3>
                    {data.price}
                </h3>
                <div className="counter">
                    <button onClick={onQuantityDecrease}>
                        <FaPlus size={15} />
                    </button>
                    <p>
                        {data.quantity}
                    </p>
                    <button onClick={onQuantityIncrease}>
                        <FaMinus size={15} />
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default CartItem;


export const MiniCartItem = ({data}) => {
    return (
        <div className="mini-cart-item-cover">
            <div className="flex" style={{width:"85%"}}>
                <div className="image-div">
                    <img src={data.image} />
                </div>
                <div>
                    <h3>{data.name}</h3>
                    <p>Qty: {data.quantity}</p>
                </div>
            </div>
            <div style={{width:"15%"}}>
                <h3 style={{textAlign:"right"}}>₦ {data.price}</h3>
            </div>
        </div>
    );
}