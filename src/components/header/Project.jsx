import React, { useEffect, useState } from "react";

import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../../config/firebase";

import ProjectItem from "./ProjectItem";

const projects = [{
    imgUrl: "img/ecomerce.png",
    projectLink: "https://sara-idrissi.github.io/E-commerce/",
    githubLink: "https://github.com/SARA-IDRISSI/E-commerce",
    type: "bootstrap"
},
{
    imgUrl: "img/portfolio.png",
    projectLink: "https://sara-idrissi.github.io/portgolioBootstrap/",
    githubLink: "https://sara-idrissi.github.io/portgolioBootstrap/",
    type: "bootstrap"
},
{
    imgUrl: "img/calculatrice.png",
    projectLink: "https://sara-idrissi.github.io/Calculatrice/",
    githubLink: "https://github.com/SARA-IDRISSI/Calculatrice",
    type: "javascript"
},
{
    imgUrl: "img/jeu.png",
    projectLink: "https://sara-idrissi.github.io/jeu-devinette/",
    githubLink: "https://github.com/SARA-IDRISSI/jeu-devinette",
    type: "javascript"
},
{
    imgUrl: "img/farkify.png",
    projectLink: "https://sara-idrissi.github.io/project-forkify/",
    githubLink: "https://github.com/SARA-IDRISSI/project-forkify",
    type: "javascript"
},
{
    imgUrl: "img/github.png",
    projectLink: "https://sara-idrissi.github.io/Project-gitHub/",
    githubLink: "https://github.com/SARA-IDRISSI/Project-gitHub",
    type: "javascript"
}, {
    imgUrl: "img/trello.png",
    projectLink: "https://sara-idrissi.github.io/TRELLO/",
    githubLink: "https://github.com/SARA-IDRISSI/TRELLO",
    type: "html/css/sass"
    // }, {
    //     imgUrl: "img/cv.png",
    //     projectLink: "",
    //     githubLink: "",
    //     type: "html/css/sass"
    // }, {
}, {
    imgUrl: "img/camp.png",
    projectLink: "https://sara-idrissi.github.io/camp-complete/",
    githubLink: "https://github.com/SARA-IDRISSI/camp-complete",
    type: "html/css/sass",
}, {
    imgUrl: "img/pic classy.png",
    projectLink: "https://github.com/SARA-IDRISSI/ecomerceCaftan",
    githubLink: "https://github.com/SARA-IDRISSI/ecomerceCaftan",
    type: "php/laravel",

}]
const Project = () => {
    const [myProjects, setMyProjects] = useState(projects);

    useEffect(() => {
        // onSnapshot(collection(firestore, "projects"), (querySnapshot) => {
        //     const firebaseProjects = [];
        //     querySnapshot.forEach(project => {
        //         firebaseProjects.push(project.data());
        //     })
        //     setMyProjects(firebaseProjects);
        // })

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
                <button onClick={() => handleClick("php/laravel")}>PHP/LARAVEL</button>

            </div>
            <div className="row gy-3">
                {myProjects.map(ele => <ProjectItem imgUrl={ele.imgUrl} projectLink={ele.projectLink} githubLink={ele.githubLink} />)}

            </div>
        </div>
    )
}
export default Project