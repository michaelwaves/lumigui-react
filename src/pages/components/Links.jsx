import { Link } from "react-router-dom";

export default function Links() {
    return (
        <div id='navbar' className="flex flex-row space-x-4">
            <Link to="/1" className="smol-btn red animate translate-x-4">1</Link>
            <Link to="/2" className="smol-btn red animate">2</Link>
            <Link to="/3" className="smol-btn red animate">3</Link>
            <Link to="/4" className="smol-btn red animate">4</Link>
            <Link to="/5" className="smol-btn red animate">5</Link>
            <Link to="/" className="smol-btn green animate"></Link>
        </div>
    )
}