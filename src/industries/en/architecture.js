import React ,  { Component } from "react";
import BaseLanding from '../../base-landing/en/QuoteLanding';


class ArchitectureIndustry extends Component {
    render(){ 
      let industryServices = [
        {featureIconName: 'icon-circle-compass', featureTitle: 'Design', featureDescription: 'Optimize your technical plans for 3D printing and add decor elements and scale models.'},
        {featureIconName: 'icon-gears', featureTitle: '3D Printing', featureDescription: 'Produce a model from your technical plans from a wide range of materials.'},
        {featureIconName: 'icon-tools-2', featureTitle: 'Urban planning project', featureDescription: 'Scan an existing area or neighborhood to put your model in the center.'},
        {featureIconName: 'icon-tools', featureTitle: 'Type of project', featureDescription: 'Make models of contests, study models or finished projects.'},
        {featureIconName: 'icon-expand', featureTitle: 'Customization', featureDescription: 'Paint with bright colors or discreet shades.'},
        {featureIconName: 'icon-global', featureTitle: 'Fast Shipping', featureDescription: 'Receive your model in express time.'},
      ];
  
      let industryDetails =
      {
        details: '<p style="font-size: 17px;">We offer <b>turnkey 3D printing services</b> for scale models creation.<br><br>Get a <b>competitive advantage</b> with a model of <b>impeccable aesthetics</b> produced at an unprecedented speed. <br><br>Whether you are an architect, urban planner, model builder or project manager, you have everything to gain using <b>3D Printing Technologies</b>.</p>',
      }
        ;
  
      let heroBannerDetails =
      {
        bgImgPath: '/assets/images/landing/architecture1.jpg',
        header: '<strong>Your creative Partner</strong>Planning tomorrow\'s industry through today\'s innovation.',
      }
  
      // Always keep "Modules" at the end. (Last to initialize.)
      let modules =
      {
        heroBanner: heroBannerDetails,
        industryDetails: industryDetails,
        services: industryServices,
        hasContactForm: true,
        hasPartnersList: true,
      }
  

        return(
          <div>
           <BaseLanding modules={modules} />
          </div>
        )
    }
}

export default ArchitectureIndustry;














