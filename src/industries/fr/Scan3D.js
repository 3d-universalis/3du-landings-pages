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
  

      // @todo: Work around until we can choose the position of the modules.
      let customParagraph1 = 
      {
        title:"Technologies et matériaux ",
        description: 'Scannez, numérisez et dupliquez n’importe quelle pièce grâce à notre service de scan 3D. Ensuite, avec l’impression 3D, fabriquez votre prototype rapidement dans un choix de plus de 200 types de matériaux différents (métaux et polymères/plastiques) et une dizaine de technologies variées. Soyez rassurés, des experts de notre équipe se feront le plaisir de vous conseiller à propos des matériaux qui conviendront le mieux à vos projets.',
      };
  
      let customParagraph2 = 
      {
        title:"À Montréal... et partout au Québec ! ",
        description: 'Nous offrons aux entreprises un <b>service clés en main</b> relié à l\'<b>impression 3D</b>, au prototypage rapide et à la production sur demande.<br><br>Que ce soit pour le domaine de l’industriel, du marketing, du manufacturier, de la vente au détails, de la santé, de l\’ingénierie, de l’architecture, de l’automobile ou de l’alimentaire, nos spécialistes couvrent des <b>projets de nature variée</b>.',
      };
  
      let heroBannerDetails =
      {
        bgImgPath: '/assets/images/landing/scan3d.jpg',
        header: '<strong>Service de scan 3D</strong>L\'innovation de demain pour vos projets d\'aujourd\'hui',
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














