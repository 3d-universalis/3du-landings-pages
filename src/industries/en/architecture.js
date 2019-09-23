import React ,  { Component } from "react";
import BaseLanding from '../../base-landing/en/QuoteLanding';


class ArchitectureIndustry extends Component {
    render(){
      let industryDetails = 
        {
          bgImgPath: '/assets/images/landing/architecture1.jpg',
          header: '<strong>Your creative Partner</strong>Planning tomorrow\'s industry through today\'s innovation.',
          industryDetails: '<p style="font-size: 17px;">We offer <b>turnkey 3D printing services</b> for scale models creation.<br><br>Get a <b>competitive advantage</b> with a model of <b>impeccable aesthetics</b> produced at an unprecedented speed. <br><br>Whether you are an architect, urban planner, model builder or project manager, you have everything to gain using <b>3D Printing Technologies</b>.</p>',
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














