import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <Router>
      <div className="app">
        <Topbar />
        <div className="sectionsApp">

          <Route exact path="/Intro">
            <Intro />
          </Route>
                
          <Route exact path="/Project">
            <Projects />
          </Route>
                
          <Route exact path="/Contact">
            < Contact/>
          </Route>


        </div>
      </div>
    </Router>
  );
}

export default App;
