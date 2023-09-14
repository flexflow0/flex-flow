
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth/useAuth";

const PrivateRoute = ({children}) => {
    const {user,loading}= useAuth()
    const location  = useLocation()
    
        if(loading){
            return <>
            <progress className="progress progress-primary w-56" value="0" max="100"></progress><br/>
            <progress className="progress progress-primary w-56" value="10" max="100"></progress><br/>
            <progress className="progress progress-primary w-56" value="40" max="100"></progress><br/>
            <progress className="progress progress-primary w-56" value="70" max="100"></progress><br/>
            <progress className="progress progress-primary w-56" value="100" max="100"></progress>
            </>
        }
        
        if(user){
            return children
        }

      
        return <Navigate to='/login'state={{from: location}} replace></Navigate>

       

};

export default PrivateRoute;