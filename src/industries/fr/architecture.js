import React ,  { Component } from "react";
import BaseLanding from '../../base-landing/fr/QuoteLanding';


class NavalIndustry extends Component {
    render(){


/**
 * 
 * ARCHITECTURE TEXT
 * 
 * Nous offrons aux entreprises des services clés en main d'impression 3D, entre autre pour la création de maquette. 
 *
 * L’esthétisme de chaque produit impeccable vous fournira un avantage concurrentiel lors de vos soumissions et appels d’offres. Également, ce processus de fabrication très rapide comparé aux méthodes de fabrication traditionnelle.
 *
 * We offer companies turnkey 3D printing services for scale models creation.
 *
 * The aesthetics of each impeccable product will provide you with a competitive advantage in your bids and tenders. Also, this very fast manufacturing process compared to traditional manufacturing methods.
 * 
 */



      let industryDetails = 
        {
          bgImgPath: '/assets/images/landing/architecture1.jpg',
          header: '<strong>Votre partenaire créatif </strong>L\'innovation de demain pour vos projets d\'aujourd\'hui',
          industryDetails: '<p style="font-size: 17px;">Nous offrons aux entreprises un <b>service clés en main</b> d\'impression 3D, pour la <b>création de maquette</b>.<br>Que vous soyez architecte, urbaniste, ou maquettiste ou chargé de projet, vous avez tout à gagner. <br><br>Procurerez-vous un <b>avantage concurrentiel</b> grâce à une maquette d\'un <b>esthétisme impeccable produite à une vitesse inégalée.</b> </p>',
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

export default NavalIndustry;














