import React from "react";
const Header = () => {

    return (
        <>
            <div className=" headerr  " id="acceuil">
                {/* <div className="mypic">
                    <img src="../../../public/img/mypic.png" alt="" />
                </div> */}
                <div className="text-boox">
                    <h3>je suis,</h3>
                    <h1 className="typing">sara idrissi </h1>

                    <h2>Full stack web developer</h2>


                </div>

                <div className="social">
                    <div className="icon git">
                        <a href="https://github.com/SARA-IDRISSI" target={"_blank"} rel="noopener noreferrer"><i className="bi bi-github"></i></a>

                    </div>
                    <div className="icon in">
                        <a href="https://www.linkedin.com/in/sara-idrissi-ba7369266/"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <div className="icon mail">
                        <a href="mailto:idrissisara2209@gmail.com"><i className="bi bi-envelope"></i></a>

                    </div>


                </div>

            </div>
        </>
    )
}
export default Header 