import React ,  { Component } from "react";
import BaseLanding from '../../base-landing/fr/QuoteLanding';
import Services2 from '../../base-landing/fr/Services';


class ArchitectureIndustry extends Component {
  render(){
    let industryServices = [
      {featureIconName: 'icon-linegraph', featureTitle: 'Rapid prototypage and samples', featureDescription: 'Get your prototype or sample shipped within a week.'},
      {featureIconName: 'icon-gears', featureTitle: '3D Printing', featureDescription: 'Duplicate existing parts and products with 3D scanning technology in order to create your CAD files and virtual inventory.'},
      {featureIconName: 'icon-tools-2', featureTitle: 'Post-processing', featureDescription: 'Ready to use on arrival, post-processing is available for most material, further optimizing production to your needs.'},
      {featureIconName: 'icon-tools', featureTitle: 'Designing', featureDescription: 'From existing technical plans or files already available, we offer model validation and assistance in creation and/or modification of CAD files.'},
      {featureIconName: 'icon-circle-compass', featureTitle: 'Metrology', featureDescription: 'Duplicate existing parts and products with 3D scanning in order to create your CAD files and virtual inventory.'},
      {featureIconName: 'icon-global', featureTitle: 'Fast Shipping', featureDescription: 'Insured fast shipping with the possibility to drop-ship directly to your customer.'},
    ];

    let industryDetails = 
      {
        details: '<p style="font-size: 17px;">Nous offrons aux entreprises un <b>service clés en main</b> d\'impression 3D, pour la <b>création de maquette</b>.<br>Que vous soyez architecte, urbaniste, ou maquettiste ou chargé de projet, vous avez tout à gagner. <br><br>Procurerez-vous un <b>avantage concurrentiel</b> grâce à une maquette d\'un <b>esthétisme impeccable produite à une vitesse inégalée.</b> </p>',
      }
    ;

      let heroBannerDetails =
      {
        bgImgPath: '/assets/images/landing/global.jpg',
        header: '<strong>Service d’impression 3D </strong>L\'innovation de demain pour vos projets d\'aujourd\'hui',
      }

      // Always keep "Modules" at the end. (Last to initialize.)
      let modules =
      {
        heroBanner: heroBannerDetails,
        industryDetails: industryDetails,
        services: industryServices,
        hasContactForm: true
      }
      
    return(
        <div>
            {/* Header Navbar */}
            <BaseLanding modules={modules} />
        </div>
    )
  }
}

export default ArchitectureIndustry;














