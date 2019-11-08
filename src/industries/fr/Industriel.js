import React ,  { Component } from "react";
import BaseLanding from '../../base-landing/fr/QuoteLanding';


class Scan3D extends Component {
  render(){
      let industryServices = [
        {featureIconName: 'icon-circle-compass', featureTitle: 'Design', featureDescription: 'Optimisons vos plans techniques pour l\'impression 3D et ajoutez-y des éléments de décor et des modèles réduits.'},
        {featureIconName: 'icon-gears', featureTitle: 'Impression 3D', featureDescription: 'Produisez une maquette à partir de vos plans techniques parmi un vaste choix de matériau.'},
        {featureIconName: 'icon-tools-2', featureTitle: 'Projet d\'urbanisme', featureDescription: 'Scannez un lieu ou quartier existant afin d\'y apposer votre maquette au centre.'},
        {featureIconName: 'icon-tools', featureTitle: 'Type de projet', featureDescription: 'Réalisez des maquettes de concours, des maquette d\'étude ou des projets finis.'},
        {featureIconName: 'icon-expand', featureTitle: 'Personnalisation', featureDescription: 'Peignez-là avec des couleurs vives ou de discrètes nuances.'},
        {featureIconName: 'icon-global', featureTitle: 'Envoie rapide', featureDescription: 'Recevez votre maquette dans des délais express.'},
      ];
  

      // @todo: Work around until we can choose the position of the modules.
      let customParagraph1 = 
      {
        title:"Technologies et matériaux ",
        description: 'Nous fabriquons dans plus de 200 types de matériaux différents (métaux et polymères/plastiques) en utilisant une dizaine de technologies variées. Soyez rassurés, des experts de notre équipe se feront le plaisir de vous conseiller à propos des matériaux qui conviendront le mieux à vos projets.',
      };
  
      let customParagraph2 = 
      {
        title:"À Montréal... et partout au Québec ! ",
        description: 'Nous offrons aux entreprises un <b>service clés en main</b> relié à l\'impression 3D, au prototypage rapide et à la production.',
      };
  
      let heroBannerDetails =
      {
        bgImgPath: '/assets/images/landing/scan-reproduction.jpg',
        header: '<strong>Service d’impression 3D industriel</strong>L\'innovation de demain pour vos projets d\'aujourd\'hui',
      };
  
      // Always keep "Modules" at the end. (Last to initialize.)
      let modules =
      {
        heroBanner: heroBannerDetails,
        customParagraph1: customParagraph1,
        customParagraph2: customParagraph2,
        services: industryServices,
        hasContactForm: true,
        hasPartnersList: true,
        hasPrintingProcess: true,
        techAndMaterials: false,
      };

    return(
        <div>
            {/* Header Navbar */}
            <BaseLanding modules={modules} />
        </div>
    )
  }
}

export default Scan3D;














