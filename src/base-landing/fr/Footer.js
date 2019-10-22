import React , { Component } from "react";
class Footer extends Component {
    render(){
        return(
<<<<<<< HEAD
            <div className="feature-section section bg-gray pb--100">
            <div className="container" id="contact-us">
                <div className="col-lg-12 col-xl-12 offset-xl-12">
                    <div className="contact-inner">
                        <div className="section-title text-center col-12 mb--70">
                                    <h1>Nous Contactez</h1>
                        </div>
                        <form className="contact-form" id="contact-form">
                            Nom
                            <div className="input-box">
                                <input required name="name" type="text" placeholder="Jean Tremblay"/>
                            </div>
                            Courriel
                            <div className="input-box">
                                <input required name="email" type="text" placeholder="nom@exemple.com"/>
                            </div>
                            Téléphone #
                            <div className="input-box">
                            <input required name="phone" type="phone" placeholder="+1 514 123 4567"/>
=======
            <div className="footer-section section pt--65 pb--50 overlay bg-img" id="contact" data-bg="assets/img/landing/3dprinter-bg.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1>Façonnez votre révolution</h1>
                                    <a className="buy-btn float-right goToContact" href="javascript:;">Nous contactez</a>
                                </div>
>>>>>>> genericLP
                            </div>
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 col-xl-4 offset-xl-4">
                                    <div className="footer-links text-center">
                                        <a href="https://www.linkedin.com/company/18952599"><i className="zmdi zmdi-linkedin"></i></a>
                                    </div>
                                    <div className="footer-text text-center">
                                        <span>Copyright © 2019 - <a href="https://3Duniversalis.com">3D Universalis</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}
export default Footer







