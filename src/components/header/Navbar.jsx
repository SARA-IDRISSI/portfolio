import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark text-uppercase bg-dark sticky-top">
            <div className="container navnav">

                <a className="navbar-brand logo" href="#navbar">sara idrissi</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item  mx-1">

                            <a className="nav-link text-white" aria-current="page" href="#acceuil">acceuil</a>

                        </li>
                        <li className="nav-item  mx-1">
                            <a className="nav-link text-white" aria-current="page" href="#présentation">présentation</a>
                        </li>
                        <li className="nav-item  mx-1">
                            <a className="nav-link text-white" aria-current="page" href="#éducation">éducation</a>
                        </li>
                        <li className="nav-item  mx-1">
                            <a className="nav-link text-white" aria-current="page" href="#competénce">competénce</a>
                        </li>
                        <li className="nav-item  mx-1">
                            <a className="nav-link text-white" aria-current="page" href="#mes project">projets</a>
                        </li>
                        <li className="nav-item  mx-1">
                            <a className="nav-link text-white" href="#contact">contact</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
export default Navbar