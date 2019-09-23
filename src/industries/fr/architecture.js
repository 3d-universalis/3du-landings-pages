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
          name: 'Architecture',
          bgImgPath: '/assets/images/landing/architecture1.jpg',
          industryDetails: '<p style="font-size: 18px;">Nous offrons aux entreprises un <b>service clés en main</b> d\'impression 3D, entre autre pour la <b>création de maquette</b>.<br><br>L’esthétisme de chaque produit impeccable vous fournira un <b>avantage concurrentiel</b> lors de vos soumissions et appels d’offres.<br><br>Également, ce processus de fabrication est <b>très rapide</b> comparé aux méthodes de fabrication traditionnelle.</p>',
          mainColor: '#ffffff'
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














