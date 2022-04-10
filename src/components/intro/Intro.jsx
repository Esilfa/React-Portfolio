import './intro.css'
import Typed from "react-typed"


export default function intro() {
    return (
        <div className="header-waper">

            <div className='intro' id="intro">

                <div className="imgcontainer">
               {/* <img src={require('../../assets/profile-img.png')} alt="" />  */}
                   
                </div>
               
                <h1
                    typeSpeed={50}
                    backSpeed={40}
                    loop>Hello, I'm Steph! </h1>
                <Typed
                    className="typed-text"
                    strings={["Front End Web Developer "]}
                    typeSpeed={70}
                    backSpeed={80}
                    loop

                />
                <a href="#contact" className='btm-main-offer'> Contact me!</a>

            </div>


        </div>

    )
}
