import React ,  { Component } from "react";
import BaseLanding from '../../base-landing/fr/QuoteLanding';


class ArchitectureIndustry extends Component {
  render(){
    let industryServices = [
      {featureIconName: 'icon-circle-compass', featureTitle: 'Design', featureDescription: 'Optimisons vos plans techniques pour l\'impression 3D et ajoutez-y des éléments de décor et des modèles réduits.'},
      {featureIconName: 'icon-gears', featureTitle: 'Impression 3D', featureDescription: 'Produisez une maquette à partir de vos plans techniques parmi un vaste choix de matériau.'},
      {featureIconName: 'icon-tools-2', featureTitle: 'Projet d\'urbanisme', featureDescription: 'Scannez un lieu ou quartier existant afin d\'y apposer votre maquette au centre.'},
      {featureIconName: 'icon-tools', featureTitle: 'Type de projet', featureDescription: 'Réalisez des maquettes de concours, des maquette d\'étude ou des projets finis.'},
      {featureIconName: 'icon-expand', featureTitle: 'Personnalisation', featureDescription: 'Peignez-là avec des couleurs vives ou de discrètes nuances.'},
      {featureIconName: 'icon-global', featureTitle: 'Envoie rapide', featureDescription: 'Recevez votre maquette dans des délais express.'},
    ];
  
      let customParagraph2 = 
        {
          description: '<p style="font-size: 17px;">Nous offrons aux entreprises un <b>service clés en main</b> d\'impression 3D, pour la <b>création de maquette</b>.<br>Que vous soyez architecte, urbaniste, ou maquettiste ou chargé de projet, vous avez tout à gagner. <br><br>Procurez-vous un <b>avantage concurrentiel</b> grâce à une maquette d\'un <b>esthétisme impeccable produite à une vitesse inégalée.</b> </p>',
        }
      ;
  
        let heroBannerDetails =
        {
          bgImgPath: '/assets/images/landing/architecture1.jpg',
          header: '<strong>Votre partenaire créatif</strong>L\'innovation de demain pour vos projets d\'aujourd\'hui',
        }
  
        // Always keep "Modules" at the end. (Last to initialize.)
        let modules =
        {
          heroBanner: heroBannerDetails,
          customParagraph2: customParagraph2,
          services: industryServices,
          hasContactForm: true,
          hasPartnersList: true,
          hasPrintingProcess: true,
          techAndMaterials: true,
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














