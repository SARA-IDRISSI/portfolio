import React from "react";
const Contact = () => {
    return (
        <div className="container pb-5 contact-us" data-aos="zoom-in-up" id="contact">
            <h1 className="pb-4">Contact Us</h1>
            <div className="text-center">
                <div className="lign mx-auto"></div>
            </div>
            <form className="Form container">
                <div className="col-12 row gx-1">
                    <div className="col-12 col-md-6 ">
                        <input type="text" className="col-12" placeholder="Your Name" required />
                    </div>
                    <div className="col-12 col-md-6">
                        <input type="email" className="col-12" placeholder="Email" required />
                    </div>
                    <input type="text" className="col-12" placeholder="Subject" required />
                    <textarea name="" className="col-12" id="" rows="10" placeholder="Message" required></textarea>
                </div>
                <div className="btn-form">
                    <input type="submit" value="Envoyer" />
                </div>

            </form>
        </div>
    )
}

export default Contact;
