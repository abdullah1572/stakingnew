import React from 'react';
import './footer.scss';
const Footer = () => {
    return (
        <>

            <section className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="inner-rights ptb20">
                                <p className="grey" style={{ fontFamily: "Ink Free, Times, serif", fontSize: "15px", color: "white" }}>©2021 - MetaNFT. All Rights Reserved</p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="inner-rights ptb20">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <div className="inner-side">
                                            <a className="" style={{ fontFamily: "Ink Free, Times, serif", fontSize: "15px", color: "white" }}>Terms of Service</a>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="inner-side" style={{ fontFamily: "Ink Free, Times, serif", fontSize: "25px", color: "white" }}>
                                            |
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <div className="inner-side">
                                            <a className="" style={{ fontFamily: "Ink Free, Times, serif", fontSize: "15px", color: "white" }}>Privacy Policy</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;
