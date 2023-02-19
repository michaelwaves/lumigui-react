import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import React from 'react'

export default function Speech() {

    //syntactic sugar transcript:transcript
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition()

    if (!browserSupportsSpeechRecognition) {
        return (<span>your browser doesn't have speech recognition</span>)
    }

    return (
        <div id="speaker button">
            <p>Microphone {listening ? "on" : "off"}</p>
            <button
                onClick={listening ? SpeechRecognition.stopListening : SpeechRecognition.startListening}
                className="btn red animate">Speak
            </button>
            <p>{transcript}</p>
        </div>
    )
}