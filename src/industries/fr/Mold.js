import React ,  { Component } from "react";
import BaseLanding from '../../base-landing/fr/QuoteLanding';


class MoldsServices extends Component {
  render(){

    let heroBannerDetails =
    {
      header: '<strong>Service de création de moules personnalisés</strong>L\'innovation de demain pour vos projets d\'aujourd\'hui',
      bgImgPath: '/assets/images/landing/chocolate-molds.jpg',
    };

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
        title:"Technologies et matériaux",
        description: 'Avec un design personnalisé et une matrice imprimée 3D, créez votre moule sur mesure par la procédure de <b>coulée sous vide</b>.<br>Les matériaux utilisés sont certifiés pour une <b>utilisation alimentaire</b>.<br><br> Un membre de notre équipe se fera un plaisir de vous assister dans la création du design et les différentes étapes de création du moules.',
      };
  
      let customParagraph2 = 
      {
        title:"À Montréal... et partout au Québec !",
        description: 'Nous offrons aux entreprises un service clés en main relié au prototypage, au design, à l\'impression 3D et à la production à petit ou grand volume.',
      };

      let printingProcess = {
        title: "Procédés",
        videos : [
          {name: 'Création de la matrice', youtubeURL: 'https://www.youtube.com/embed/FqQAjkZOBeY'},
          {name: 'Coulée sous vide', youtubeURL: 'https://www.youtube.com/embed/MTZ5FunrcDY'}
        ]
      }
  
      // Always keep "Modules" at the end. (Last to initialize.)
      let modules =
      {
        heroBanner: heroBannerDetails,
        customParagraph1: customParagraph1,
        customParagraph2: customParagraph2,
        services: industryServices,
        hasContactForm: true,
        hasPartnersList: true,
        hasPrintingProcess: printingProcess,
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

export default MoldsServices;














