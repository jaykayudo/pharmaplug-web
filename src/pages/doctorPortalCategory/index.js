import "./style.scss"
import DrugSearchHeader from "../../components/drugSearchHeader/index.js";
import assets from "../../assets/index.js";
import Path from "../../navigations/constants.js"
import { LinkButton, NormalButton } from "../../components/button/index.js";
import { FaSearch } from "react-icons/fa";


const DoctorPortalCategory = () => {
    const data = [
        {
            id: 1,
            name: "Dr. White",
            image: assets.doctor1,
            rate:"₦1200/hr",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
        },
        {
            id: 1,
            name: "Dr. Abigail Reacher",
            image: assets.doctor2,
            rate:"₦1200/hr",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
        },
        {
            id: 1,
            name: "Dr. White",
            image: assets.doctor3,
            rate:"₦1200/hr",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
        },
        {
            id: 1,
            name: "Dr. White",
            image: assets.doctor4,
            rate:"₦1200/hr",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
        },
        {
            id: 1,
            name: "Dr. White",
            image: assets.doctor5,
            rate:"₦1200/hr",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
        },
        {
            id: 1,
            name: "Dr. White",
            image: assets.doctor1,
            rate:"₦1200/hr",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
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
                <div className="doctor-search-area mb-1em">
                    <div className="single-filter">
                        <h3>Select Type</h3>
                        <select>
                            <option>Select a Type</option>
                        </select>
                    </div>
                    <div className="single-filter">
                        <h3>Add Address</h3>
                        <input placeholder="Add an Address " />
                    </div>
                    <div className="single-filter">
                        <h3>State</h3>
                        <select>
                            <option>Select a State</option>
                        </select>
                    </div>
                    <div className="single-filter">
                        <h3>L.G.A</h3>
                        <select>
                            <option>Select a local government area</option>
                        </select>
                    </div>
                    <div>
                        <NormalButton>
                            <FaSearch size={22} color="white" />
                        </NormalButton>
                    </div>
                </div>
                <div className="mb-1em">
                    <h3 className="mb-05em">Search related to <span>Pediatric doctors</span></h3>
                    <p className="text-gray font-14"><span>12</span> pediatric doctors available at your current location.</p>
                </div>
                <div className="flex-between gap-20">
                    {data.map((value, index)=>(
                        <div key={index} className="w-30 sm-w-50 doctor-details-box" style={{backgroundImage:`url("${value.image}")`}}>
                            <div>
                                <h3 className="flex-between">
                                    <span>{value.name}</span>
                                    <span>{value.rate}</span>
                                </h3>
                                <p className="text-gray mb-05em">
                                    {value.description}
                                </p>
                                <LinkButton full to={Path.scheduleConsultation(value.id)}>
                                    Book appointment
                                </LinkButton>
                            </div>
                        </div>      
                    ))}
                </div>
            </div>
            
        </div>
    );
}
 
export default DoctorPortalCategory;