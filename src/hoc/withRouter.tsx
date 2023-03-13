import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";
import {ComponentType} from "react";

export const withRouter = (Component: ComponentType<any>) =>  {
    function ComponentWithRouterProp(props:any) {
        debugger
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        debugger
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}