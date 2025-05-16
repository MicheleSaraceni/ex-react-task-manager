import { Link, NavLink } from "react-router-dom"

export default function HeaderComponent() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page">TaskList</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/add" className="nav-link">AddTask</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}