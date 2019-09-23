import React, { Component } from "react";
import Features from './Features';
import Footer from './Footer';

class QuoteLanding extends Component{
    render(){
        /*
        let servicesMASTER = [
            {featureIconName: 'icon-linegraph', featureTitle: 'Rapid prototypage and samples', featureDescription: 'Get your prototype or sample shipped within a week.'},
            {featureIconName: 'icon-gears', featureTitle: '3D Printing', featureDescription: 'Duplicate existing parts and products with 3D scanning technology in order to create your CAD files and virtual inventory.'},
            {featureIconName: 'icon-tools-2', featureTitle: 'Post-processing', featureDescription: 'Ready to use on arrival, post-processing is available for most material, further optimizing production to your needs.'},
            {featureIconName: 'icon-tools', featureTitle: 'Designing', featureDescription: 'From existing technical plans or files already available, we offer model validation and assistance in creation and/or modification of CAD files.'},
            {featureIconName: 'icon-circle-compass', featureTitle: 'Metrology', featureDescription: 'Duplicate existing parts and products with 3D scanning in order to create your CAD files and virtual inventory.'},
            {featureIconName: 'icon-global', featureTitle: 'Fast Shipping', featureDescription: 'Insured fast shipping with the possibility to drop-ship directly to your customer.'},
        ];  */ 

        let services = [
            {featureIconName: 'icon-circle-compass', featureTitle: 'Design', featureDescription: 'Optimize your technical plans for 3D printing and add decor elements and scale models.'},
            {featureIconName: 'icon-gears', featureTitle: '3D Printing', featureDescription: 'Produce a model from your technical plans from a wide range of materials.'},
            {featureIconName: 'icon-tools-2', featureTitle: 'Urban planning project', featureDescription: 'Scan an existing area or neighborhood to put your model in the center.'},
            {featureIconName: 'icon-tools', featureTitle: 'Type of project', featureDescription: 'Make models of contests, study models or finished projects.'},
            {featureIconName: 'icon-expand', featureTitle: 'Customization', featureDescription: 'Paint with bright colors or discreet shades.'},
            {featureIconName: 'icon-global', featureTitle: 'Fast Shipping', featureDescription: 'Receive your model in express time.'},
        ];

        return(
            <div>
                <div className="landing-page-wrapper">

                    {/* Start Header */}
                    <div className="header-section section sticker">
                        <div className="container">
                        <div className="row justify-content-between align-items-center">
                            {/* Logo */}
                            <div className="logo col-6 text-left">
                                <a href="https://3duniversalis.com">
                                    <img src="/assets/images/landing/logo.png" className="img-fluid" alt="" />
                                    <img src="/assets/images/landing/logo-2.png" alt="" className="sticky-logo img-fluid" /></a>
                            </div>
                            {/* Logo */}
                            <div className="col-6 text-right">
                                <span className="header-number"><span className="icon-phone"></span>  +1 438-828-1722 </span><a href="javascript:;" className="buy-btn goToContact" >Request a quote</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Header End */}

                    {/* Start Hero */}
                    <div className="hero-section section overlay landing-hero-bg" style={{ backgroundImage: "url(" + this.props.landingDetails.bgImgPath + ")"}}>
                        <div className="container">
                        <div className="row">
                            <div className="hero-content text-center col-12">
                                <h1 dangerouslySetInnerHTML={{__html:  this.props.landingDetails.header}}></h1>
                                <a href="javascript:;" className="buy-btn goToContact">Get a Quote</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Hero End */}
                    <div>
                    <div className="feature-section section bg-gray pt--50">
                        <div className="container">
                            <div className="row">
                                <div className="col-12" dangerouslySetInnerHTML={{__html:  this.props.landingDetails.industryDetails}}/>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* Features Section Start */}
                    <Features features = {services} />
                    {/* Features Section End */}
                    <Footer horizontal="horizontal" />
                    {/* Footer Section Start */}
                    <div className="footer-section section pt--65 pb--50 overlay bg-img" id="contact" data-bg="assets/img/landing/3dprinter-bg.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1>Shape your revolution</h1>
                                    <a className="buy-btn float-right goToContact" href="javascript:;">Contact Us</a>
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
                    {/* Footer Section End */}  

                </div>
            </div>
        )
    }
}




export default QuoteLanding;

