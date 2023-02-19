import { useState } from "react"
import { Link } from "react-router-dom"
import questionMark from "./images/question-mark-circle.svg"

export default function Welcome() {

    const [openHelp, setOpenHelp] = useState(false)
    function handleClick() {
        window.location.href = '/1'
    }
    return (
        <div className="top-0 w-full h-full flex flex-col">
            <div id="background" className="w-full h-full overflow-hidden" >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-tertiary via-tertiary-light to-white opacity-50 z-10" />
                <div className="absolute w-1/2 h-3/4 rotate-45 top-30 left-1/2 bg-white opacity-25 rounded-xl z-20 overflow-clip"></div>
            </div>
            <div>

            </div>
            <div id="landing view" className="relative px-6 lg:px-8 z-30">
                <div className="mx-auto max-w-2xl py-32">
                    <h1 className="text-tertiary text-4xl text-center font-title mr-auto font-bold" >Welcome to the future of medical forms</h1>
                    <div id="input-form" className="mt-10 w-[933] h-[437]">
                        <input className="bg-white bg-opacity-50 rounded-lg p-2 w-full h-full " type="text" placeholder="Search" />
                        <div id="submit button" className="w-full h-full flex flex-row">
                            <input
                                className="w-12 h-12 mt-10 rounded-3xl bg-secondary text-white mx-auto flex"
                                type="image" src={questionMark} alt="whoops" onClick={() => setOpenHelp(!openHelp)} />
                        </div>
                        {openHelp &&
                            <div id="help" className=" bg-white text-black rounded-xl w-1/2 h-auto flex flex-col space-y-4 py-2 px-2 m-auto z-40">
                                <h2 className="text-10">What is Lumigui?</h2>
                                <p>Once you press “Start Form.” You can move foward, back, click, delete, and activate speech. At the end, we coonsolidate your info and send it to your phone. No touch required</p>
                            </div>}
                    </div>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <button
                            onClick={handleClick}
                            className="flex items-center justify-center w-60 h-10 rounded-3xl border-solid border-4 bg-secondary hover:bg-primary px-3.5 py-1.5 text-center align-middle font-semibold leading-7 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-primary">
                            <Link to="/1"><p>Start Form</p></Link>
                        </button>
                    </div>

                </div>
            </div>
            <div id="about" className="relative px-6 lg:px-8 z-30 w-screen h-screen">
                <div className="mx-auto max-w-2xl py-32">
                    <h1 className="text-tertiary text-4xl text-center font-title mr-auto font-bold" >About</h1>
                </div>
            </div>

        </div>
    )
}