import React, { Component } from 'react';

class PrintingProcess extends Component{
    render(){
        return(
            <div className="techAndMaterials">
                <div className="feature-section section bg-gray pt--50 pb--100">
                    <div className="container">
                        <div className="row">
                            <div className="section-title text-center col-12 mb--70">
                                <h1>Technologies and materials </h1>
                            </div>
                            <div className="col-12 description-text">
                                <p>We manufacture in over <b>200 different types of materials</b> (metals and polymers / plastics)
                                     using a dozen different technologies. <br></br> <b>Our dedicated experts team will be happy to advise
                                    you</b> on the materials that will best suit your projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PrintingProcess;