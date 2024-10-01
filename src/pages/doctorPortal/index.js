import "./style.scss"
import DrugSearchHeader from "../../components/drugSearchHeader/index.js";
import assets from "../../assets/index.js";
import ShadowBox from "../../components/shadowBox/index.js";
import Path from "../../navigations/constants.js"
import HealthTipContainer from "../../components/healthTipsContainer/index.js";

import { Link } from "react-router-dom";

const DoctorPortal = () => {
    const fields = [
        {
            id: 1,
            name: "General Doctors",
            image: assets.cougher
        },
        {
            id: 2,
            name: "Pediatrics",
            image: assets.cougher
        },
        {
            id: 3,
            name: "Neurologist",
            image: assets.cougher
        },
        {
            id: 4,
            name: "Pyschologist",
            image: assets.cougher
        },
        {
            id: 5,
            name: "Gynecologost",
            image: assets.cougher
        },
        {
            id: 6,
            name: "ENT",
            image: assets.cougher
        },{
            id: 7,
            name: "Cough",
            image: assets.cougher
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
    const onSearch = ()=>{

    }
    return (
        <div>
            <DrugSearchHeader header="Doctor Portal" onSearch={onSearch} />
            <div className="container">
                <div className="drug-top-header">
                    <h3>Doctor Categories</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  </p>
                </div>
                <div className="sickness-box">
                    {fields.map((value, idx)=>(
                        <div className="sickness-div" key={idx}>
                            <ShadowBox image={value.image} title={value.name} to={Path.doctorPortalCategory(value.id)} />
                        </div>
                    ))}
                </div>
                <div className="flex-center" style={{paddingTop:"1.5em", paddingBottom:"1.5em"}}>
                    <Link to={Path.drugStoreFull} className="link" style={{fontSize: 20}}>
                        See More &gt;
                    </Link>
                </div>
                <div>
                    <HealthTipContainer data={healthData} />
                </div>
            </div>
            
        </div>
    );
}
 
export default DoctorPortal;