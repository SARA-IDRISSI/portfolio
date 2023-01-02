import React from "react";
const Footer = () => {
    return (
        <>
            <div className="footer position-relative gx-0 row">
                <div className="col-4"></div>
                <div className="col-4">
                    <p>&copy; Copyright Portfolio. All Rights Reserved</p>
                    <p> Designed By <a href="https://github.com/SARA-IDRISSI" className="a">SARA IDRISSI</a></p>

                </div>

                <div className="btn-footer col-4 text-end pe-5 pt-5">
                    <a href="#header" ><i class="fa-solid fa-arrow-up"></i></a>
                </div>
            </div>
        </>
    )
}
export default Footer