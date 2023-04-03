import React, { useEffect, useRef } from "react"
import { Tooltip } from "bootstrap";

const ProjectItem = (props) => {
    const firstTooltipRef = useRef();
    const secondTooltipRef = useRef();
    useEffect(() => {
        new Tooltip(firstTooltipRef.current, {
            title: "Show Project!",
            placement: 'top',
            trigger: 'hover',
            offset: "0,6",
        })
        new Tooltip(secondTooltipRef.current, {
            title: "Show a Code!",
            placement: 'top',
            trigger: 'hover',
            offset: "0,6",
        })
    }, [])
    return (
        <>


            <div className="col-12 col-xxl-4 mx-auto col-md-6 col-sm-12 flip-card">


                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={props.imgUrl} alt="" srcset="" />

                    </div>
                    <div className="flip-card-back position-relative">
                        <img src={props.imgUrl} alt="" srcset="" />
                        <div className="bg-img-back position-absolute">
                            <a href={props.projectLink} ref={firstTooltipRef} target={"_blank"} rel="noopener noreferrer">
                                <i class="fa-regular fa-eye "></i>
                            </a>
                            <a href={props.githubLink} target={"_blank"} ref={secondTooltipRef} rel="noopener noreferrer"><i class="fa-regular fa-file-code"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectItem