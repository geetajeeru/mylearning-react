import React from "react";
import {Link} from "react-router-dom";

const Home = (props) => {
    return(
        <div className="home">
            <h1>Welcome To User Management Tool</h1>
            <hr style={{"margin":"30px"}}/>
            <Link to="/users" id="userLink">Users List</Link>
        </div>
    );
};

export default Home;