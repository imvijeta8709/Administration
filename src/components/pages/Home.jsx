import React from "react"
//import "../styles/home.css"
import NavBar from "./NavBar"

export default function Home() {
    return (
        <React.Fragment>
                <NavBar/>
                <h2 className="text-center mt-5 text-danger"><br/>--- Welcome to our --- <br/> <br/><i>Home Page </i>🙂</h2>
        </React.Fragment>

    )
}