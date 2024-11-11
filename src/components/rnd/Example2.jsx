import React from 'react'

function Example2() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark p-0 navbar-dark bg-dark">
                {/* Nav Toggle Button */}
                <button className="navbar-toggler my-2" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                {/* Nav Links */}
                <div className="collapse navbar-collapse justify-content-center lh-lg" id="main_nav">
                    <ul className="navbar-nav p-3 p-md-0">
                        <li className="nav-item"> <a className="nav-link active" href="#">Home</a> </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pages </a>
                            {/* Dropdown */}
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">About Us </a></li>
                                {/* Dropdown Megasubmenu */}
                                <li>
                                    <a className="dropdown-item" href="#"> Dropdown Content<strong className="float-end">»</strong> </a>
                                    <div className="submenu dropdown-menu mega-submenu p-3">
                                        <span>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </span>
                                    </div>
                                </li>
                                <li><a className="dropdown-item" href="#">Login </a></li>
                            </ul>
                        </li>
                        {/* Mega Menu */}
                        <li className="nav-item dropdown ktm-mega-menu">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Mega Menu</a>
                            {/* Mega Menu */}
                            <div className="dropdown-menu mega-menu p-3">
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </span>
                            </div>
                        </li>
                        {/* Tree Menu */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Treeview menu</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#"> Dropdown item 1 </a></li>
                                <li>
                                    <a className="dropdown-item" href="#"> Dropdown item 2 <strong className="float-end">»</strong></a>
                                    {/* Drop Down */}
                                    <ul className="submenu dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Submenu item 1</a></li>
                                        <li>
                                            <a className="dropdown-item" href="#">Submenu item 3 <strong className="float-end">»</strong> </a>
                                            {/* Drop Down */}
                                            <ul className="submenu dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Multi level 1</a></li>
                                                <li><a className="dropdown-item" href="#">Multi level 2</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Submenu item 4</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Example2