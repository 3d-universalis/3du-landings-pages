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
        ];*/

        let services = [
            {featureIconName: 'icon-circle-compass', featureTitle: 'Design', featureDescription: 'Optimisons vos plans techniques pour l\'impression 3D et ajoutez-y des éléments de décor et des modèles réduits.'},
            {featureIconName: 'icon-gears', featureTitle: 'Impression 3D', featureDescription: 'Produisez une maquette à partir de vos plans techniques parmi un vaste choix de matériau.'},
            {featureIconName: 'icon-tools-2', featureTitle: 'Projet d\'urbanisme', featureDescription: 'Scannez un lieu ou quartier existant afin d\'y apposer votre maquette au centre.'},
            {featureIconName: 'icon-tools', featureTitle: 'Type de projet', featureDescription: 'Réalisez des maquettes de concours, des maquette d\'étude ou des projets finis.'},
            {featureIconName: 'icon-expand', featureTitle: 'Personnalisation', featureDescription: 'Peignez-là avec des couleurs vives ou de discrètes nuances.'},
            {featureIconName: 'icon-global', featureTitle: 'Envoie rapide', featureDescription: 'Recevez votre maquette dans des délais express.'},
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
                                <span className="header-number"><span className="icon-phone"></span>  +1 438-828-1722 </span><a href="javascript:;" className="buy-btn goToContact" >Nous contacter</a>
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
                                <a href="javascript:;" className="buy-btn goToContact">Demandez un devis</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Hero End */}
                    <div className="feature-section section bg-gray pt--50 pb--50">
                        <div className="container">
                            <div className="row">
                                <div className="col-12" dangerouslySetInnerHTML={{__html:  this.props.landingDetails.industryDetails}}/>
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
                    {/* Footer Section End */}  

                </div>
            </div>
        )
    }
}




export default QuoteLanding;

