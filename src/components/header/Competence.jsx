import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Competence = () => {
    return (
        <div data-aos="zoom-in-up" >
            <h1 className="title-competence" id="competénce">mes compétences à votre service</h1>
            <div className="text-center position-relative ">
                <div className="lign mx-auto"></div>
            </div>


            <div className="competence-mobile d-md-none">
                <Carousel showThumbs={false}>
                    <img src="img/css-removebg-preview.png" alt="" srcSet="" style={{ width: "300px", height: "300px" }} className="mySlides" />

                    <img src="img/b-removebg-preview.png" alt="" srcSet="" style={{ width: "300px", height: "300px" }} className="mySlides" />
                    {/* <img src="img/f-removebg-preview.png" alt="" srcSet="" style={{ width: "300px", height: "300px" }} className="mySlides" /> */}

                    <img src="img/html-removebg-preview.png" alt="" srcSet="" style={{ width: "300px", height: "300px" }} className="mySlides" />

                    <img src="img/phpp-removebg-preview.png" alt="" srcSet="" style={{ width: "300px", height: "300px" }} className="mySlides" />

                    <img src="img/js-removebg-preview.png" alt="" srcSet="" style={{ width: "300px", height: "300px" }} className="mySlides" />

                    <img src="img/sasss-removebg-preview.png" alt="" srcSet="" style={{ width: "300px", height: "300px" }} className="mySlides" />
                    <img src="img/react-removebg-preview.png" alt="" srcSet="" style={{ width: "300px", height: "300px" }} className="mySlides" />
                    <img src="img/mysql.png" alt="" srcSet="" style={{ width: "300px", height: "300px" }} className="mySlides" />
                    {/* <img src="img/jqq-removebg-preview.png" alt="" srcSet="" style={{ width: "300px", height: "300px" }} className="mySlides" /> */}

                </Carousel>
            </div>




            <div className="competence d-none d-md-flex">
                <div className="box">
                    <span style={{ "--i": 1 }}>
                        <img src="img/css-removebg-preview.png" alt="" srcSet="" />
                    </span>
                    <span style={{ "--i": 2 }}>
                        <img src="img/b-removebg-preview.png" alt="" srcSet="" />
                    </span>
                    {/* <span style={{ "--i": 3 }}>
                        <img src="img/f-removebg-preview.png" alt="" srcSet="" />
                    </span> */}
                    <span style={{ "--i": 3 }}>
                        <img src="img/html-removebg-preview.png" alt="" srcSet="" />
                    </span>
                    <span style={{ "--i": 4 }}>
                        <img src="img/phpp-removebg-preview.png" alt="" srcSet="" />
                    </span>
                    <span style={{ "--i": 5 }}>
                        <img src="img/js-removebg-preview.png" alt="" srcSet="" />
                    </span>
                    <span style={{ "--i": 6 }}>
                        <img src="img/sasss-removebg-preview.png" alt="" srcSet="" />
                    </span>
                    <span style={{ "--i": 7 }}>
                        <img src="img/react-removebg-preview.png" alt="" srcSet="" />
                    </span>
                    <span style={{ "--i": 8 }}>
                        <img src="img/mysql.png" alt="" srcSet="" />
                    </span>
                    {/* <span style={{ "--i": 10 }}>
                        <img src="img/jqq-removebg-preview.png" alt="" srcSet="" />
                    </span> */}

                </div>

            </div >
        </div>
    )
}
export default Competence