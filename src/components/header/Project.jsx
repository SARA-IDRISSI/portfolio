import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
const projects = [{
    imgUrl: "img/ecomerce.png",
    projectLink: "",
    githubLink: "",
    type: "bootstrap"
},
{
    imgUrl: "img/portfolio.png",
    projectLink: "",
    githubLink: "",
    type: "bootstrap"
},
{
    imgUrl: "img/calculatrice.png",
    projectLink: "",
    githubLink: "",
    type: "javascript"
},
{
    imgUrl: "img/jeu.png",
    projectLink: "",
    githubLink: "",
    type: "javascript"
},
{
    imgUrl: "img/farkify.png",
    projectLink: "",
    githubLink: "",
    type: "javascript"
},
{
    imgUrl: "img/github.png",
    projectLink: "",
    githubLink: "",
    type: "javascript"
}, {
    imgUrl: "img/trello.png",
    projectLink: "",
    githubLink: "",
    type: "html/css/sass"
}, {
    imgUrl: "img/cv.png",
    projectLink: "",
    githubLink: "",
    type: "html/css/sass"
}, {
    imgUrl: "img/camp.png",
    projectLink: "",
    githubLink: "",
    type: "html/css/sass",

}]
const Project = () => {
    const [myProjects, setMyProjects] = useState(projects);

    const handleClick = (type) => {
        if (type === "all") {
            setMyProjects(projects);
        } else {
            const filteredProjects = projects.filter(project => project.type === type);
            setMyProjects(filteredProjects);
        }
    }
    return (
        <div className="container" data-aos="zoom-in-up" id="mes project">
            <h1 className="title-project">MES PROJETS</h1>
            <div className="menu-project">
                <button onClick={() => handleClick("all")}>ALL</button>
                <button onClick={() => handleClick("html/css/sass")}>HTML/CSS/SASS</button>
                <button onClick={() => handleClick("bootstrap")}>BOOTSTRAP</button>
                <button onClick={() => handleClick("javascript")}>JAVASCRIPT</button>
            </div>
            <div className="row gy-3">
                {myProjects.map(ele => <ProjectItem imgUrl={ele.imgUrl} projectLink={ele.projectLink} githubLink={ele.githubLink} />)}

            </div>
        </div>
    )
}
export default Project