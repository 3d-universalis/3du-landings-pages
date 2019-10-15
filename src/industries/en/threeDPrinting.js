import React ,  { Component } from "react";
import BaseLanding from '../../base-landing/en/QuoteLanding';


class ArchitectureIndustry extends Component {
    render(){ 
      let industryServices = [
          {featureIconName: 'icon-linegraph', featureTitle: 'Rapid prototypage and samples', featureDescription: 'Get your prototype or sample shipped within a week.'},
          {featureIconName: 'icon-gears', featureTitle: '3D Printing', featureDescription: 'Duplicate existing parts and products with 3D scanning technology in order to create your CAD files and virtual inventory.'},
          {featureIconName: 'icon-tools-2', featureTitle: 'Post-processing', featureDescription: 'Ready to use on arrival, post-processing is available for most material, further optimizing production to your needs.'},
          {featureIconName: 'icon-tools', featureTitle: 'Designing', featureDescription: 'From existing technical plans or files already available, we offer model validation and assistance in creation and/or modification of CAD files.'},
          {featureIconName: 'icon-circle-compass', featureTitle: 'Metrology', featureDescription: 'Duplicate existing parts and products with 3D scanning in order to create your CAD files and virtual inventory.'},
          {featureIconName: 'icon-global', featureTitle: 'Fast Shipping', featureDescription: 'Insured fast shipping with the possibility to drop-ship directly to your customer.'},
      ];
      let industryDetails = 
        {
          bgImgPath: '/assets/images/landing/architecture1.jpg',
          header: '<strong>Your creative Partner</strong>Planning tomorrow\'s industry through today\'s innovation.',
          industryDetails: '<p style="font-size: 17px;">We offer <b>turnkey 3D printing services</b> for scale models creation.<br><br>Get a <b>competitive advantage</b> with a model of <b>impeccable aesthetics</b> produced at an unprecedented speed. <br><br>Whether you are an architect, urban planner, model builder or project manager, you have everything to gain using <b>3D Printing Technologies</b>.</p>',
          services: industryServices,
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














