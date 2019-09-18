import React ,  { Component } from "react";
import BaseLanding from '../../base-landing/en/QuoteLanding';


class ArchitectureIndustry extends Component {
    render(){
      let industryDetails = 
        {
          name: 'Naval',
          bgImgPath: 'http://i0.wp.com/gomontrealtourism.com/wp-content/uploads/old-montreal-bonsecours-market-streets.jpg?strip=all',
          industryDetails: '<p>We offer companies <b>turnkey 3D printing services</b> for scale models creation.<br><br>The aesthetics of each impeccable product will provide you with a competitive advantage in your bids and tenders. <br>Also, this very fast manufacturing process compared to traditional manufacturing methods.</p>',
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

export default ArchitectureIndustry;














