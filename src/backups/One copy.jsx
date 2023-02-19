import { Link } from "react-router-dom"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import React from 'react'
import { useState, useEffect } from "react"
import home from "./images/home.svg"

import axios from "axios"


export default function One() {
    const [input, setInput] = useState({
        firstname:"",
        lastname:"",
    })
    
    /*const useActiveElement = () => {
        const [active, setActive] = useState(document.activeElement);
        
        const handleFocusIn = (e) => {
          setActive(document.activeElement);
        }
        
        useEffect(() => {
          document.addEventListener('focusin', handleFocusIn)
          return () => {
            document.removeEventListener('focusin', handleFocusIn)
        };
        }, [])
        
        return active;
      }
      const focusedElement = useActiveElement();
  
      useEffect(() => {
         if (focusedElement) {
           focusedElement.value && console.log(focusedElement.value);
         }
        console.log(focusedElement.name);
        SpeechRecognition.startListening().then(
            () => {setPrevTranscript(transcript)
            setInput(prevInput => {
                return {
                    ...prevInput,
                    [focusedElement.name]: transcript
                }
            }
        )})
      }, [focusedElement]) */

    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition()

    if (!browserSupportsSpeechRecognition) {
        return (<span>your browser doesn't have speech recognition</span>)
    }

    function speechButton() {
        return (
            <div id="speaker button">
                <p>Microphone {listening ? "on" : "off"}</p>
                <button
                    onClick={listening ? SpeechRecognition.stopListening : SpeechRecognition.startListening}
                    className="btn bg-tertiary animate">Speak
                </button>
                <p>{transcript}</p>
            </div>
        )
    }

    const handleInputFocus = (event) => {
        resetTranscript();
    };

    const handleSpaceKeyPress = (e) => {
        //it triggers by pressing the capslock key
        //space is 32
        if (e.keyCode === 32) {
            SpeechRecognition.startListening({ continuous: true,
                language: 'en-US' })
        }
    }

   

    /*function handleSubmit(event) {
        event.preventDefault()
        console.log(input)
        const newPatient = {
            firstname: input.firstname,
            lastname: input.lastname
        }
        axios.post("http://localhost:3001/create", newPatient)
        setInput({
            firstname:"",
            lastname:""
        })
    }*/
    const handleChange=(event) =>{
        const { name, value } = event.target
        setInput(prevInput => ( {
                ...prevInput,
                [name]: value
            }
        ))
    }
    function handleSubmit(event) {
    event.preventDefault()
    console.log(input)
    axios.post("http://localhost:3001/create", input)
    setInput({
        firstname:"",
        lastname:""
    })
}


    

    /*function handleFocus(event){
        SpeechRecognition.startListening().then(
            () => {setPrevTranscript(transcript)
            setInput(prevInput => {
                return {
                    ...prevInput,
                    [event.target.name]: transcript
                }
        


        })})
    }*/

    function links() {
        return (
            <div id='navbar' className="flex flex-row space-x-4">
                <Link to="/1" className="smol-btn red animate translate-x-4">1</Link>
                <Link to="/2" className="smol-btn red animate">2</Link>
                <Link to="/3" className="smol-btn red animate">3</Link>
                <Link to="/4" className="smol-btn red animate">4</Link>
                <Link to="/5" className="smol-btn red animate">5</Link>
                <Link to="/" className="smol-btn green animate"><img className="w-full h-full"src={home} alt="whoops"/></Link>
            </div>
        )
    }
    return (
        <div id="form" className="form-container flex flex-col">
            <input
            type="text"
            name="firstname"
            value={input.firstname}
            onChange={handleChange}
            onFocus={handleInputFocus}
            onKeyDown={handleSpaceKeyPress}
            placeholder="First name" className="input-box mx-auto" />
            <input
            type="text"
            name="lastname"
            value={input.lastname}
            onChange={handleChange}
            onFocus={handleInputFocus}
            onKeyDown={handleSpaceKeyPress}
            placeholder="Last name" className="input-box mx-auto" />
    

            <div id="submit" className="flex flex-row space-x-3">
                <button onClick="" className="btn red animate">Go Back</button>
                <button onClick={(e) => handleSubmit(e)} className="btn green animate">Submit</button>

            </div>
            {speechButton()}
            <div id='navbar' className="flex flex-row space-x-3">
                {links()}
            </div>
        </div>
    )
}