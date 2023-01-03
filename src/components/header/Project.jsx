import React, { useEffect, useState } from "react";

import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../../config/firebase";

import ProjectItem from "./ProjectItem";

const projects = [{
    imgUrl: "img/ecomerce.png",
    projectLink: "",
    githubLink: "",
    type: "bootstrap"
},
{
    imgUrl: "img/portfolio.png",
    projectLink: "https://sara-idrissi.github.io/portgolioBootstrap/",
    githubLink: "",
    type: "bootstrap"
},
{
    imgUrl: "img/calculatrice.png",
    projectLink: "https://sara-idrissi.github.io/Calculatrice/",
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
    projectLink: "https://sara-idrissi.github.io/TRELLO/",
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
    const [myProjects, setMyProjects] = useState([]);

    useEffect(() => {
        onSnapshot(collection(firestore, "projects"), (querySnapshot) => {
            const firebaseProjects = [];
            querySnapshot.forEach(project => {
                firebaseProjects.push(project.data());
            })
            setMyProjects(firebaseProjects);
        })

    }, []);

    const handleClick = (type) => {
        if (type === "all") {
            setMyProjects(projects);
        } else {
            const filteredProjects = projects.filter(project => project.type === type);
            setMyProjects(filteredProjects);
        }
    }
    return (
        <div className="container" data-aos="fade-left" id="mes project">
            <h1 className="title-project">MES PROJETS</h1>
            <div className="text-center">
                <div className="lign mx-auto"></div>
            </div>
            <div className="menu-project pt-5">
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