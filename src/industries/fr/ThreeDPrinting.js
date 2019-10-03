import React ,  { Component } from "react";
import BaseLanding from '../../base-landing/fr/QuoteLanding';


class ThreeDPrinting extends Component {
    render(){

      let industryServices = [
        {featureIconName: 'icon-circle-compass', featureTitle: 'Design', featureDescription: 'Optimisons vos plans techniques pour l\'impression 3D et ajoutez-y des éléments de décor et des modèles réduits.'},
        {featureIconName: 'icon-gears', featureTitle: 'Impression 3D', featureDescription: 'Produisez une maquette à partir de vos plans techniques parmi un vaste choix de matériau.'},
        {featureIconName: 'icon-tools-2', featureTitle: 'Projet d\'urbanisme', featureDescription: 'Scannez un lieu ou quartier existant afin d\'y apposer votre maquette au centre.'},
        {featureIconName: 'icon-tools', featureTitle: 'Type de projet', featureDescription: 'Réalisez des maquettes de concours, des maquette d\'étude ou des projets finis.'},
        {featureIconName: 'icon-expand', featureTitle: 'Personnalisation', featureDescription: 'Peignez-là avec des couleurs vives ou de discrètes nuances.'},
        {featureIconName: 'icon-global', featureTitle: 'Envoie rapide', featureDescription: 'Recevez votre maquette dans des délais express.'},
      ];

      let industryDetails = 
        {
          name: 'Naval',
          bgImgPath: 'https://si.wsj.net/public/resources/images/BN-XF148_3bR69_OR_20180129053221.jpg',
          industryDetails: 'We can offer you the best piece of ship for your wonderfull boats bla bla lorem <b>wow</b>',
          industryServices: industryServices,
          hasModuleProcess: true,
          hasTechAndMaterial: true,
          hasPartenaires: true,
        }
      ;
        return(
            <div>
                {/* Header Navbar */}
                <BaseLanding landingDetails={industryDetails} />
            </div>
        )
    }
}

export default ThreeDPrinting;














