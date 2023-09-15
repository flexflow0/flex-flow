
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth/useAuth";
import Loading from "../Pages/Shared/Loading";

const PrivateRoute = ({children}) => {
    const {user,loading}= useAuth()
    const location  = useLocation()
    
        if(loading){
            return <div className="h-screen w-full flex items-center justify-center">
            <div className="h-[200px]">
                <Loading />
            </div>

        </div>
        }
        if(user){
            return children
        }
        return <Navigate to='/login'state={{from: location}} replace></Navigate>

       

};

export default PrivateRoute;