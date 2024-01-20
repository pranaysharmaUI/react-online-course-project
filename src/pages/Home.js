import { useContext } from "react";
import AppContext from "../context/AppContext";

function Home(props)
{
    const context=useContext(AppContext);
    console.log(context);
    return(
        <div className="container">
            <h1>Home</h1>
        </div>
    )
}

export default Home;