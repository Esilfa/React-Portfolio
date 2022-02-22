import './topbar.css'




export default function topbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow-lg">
            <div className="container">
                <a className="navbar-brand " > Estefany Silfa</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/projets'>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact'>Contact</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}
