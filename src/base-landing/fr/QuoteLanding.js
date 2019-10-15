import React, { Component } from "react";
import Header from './Header';
import Services from './Services';
import ContactForm from './ContactForm';
import Footer from './Footer';
import HeroBanner from "./HeroBanner";
import Industry from "./Industry";

class QuoteLanding extends Component{
    render(){

        return(
            <div>
                <div className="landing-page-wrapper">
                    <Header/>
                    {this.props.modules.heroBanner && <HeroBanner bannerDetails = {this.props.modules.heroBanner}/>}
                    {this.props.modules.services && <Industry industryDetails = {this.props.modules.industryDetails} />}                         
                    {this.props.modules.services && <Services services = {this.props.modules.services} />}                   
                    {this.props.modules.hasContactForm && <ContactForm/>}
                    <Footer/>
                </div>
            </div>
        )
    }
}




export default QuoteLanding;

