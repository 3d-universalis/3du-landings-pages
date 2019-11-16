import React ,  { Component } from "react";
import BaseLanding from '../../base-landing/fr/QuoteLanding';


class ThreeDPrinting extends Component {
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
      title:"À Montréal... et partout au Québec ! ",
      description: '<p>Nous offrons aux entreprises un <b>service clés en main</b> relié à l\'<b>impression 3D</b>, au prototypage rapide et à la production sur demande.<br><br>Que ce soit pour le domaine de l’industriel, du marketing, du manufacturier, de la vente au détails, de la santé, de l’ingénierie, de l’architecture, de l’automobile ou de l’alimentaire, nos spécialistes couvrent des <b>projets de nature variée</b>.</p>',
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

export default ThreeDPrinting;














