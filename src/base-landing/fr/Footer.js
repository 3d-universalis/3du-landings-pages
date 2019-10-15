import React , { Component } from "react";
class Footer extends Component {
    render(){
        return(
            <div className="footer-section section pt--65 pb--50 overlay bg-img" id="contact" data-bg="assets/img/landing/3dprinter-bg.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1>Façonnez votre révolution</h1>
                                    <a className="buy-btn float-right goToContact" href="javascript:;">Nous contactez</a>
                                </div>
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







