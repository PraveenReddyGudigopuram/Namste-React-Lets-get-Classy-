import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    

    return(
        <div>
            <h1>{err.status}</h1>
            <h2>{err.statusText}</h2>
        </div>
    )
}
export default Error;