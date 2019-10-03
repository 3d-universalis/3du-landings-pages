import React ,  { Component } from "react";
import BaseLanding from '../../base-landing/en/QuoteLanding';


class ThreeDPrinting extends Component {
    render(){
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














