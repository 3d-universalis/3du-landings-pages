import React ,  { Component } from "react";
import BaseLanding from '../../base-landing/en/QuoteLanding';


class MoldsServices extends Component {
    render(){ 

      let heroBannerDetails =
      {
        header: '<strong>3D Custom Mold Services</strong>Engineering tomorrow\'s industry through today\'s innovation.',
        bgImgPath: '/assets/images/landing/chocolate-molds.jpg'
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
        description: 'Create your custom mold by vacuum casting process with a custom design and a 3D printed die. The materials used are certified for food use. A member of our team will be happy to assist you in the creation of the design and the various stages of creation of the mold.',
      };

      let customParagraph2 =
      {
        title: "USA, Canada and Europe",
        description: 'We offer our services to all types of businesses, everywhere around the globe, mainly in the USA, in Europe and in Canada.',
      }

      let printingProcess = {
        videos : [
          {name: '3D Printed Die', youtubeURL: 'https://www.youtube.com/embed/FqQAjkZOBeY'},
          {name: 'Vacuum casting', youtubeURL: 'https://www.youtube.com/embed/MTZ5FunrcDY'}
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

export default MoldsServices;














