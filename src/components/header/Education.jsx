import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";

import { firestore } from "../../config/firebase";

const Education = () => {
    const [myEducations, setMyEducations] = useState([]);
    const [myExperience, setMyExperience] = useState([]);


    useEffect(() => {
        onSnapshot(collection(firestore, "educations"), (querySnapshot => {
            const firebaseEducations = [];
            querySnapshot.forEach(educ => {
                firebaseEducations.push(educ.data());
            })
            setMyEducations(firebaseEducations)
        })
        )

        onSnapshot(collection(firestore, "experiences"), (querySnapshot => {
            const firebaseExperience = [];
            querySnapshot.forEach(exper => {
                firebaseExperience.push(exper.data());
            })
            setMyExperience(firebaseExperience)
        })
        )
    }, []);
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
                        {myExperience.map(experience => <div className="col-12 borderr-start ps-5 pb-4 position-relative">
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
                        {myEducations.map(education => <div className="col-12 borderr-start ps-5 pb-4 position-relative">
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