import React, { Component } from "react";
import Features from './Features';
import Whitepapers from './Suggestions';

class QuoteLanding extends Component{
    render(){

        let features = [
            {featureIconName: 'icon-genius', featureTitle: 'Rapid prototypage and samples', featureDescription: 'Get your prototype or sample shipped within a week.'},
            {featureIconName: 'icon-mobile', featureTitle: '3D Printing', featureDescription: 'Company that offers design and build services for you from initial sketches to the final production Design repeatable growth.'},
            {featureIconName: 'icon-profile-male', featureTitle: 'Post-processing', featureDescription: 'Ready to use on arrival, post-processing is also available for most material. Post-processing services can include sanding, polishing, painting, centrifugal polishing, bead blasting or assembly.'},
            {featureIconName: 'icon-beaker', featureTitle: 'Designs', featureDescription: 'We accept all the technical plans and files already available. If required, we can assist in the CAD file designing process for model validation, either by the creation and/or modification of product files.'},
            {featureIconName: 'icon-puzzle', featureTitle: 'Metrology', featureDescription: 'We can duplicate existing parts with 3D scanning in order to create the needed CAD files.'},
            {featureIconName: 'icon-puzzle', featureTitle: 'Fast Shipping', featureDescription: 'Fast shipping with insurance and the possibility to drop-ship directly to your customer.'},
        ];


        let whitePapersGlobal = [
            {imgUrl: '//s3.envato.com/files/186369241/preview.__large_preview.png', whitePaperLink:'/whitepaper1', suggestionTitle: 'Automotive - Lorem Ipsum Oh yeah'},

            {imgUrl: '//s3.envato.com/files/223832857/preview.__large_preview.jpg', whitePaperLink:'/whitepaper2', suggestionTitle: 'Aeronautic - Oh yeah Lorem Ipsum'},

            {imgUrl: '//s3.envato.com/files/255284479/01_preview_sotare.__large_preview.png', whitePaperLink:'/whitepaper3', suggestionTitle: 'Medical - Oh Landing Lorem Ipsum 4'}
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
                                <a href="/">
                                    <img src="assets/images/landing/logo.png" className="img-fluid" alt="" />
                                    <img src="assets/images/landing/logo-2.png" alt="" className="sticky-logo img-fluid" /></a>
                            </div>
                            {/* Logo */}
                            <div className="col-6 text-right">
                                <a className="buy-btn" href="/">Request a quote</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Header End */}

                    {/* Start Hero */}
                    <div className="hero-section section overlay landing-hero-bg">
                        <div className="container">
                        <div className="row">
                            <div className="hero-content text-center col-12">
                                <h1><strong>From product development to industrial 3D manufacturing, scaled to fit your business.
</strong>Your 3D Manufacturing Partner</h1>
                                <a className="buy-btn" href="#demo">Get a Quote</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Hero End */}

                    {/* Features Section Start */}
                    <Features features = {features} />
                    {/* Features Section End */}

                    {/* Suggestions HTML Section Start */}
                    <Whitepapers background="" suggestions = {whitePapersGlobal} />
                    {/* Suggestions HTML Section End */}

                    {/* Footer Section Start */}
                    <div className="footer-section section pt--65 pb--50 overlay bg-img" data-bg="assets/img/landing/3dprinter-bg.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1>Shape your revolution</h1>
                                    <a className="buy-btn float-right" href="//themeforest.net/user/hastech/portfolio">Get a quote now</a>
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

