import "./style.scss"
import Path from "../../navigations/constants.js"
import DrugSearchHeader from "../../components/drugSearchHeader/index.js";
import DrugStoreFilterIndex from "../../components/drugStoreFilterIndex/index.js";
import { LinkButton } from "../../components/button/index.js";

import { Link } from "react-router-dom";

const DrugStoreFull = () => {
    const onFilterClick = (text)=>{

    }
    const onSearch = ()=>{

    }
    const data = [
        {
            id: 1,
            name:"ab sickness"
        },
        {
            id: 1,
            name:"ab sickness"
        },
        {
            id: 1,
            name:"ac sickness"
        },
        {
            id: 1,
            name:"ad sickness"
        },
        {
            id: 1,
            name:"ae sickness"
        },
        {
            id: 1,
            name:"af sickness"
        },
        {
            id: 1,
            name:"ag sickness"
        },

    ]
    const headerChecker = (idx, value)=>{
        if(idx == 0){
            return true
        }
        else if(data[idx - 1].name.toLowerCase().slice(0,2) != value.name.toLowerCase().slice(0,2)){
            return true
        }
        return false
    }
    return ( 
        <div>
            <DrugSearchHeader onSearch={onSearch}  />
            <div className="container" style={{paddingTop: "1em"}}>
                <DrugStoreFilterIndex onFilterClick={onFilterClick} />
                <div style={{paddingTop:'1em', paddingBottom:"1em"}}>
                    {
                        data.map((value, idx)=>(
                            <div>
                                {headerChecker(idx, value) && (
                                    <div className="sickness-link-header">
                                        <h2>
                                            {value.name.slice(0,2)} 
                                        </h2>
                                    </div>
                                )}
                                <div className="sickness-link-cover">
                                    <Link to={Path.drugs(value.id)} className="sickness-link">
                                        {value.name}
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                    <div className="flex-between" style={{paddingTop:"1.2em", paddingBottom:"1.2em"}}>
                        <Link className="green-link" to={"#"}>
                            Back to top
                        </Link>
                        <LinkButton to={"/"}>
                            Next
                        </LinkButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default DrugStoreFull;