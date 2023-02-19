import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import Welcome from './Welcome';
import { Routes } from 'react-router-dom';


export default function Form() {

  function handleSubmit() {
    console.log("submit")
  }
  function links() {
    return (
      <div id='navbar' className="flex flex-row space-x-3">
        <Link to="/1" className="smol-btn red animate">1</Link>
        <Link to="/2" className="smol-btn red animate">2</Link>
        <Link to="/3" className="smol-btn red animate">3</Link>
        <Link to="/4" className="smol-btn red animate">4</Link>
        <Link to="/5" className="smol-btn red animate">5</Link>
        <Link to="/" className="smol-btn green animate"></Link>
      </div>
    )
  }
  return (
    <Router>
      <div id="form">
        <Routes>

        </Routes>
        <div id="submit" className="flex flex-row space-x-3">
          <button onClick="" className="btn red animate">Go Back</button>
          <Link to="/"><button onClick={() => handleSubmit()} className="btn green animate">Submit</button></Link>

        </div>
        <div id='navbar' className="flex flex-row space-x-3">
          {links()}
        </div>
      </div>
    </Router>)
}