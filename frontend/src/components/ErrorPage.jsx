import { Link,useRouteError } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLink,faFile,faHouse } from '@fortawesome/free-solid-svg-icons'

function ErrorPage(){
    const error = useRouteError();
    return(
        <div className="errorPage h-screen flex flex-col items-center justify-center">
             <h1 className="font-bold text-6xl">{error.status}</h1>
             <h1 className="font-bold text-2xl">Page Not found <FontAwesomeIcon icon={faLink} className="text-red-800"/></h1>
             <h3 className="text-xl"><FontAwesomeIcon icon={faFile} /> {error.data}</h3>
              
             <button className="text-xl bg-gray-500 p-1 rounded text-white mt-2">
             <Link to="/"><FontAwesomeIcon icon={faHouse} /> Home</Link>
             </button>
             
        </div>
    )
}

export default ErrorPage;