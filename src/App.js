import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, } from 'react-router-dom';

import Form from './pages/Form';
import One from './pages/One';
import Two from './pages/Two';
import Three from './pages/Three';
import Four from './pages/Four';
import Five from './pages/Five';
import Speech from './pages/Speech';

import Welcome from './pages/Welcome';
import { Routes } from 'react-router-dom';


function App() {
  function handleSubmit() {
    console.log("submit")
  }


  return (
    <Router>
      <div className="bg z-10">
      </div>

      <div className="body z-20">
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route exact path="/1" element={<One />}></Route>
          <Route exact path="/2" element={<Two />}></Route>
          <Route exact path="/3" element={<Three />}></Route>
          <Route exact path="/4" element={<Four />}></Route>
          <Route exact path="/5" element={<Five />}></Route>
          <Route exact path="/speech" element={<Speech />}></Route>
        </Routes>



      </div>

    </Router>
  );
}


export default App;
