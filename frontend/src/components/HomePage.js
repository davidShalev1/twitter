import react from "react";
import {Link} from "react-router-dom";

const HomePage = ({currentUser}) => {
    if(!currentUser.isAuthenticated){
        
        return(
            <div className="home-hero">
                <h1>what`s happening ?</h1>
                <h4>New to Twitter ?</h4>
                <Link to="/signup" className="btn btn-primary">sign up</Link>
            </div>
        )
    }
    return(<div><h1>you made it to the home page!!!</h1></div>)
}

export default HomePage;