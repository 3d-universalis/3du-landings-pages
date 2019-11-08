import React ,  { Component } from "react";
import BaseLanding from '../../base-landing/fr/QuoteLanding';


class Scan3D extends Component {
  render(){
      let industryServices = [
        {featureIconName: 'icon-linegraph', featureTitle: 'Prototypage rapide', featureDescription: 'Créez et obtenez votre prototype ou votre échantillon en moins d’une semaine en travaillant avec nos spécialistes.'},
        {featureIconName: 'icon-gears', featureTitle: 'Impression 3D', featureDescription: 'Imprimez en 3D vos produits. Production sur demande : unitaire, à petit ou à grand volume.'},
        {featureIconName: 'icon-tools-2', featureTitle: 'Service post-traitement', featureDescription: 'Recevez vos pièces prêtes à l’utilisation ou à la vente par nos services de post-traitement et d’assemblage. (Ponçage, polissage, peinture, sablage, assemblage…)'},
        {featureIconName: 'icon-tools', featureTitle: 'Conception', featureDescription: 'Créez votre design. Nous vous assistons, au besoin, dans la création ou modification de vos fichiers techniques (CAD, STP, STEP, 3DMax, etc.)'},
        {featureIconName: 'icon-circle-compass', featureTitle: 'Métrologie et duplication', featureDescription: 'Dupliquez des pièces déjà existantes grâce aux technologies de scan et numérisation 3D.'},
        {featureIconName: 'icon-global', featureTitle: 'Livraison rapide', featureDescription: 'Bénéficiez d’un service d’envoi postal express, que ce soit chez vous ou chez votre client.'},
      ];
  
      let customParagraph2 = 
        {
          description: '<p style="font-size: 17px;">Nous offrons aux entreprises un <b>service clés en main</b> d\'impression 3D, pour la <b>création de maquette</b>.<br>Que vous soyez architecte, urbaniste, ou maquettiste ou chargé de projet, vous avez tout à gagner. <br><br>Procurez-vous un <b>avantage concurrentiel</b> grâce à une maquette d\'un <b>esthétisme impeccable produite à une vitesse inégalée.</b> </p>',
        }
      ;
  
        let heroBannerDetails =
        {
          bgImgPath: '/assets/images/landing/architecture1.jpg',
          header: '<strong>Prototypage rapide par impression 3D </strong>L\'innovation de demain pour vos projets d\'aujourd\'hui',
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

export default Scan3D;














