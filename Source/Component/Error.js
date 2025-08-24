import { useRouteError } from "react-router-dom";

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
             <img src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif"></img>
        </div>
    )
}

export default Error;
