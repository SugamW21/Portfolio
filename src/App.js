import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Contact from "./containers/contact";
import Portfolio from "./containers/portfolio";
import Skills from "./containers/skills";
import Resume from "./containers/resume";
import About from "./containers/about";
import Home from "./containers/home";
import Navbar from "./components/navBar";
// import Particles from "react-tsparticles";
// import {loadFull} from "tsparticles";

function App() {


    // const handleInit = async (main)=>{
    //     await loadFull(main)
    // }

  return (
    <div className="App">
      {/* particles js */}
      {/*  <Particles id="particles" init={handleInit}/>*/}


      {/* navbar */}
      <Navbar/>

      {/* main page content */}
        <div className='App__main-page-content'>
            <Routes>
                <Route index path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/resume' element={<Resume/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/contact' element={<Contact/>}/>

            </Routes>
        </div>


    </div>
  );
}

export default App;
