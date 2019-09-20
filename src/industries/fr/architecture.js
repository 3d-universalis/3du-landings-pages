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
          name: 'Naval',
          bgImgPath: '/assets/images/landing/architecture1.jpg',
          industryDetails: 'We can offer you the best piece of ship for your wonderfull boats bla bla lorem <b>wow</b>',
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














