import Links from "./components/Links"

export default function Four() {
    return (
        <div id="form" className="form-container flex flex-col">
            <input type="text" placeholder="List any allergies to medication" className="input-box" />
            <input type="text" placeholder="Reason for Visit" className="input-box" />
            <input type="email" placeholder="Emergency Contact" className="input-box" />
            <div id='navbar' className="flex flex-row space-x-3">
                <Links />
            </div>
        </div>
    )
}