import Links from "./components/Links"

export default function Five() {
    const handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        e.target.checked = !e.target.checked  // toggle checkbox state;
      }
    };

    const doctors = ["Dr. Vita Min", "Dr. I. Floss", "Dr. B. Healthy"]
    return (
        <div id="form" className="form-container flex flex-col">
            <div id="form" className="form-container flex flex-col justify-end">
                <h1 className="font-title font-bold text-2xl text-gray-400">Who is your physician?</h1>
                <form className="flex flex-col">
                        <label for="dr1" className="form-text">Dr. Vita Min</label>
                        <input id="dr1" type="radio" className="w-12 h-12 radio" name={doctors[0]} value={doctors[0]} onKeyDown={(e)=>handleKeypress(e)}/>
                        <label for="dr2" className="form-text">Dr. I. Floss</label>
                        <input id="dr2" type="radio" className="w-12 h-12 radio" name={doctors[1]} value={doctors[1]} onKeyDown={(e)=>handleKeypress(e)}/>
                        <label for="dr3" className="form-text">Dr. B. Healthy</label>
                        <input id="dr3" type="radio" className="w-12 h-12 radio" name={doctors[2]} value={doctors[2]}onKeyDown={(e)=>handleKeypress(e)}/>
                </form>
                <div id='navbar' className="flex flex-row space-x-3">
                    <Links />
                </div>
            </div>
        </div>
    )
}