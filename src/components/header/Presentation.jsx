import React from "react";

function DownloadButton() {
    const handleDownload = () => {
        window.open("/documents/cv sara idrissi.pdf", '_blank');
    };

    return (
        <button onClick={handleDownload}>
            Télécharger CV
        </button>
    );
}

const Presentation = () => {
    return (
        <div className="presentation  bg-white" data-aos="zoom-in-up" id="présentation">
            <div className="presen container">
                <h1 className="pb-4">présentation</h1>
                <div className="text-center">
                    <div className="lign mx-auto"></div>
                </div>
                <p>Je suis IDRISSI SARA, aprés l'obtention de mon diplôme en <strong>développent informatique</strong>  et l'experience que j'ai acquise j'ai décidé de rejoindre l'ecole 3W Academy pour apportez la valeur ajoutée que vous recherchez ,  sachant que je passionné par <strong>le Developpement web</strong> et je me basé par ma patience mon calme et ma résilience et la ponctualité,. J'ai créé ce site pour que vous puissiez me connaître personnellement à travers mes projets. Aujourd’hui <strong>je suis à la recherche de nouvelles opportunités</strong>.</p>
                <div className="btn-presen">
                    {/* <button> Télécharger pdf </button> */}
                    <DownloadButton />

                </div>
            </div>

        </div>
    )
}
export default Presentation