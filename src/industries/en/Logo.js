import React ,  { Component } from "react";
import BaseLanding from '../../base-landing/en/QuoteLanding';


class LogoServices extends Component {
    render(){ 

      let heroBannerDetails =
      {
        header: '<strong>Logo 3D Printing Service</strong>UPDATE THIS.',
        bgImgPath: '/assets/images/landing/3d-logos.jpg'
      }

      let industryServices = [
        { featureIconName: 'icon-linegraph', featureTitle: 'Rapid prototypage and samples', featureDescription: 'Get your prototype or sample shipped within a week.' },
        { featureIconName: 'icon-gears', featureTitle: '3D Printing', featureDescription: 'Duplicate existing parts and products with 3D scanning technology in order to create your CAD files and virtual inventory.' },
        { featureIconName: 'icon-tools-2', featureTitle: 'Post-processing', featureDescription: 'Ready to use on arrival, post-processing is available for most material, further optimizing production to your needs.' },
        { featureIconName: 'icon-tools', featureTitle: 'Designing', featureDescription: 'From existing technical plans or files already available, we offer model validation and assistance in creation and/or modification of CAD files.' },
        { featureIconName: 'icon-circle-compass', featureTitle: 'Metrology', featureDescription: 'Duplicate existing parts and products with 3D scanning in order to create your CAD files and virtual inventory.' },
        { featureIconName: 'icon-global', featureTitle: 'Fast Shipping', featureDescription: 'Insured fast shipping with the possibility to drop-ship directly to your customer.' },
      ];
  
      let customParagraph1 = 
      {
        title:"Technologies and materials ",
        description: 'Produce your logo with 3D printing in 200 different types of materials (metals and polymers / plastics) using a dozen different technologies. Our dedicated experts team will be happy to advise you.',
      };

      let customParagraph2 =
      {
        title: "USA, Canada and Europe",
        description: 'We offer our services to all types of businesses, everywhere around the globe, mainly in the USA, in Europe and in Canada.',
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
        hasPrintingProcess: true,
        techAndMaterials: false,
      };
  

        return(
          <div>
           <BaseLanding modules={modules} />
          </div>
        )
    }
}

export default LogoServices;














