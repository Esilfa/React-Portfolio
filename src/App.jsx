import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sectionsApp">
        <div className='introApp'> <Intro /> </div>
        <div className='projectsApp'><Projects /> </div>
        <div className='contactApp'>  <Contact />  </div>
      </div>
    </div>
  );
}

export default App;
