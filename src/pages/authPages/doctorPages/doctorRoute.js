import SideLayout from "../../../components/sideLayout/index.js";

const DoctorRoute = ({children}) => {
    return ( 
        <SideLayout>
            {children}
        </SideLayout>
    );
}
 
export default DoctorRoute;