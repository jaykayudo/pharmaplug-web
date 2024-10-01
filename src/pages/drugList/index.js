import "./style.scss"
import { ItemCard } from "../../components/card/index.js";
import DrugSearchHeader from "../../components/drugSearchHeader/index.js";
import assets from "../../assets/index.js";
import { Link, useParams } from "react-router-dom";
import HealthTipContainer from "../../components/healthTipsContainer/index.js";
import Path from "../../navigations/constants.js"

const DrugsList = () => {
    const onSearch = (searchtext)=>{
    }
    
    
    return ( 
        <div className="drug-list-page-content">
            <DrugSearchHeader onSearch={onSearch} />
            <div className="container">
                <div className="header-div">
                    <p>
                        &lt; <Link>Drug store</Link>
                        <Link> / Sickness</Link>
                        <span> / Headache</span>
                    </p>
                    <h3>
                        Headache
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  
                    </p>
                </div>
                <div className="drugs-div">
                    {data.map((value, idx)=>(
                        <div key={idx} className="item-card-cover">
                        <ItemCard 
                            name={value.name}
                            image={value.image}
                            price={value.price}
                            link={Path.drugDetails(value.id)}
                        /> 
                        </div>
                    ))}
                </div>
                <div>
                    <HealthTipContainer data={healthData} />
                </div>
            </div>
            
        </div>
    );
}
 
export default DrugsList;

const data = [
    {
        id:1,
        name: "NatraBio expectorant",
        price: "1000000.00",
        image: assets.drug1
    },
    {
        id:1,
        name: "Paracetamol",
        price: "300.00",
        image: assets.drug2
    },
    {
        id:1,
        name: "Honitus Cough remedy",
        price: "20000.00",
        image: assets.drug3
    },
    {
        id:1,
        name: "DayQuil syrup",
        price: "12000.00",
        image: assets.drug4
    },
    {
        id:1,
        name: "DayQuil Honey",
        price: "5000.00",
        image: assets.drug5
    },
    {
        id:1,
        name: "Amoxillin",
        price: "10000.00",
        image: assets.drug5
    },
    
]
const  healthData = [
    {
        title:"Health tip: with the main photo and the headline ...",
        date:"20th June 2024",
        image:assets.tip1
    },
    {
        title:"Health tip: with the main photo and the headline ...",
        date:"20th June 2024",
        image:assets.tip2
    },
    {
        title:"Health tip: with the main photo and the headline ...",
        date:"20th June 2024",
        image:assets.tip3
    },
    {
        title:"Health tip: with the main photo and the headline ...",
        date:"20th June 2024",
        image:assets.tip4
    },
]