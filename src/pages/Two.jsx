import Links from "./components/Links"

export default function Two() {
    return (
        <div id="form" className="form-container flex flex-col">
            <input type="text" placeholder="Phone Number" className="input-box" />
            <input type="text" placeholder="Email Address" className="input-box" />
            <input type="text" placeholder="Address" className="input-box" />

            <div id='navbar' className="flex flex-row space-x-3">
                <Links />
            </div>
        </div>
    )
}