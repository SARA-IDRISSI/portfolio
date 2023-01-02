import React from "react";

const data = {
    experiences: [
        {
            title: "Stagiaire Développement Web",
            company: "Ministère de la Justice service Informatique / ASP.NET , C#",
            date: "2018-2019",
            description: "Création d'une application Web de suivi des courriers du ministère (numéro de courrier, sujet de courrier, émetteurs de courrier, destinataire de courrier)"

        },
        {
            title: "Stagiaire Développement Web",
            company: "Ministère de la justice Service Tahdit  Développement web  / ASP MVC , C#",
            date: "2017-2018",
            description: "Création d’une application web pour renseignement des informations et des tâches des employeurs du ministère."
        }
    ],
    educations: [
        {
            title: "",
            school: "Full-Stack Web Developer 3W Academy – Rabat / Équivalent Bac +2 en europe",
            date: "2022",
            description: ""
        },
        {
            title: "  ",
            school: "Institut spécialisé de technologie appliquée chmaou",
            date: "2017-2018",
            description: "2ème année Technicien Spécialise en Développement Informatique"
        },
        {
            title: "",
            school: "Lycée Bou Abid",
            date: "2014-2015",
            description: "Baccalauréat en Sciences Expérimentales"
        }
    ]
}
const Education = () => {
    return (
        <div className="container" id="éducation">
            <div className="row gx-5 edu">
                <h1 className="educ-title">éducation</h1>
                <div className="text-center">
                    <div className="lign mx-auto"></div>
                </div>
                <div className="col-12 col-lg-6 expriences ">

                    <h1><i class="bi bi-mortarboard-fill"></i> EXPERIENCE PROFESSIONNELLE</h1>
                    <div data-aos="fade-right" className="col-12">
                        {data.experiences.map(experience => <div className="col-12 borderr-start ps-5 pb-4 position-relative">
                            <div className="experience col-12  p-4">
                                <div className="circle"></div>
                                <div className="line-border"></div>
                                <p className="title">{experience.title} </p>
                                <h3> {experience.company}</h3>
                                <p className="date">{experience.date}</p>
                                <p className="desc"> {experience.description}</p>
                            </div>
                        </div>)}
                    </div>

                </div>

                <div className="col-12 col-lg-6 expriences">
                    <h1><i class="bi bi-mortarboard-fill"></i> FORMATION </h1>
                    <div data-aos="fade-left" className="col-12">
                        {data.educations.map(education => <div className="col-12 borderr-start ps-5 pb-4 position-relative">
                            <div div className="experience col-12  p-4" >
                                <div className="circle"></div>
                                <div className="line-border"></div>
                                <h2>{education.title} </h2>
                                <h3> {education.school}
                                </h3>
                                <p className="date">{education.date} </p>

                                <p className="desc"> {education.description}
                                </p>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div >
        </div >
    )
}
export default Education