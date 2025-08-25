import { useRouteError } from "react-router-dom";
import { ERROR_URL } from "../Utils/constants";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error">
            <div className="error-container">
                <h1>{err.status}</h1>
                <p className="oops">Something Went Wrong Page {err.statusText}</p>
                <p className="message">{err.error.message}</p>
            </div>
             <img src={ERROR_URL}></img>
        </div>
    )
}

export default Error;
