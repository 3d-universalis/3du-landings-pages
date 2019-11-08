import React, { Component } from "react";
import BaseLanding from '../../base-landing/en/QuoteLanding';


class ThreeDPrinting extends Component {
  render() {
    let industryServices = [
      { featureIconName: 'icon-linegraph', featureTitle: 'Rapid prototypage and samples', featureDescription: 'Get your prototype or sample shipped within a week.' },
      { featureIconName: 'icon-gears', featureTitle: '3D Printing', featureDescription: 'Duplicate existing parts and products with 3D scanning technology in order to create your CAD files and virtual inventory.' },
      { featureIconName: 'icon-tools-2', featureTitle: 'Post-processing', featureDescription: 'Ready to use on arrival, post-processing is available for most material, further optimizing production to your needs.' },
      { featureIconName: 'icon-tools', featureTitle: 'Designing', featureDescription: 'From existing technical plans or files already available, we offer model validation and assistance in creation and/or modification of CAD files.' },
      { featureIconName: 'icon-circle-compass', featureTitle: 'Metrology', featureDescription: 'Duplicate existing parts and products with 3D scanning in order to create your CAD files and virtual inventory.' },
      { featureIconName: 'icon-global', featureTitle: 'Fast Shipping', featureDescription: 'Insured fast shipping with the possibility to drop-ship directly to your customer.' },
    ];
    // Add a way to reuse modules! 
      
    let customParagraph1 =
    {
      title: "USA, Canada and Europe",
      description: 'We offer our services to all types of businesses, everywhere around the globe, mainly in the USA, in Europe and in Canada. By using our facilities in your country, we save on shipping and import fees',
    }

    let customParagraph3 =
    {
      title: "On demand production",
      description: 'Whether you need a single unit or a mass production, we can produce on demand the required quantity.',
    }

    let heroBannerDetails =
    {
      bgImgPath: '/assets/images/landing/global.jpg',
      header: '<strong>3D Printing Services</strong>Engineering tomorrow\'s industry through today\'s innovation.',
    }

    // Always keep "Modules" at the end. (Last to initialize.)
    let modules =
    {
      heroBanner: heroBannerDetails,
      customParagraph1: customParagraph1,
      customParagraph3: customParagraph3,
      services: industryServices,
      hasContactForm: true,
      hasPartnersList: true,
      hasPrintingProcess: true,
    }

    return (
      <div>
        {/* Header Navbar */}
        <BaseLanding modules={modules} />
      </div>
    )
  }
}

export default ThreeDPrinting;
















