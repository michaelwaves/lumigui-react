import { useState } from "react"
import { Link } from "react-router-dom"
import questionMark from "./images/question-mark-circle.svg"

export default function Welcome(){
    return(
        <div id="form" className="container">
            <h1>Welcome</h1>
            <p>Click on the question mark to learn more about the Lumi Wallet.</p>
            <Link to="/one">Start Form </Link>
        </div>
    )
    
}