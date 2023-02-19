import { Link } from "react-router-dom"
import React from 'react'
import { useState } from "react"
import home from "./images/home.svg"

import axios from "axios"


export default function One() {
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        email: "",
        dob: "",
        reason: "",
        allergies: "",

    })

    function handleSubmit(event) {
        event.preventDefault()
        console.log(input)
        const newPatient = {
            firstname: input.firstname,
            lastname: input.lastname,
            email: input.email,
            dob: input.dob,
            reason: input.reason,
            allergies: input.allergies,
        }

        axios.post("http://localhost:3001/create", newPatient)
        setInput({
            firstname: "",
            lastname: "",
            email: "",
            dob: "",
            reason: "",
            allergies: "",
        })
    }


    function handleChange(event) {
        const { name, value } = event.target
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    return (
        <div id="form" className="form-container flex flex-col">

            <input onChange={handleChange} name="firstname" type="text" value={input.firstname} placeholder="First name" className="input-box mx-auto focus:rounded-xl transition-all" />
            <input onChange={handleChange} name="lastname" type="text" value={input.lastname} placeholder="Last name" className="input-box mx-auto focus:rounded-xl transition-all " />
            <input onChange={handleChange} name="email" type="text" value={input.email} placeholder="Email" className="input-box mx-auto focus:rounded-xl transition-all" />
            <input onChange={handleChange} name="dob" type="text" value={input.dob} placeholder="Date of Birth" className="input-box mx-auto focus:rounded-xl transition-all" />
            <input onChange={handleChange} name="reason" type="text" value={input.reason} placeholder="Reason for visit" className="input-box mx-auto focus:rounded-xl transition-all" />
            <input onChange={handleChange} name="allergies" type="text" value={input.allergies} placeholder="Allergies" className="input-box mx-auto focus:rounded-xl transition-all" />

            <div id="submit" className="flex flex-row space-x-3">
                <button onClick={(e) => handleSubmit(e)} className="btn red animate mx-auto">Submit</button>
            </div>

            <div id='navbar' className="flex flex-row space-x-3">
                <Link to="/" className="smol-btn bg-tertiary animate"><img className="w-full h-full" src={home} alt="whoops" /></Link>
            </div>
        </div>
    )
}
