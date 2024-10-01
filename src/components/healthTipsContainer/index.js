import "./style.scss";
import { HealthCard } from "../card/index.js";

const HealthTipContainer = ({header1 = "Health Tips", header2="Featured stories", data}) => {
   
    return ( 
        <div>
            <div className="health-container-header">
                <p>{header1}</p>
                <h2>{header2}</h2>
            </div>
            <div className="health-container-content">
                {data.map((value, idx)=>(
                    <div key={idx} className="health-card-cover">
                        <HealthCard 
                            image={value.image} 
                            description={value.title}
                            date={value.date}
                        />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default HealthTipContainer;