import React, { Component } from "react";
import Header from './Header';
import Services from './Services';
import ContactForm from './ContactForm';
import Footer from './Footer';
import HeroBanner from "./HeroBanner";
import Paragraph from "../common/Paragraph";
import PrintingProcess from "./PrintingProcess";
import TechAndMaterials from "./TechAndMaterials";
import Partners from "../common/Partners";

class QuoteLanding extends Component{
    render(){

        return(
            <div>
                <div className="landing-page-wrapper">
                    <Header/>
                    {this.props.modules.heroBanner && <HeroBanner bannerDetails = {this.props.modules.heroBanner}/>}
                    {this.props.modules.customParagraph1 && <Paragraph paragraph = {this.props.modules.customParagraph1} />}    
                    {this.props.modules.customParagraph2 && <Paragraph paragraph = {this.props.modules.customParagraph2} />}                         
                    {this.props.modules.services && <Services services = {this.props.modules.services} />}              
                    {this.props.modules.customParagraph3 && <Paragraph paragraph = {this.props.modules.customParagraph3} />}             
                    {this.props.modules.hasPrintingProcess && <PrintingProcess process = {this.props.modules.hasPrintingProcess} />}  
                    {this.props.modules.techAndMaterials && <TechAndMaterials techAndMaterials = {this.props.modules.techAndMaterials}/>} 
                    {this.props.modules.hasPartnersList && <Partners/>}  
                    {this.props.modules.hasContactForm && <ContactForm/>}
                    <Footer/>
                </div>
            </div>
        )
    }
}




export default QuoteLanding;

