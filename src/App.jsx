
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Route from 'react-router-dom/Route';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (

    <div className="app">
      <Topbar />
      <div className="sectionsApp">
        <Intro />
        <Projects />
        < Contact />
      </div>
    </div>

  );
}

export default App;
