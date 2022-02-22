import './intro.css'
import Typed from "react-typed"


export default function intro() {
    return (
        <div className="header-waper">

            <div className='intro'>

                <h1
                    typeSpeed={50}
                    backSpeed={40}
                    loop>Hello, I'm Estefany! </h1>
                <Typed
                    className="typed-text"
                    strings={["Front End Web Developer "]}
                    typeSpeed={70}
                    backSpeed={80}
                    loop

                />
                <a href="#contactsID" className='btm-main-offer'> Contact me!</a>




            </div>


        </div>

    )
}
