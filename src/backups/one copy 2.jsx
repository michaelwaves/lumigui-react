import { Link } from "react-router-dom"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import React from 'react'
import { useState, useRef } from "react"
import home from "./images/home.svg"

import axios from "axios"

const SpeechInputForm = () => {
  const [inputs, setInputs] = useState({
    input1: '',
    input2: '',
    input3: '',
  });

  const inputRefs = {
    input1Ref: useRef(null),
    input2Ref: useRef(null),
  };

  const handleSpeechTranscript = (name, transcript) => {
    setInputs((prevState) => ({ ...prevState, [name]: transcript }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/create', inputs);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 32) {
      const inputName = e.target.name;
      SpeechRecognition.startListening({ continuous: true }).then(() => {
        handleSpeechTranscript(inputName, SpeechRecognition.transcript);
        inputRefs[`${inputName}Ref`].current.value = SpeechRecognition.transcript;
      });
    }
  };

  const { transcript, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>Browser does not support speech recognition</span>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input 1:
        <input
          ref={inputRefs.input1Ref}
          type="text"
          name="input1"
          value={inputs.input1}
          onChange={(e) => setInputs({ ...inputs, input1: e.target.value })}
          onKeyDown={handleKeyDown}
        />
      </label>
      <label>
        Input 2:
        <input
          ref={inputRefs.input2Ref}
          type="text"
          name="input2"
          value={inputs.input2}
          onChange={(e) => setInputs({ ...inputs, input2: e.target.value })}
          onKeyDown={handleKeyDown}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SpeechInputForm;