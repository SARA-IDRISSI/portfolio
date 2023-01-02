import React from "react";
const Header = () => {

    return (
        <>
            <div className=" headerr " id="acceuil">

                <div className="text-boox">
                    <h3>je suis,</h3>
                    <h1 className="typing">sara idrissi </h1>

                    <h2>Full stack web developer</h2>


                </div>

                <div className="social">
                    <div className="icon git">
                        <a href="www.google.com"><i className="bi bi-github"></i></a>

                    </div>
                    <div className="icon in">
                        <a href="www.google.com"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <div className="icon mail">
                        <a href="mailto:"><i className="bi bi-envelope"></i></a>

                    </div>


                </div>

            </div>
        </>
    )
}
export default Header 