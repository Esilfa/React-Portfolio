import './intro.css'
import Typed from "react-typed"

export default function intro() {
    return (
        <div className="header-waper">
            <div className='intro'>
                <h1
                typeSpeed={50}
                backSpeed={40}
                loop>Hello! I am Estefany  </h1>
                <Typed 
                className = "typed-text"
                strings={[  "Web developer "  ]}
                typeSpeed={70}
                backSpeed={80}
                loop
                
                />
                
                


            </div>


        </div>

    )
}
