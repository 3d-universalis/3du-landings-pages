import React, { Component } from 'react';

class Services extends Component{
    render(){
        let featureDatalist = this.props.services.map((val, i)=> {
            return(
                <div className="single-feature col-lg-4 col-md-6 col-12 mb--50" key={i}>
                    <span className="icon float-left"><i className={val.featureIconName} /></span>
                    <div className="content fix">
                        <h4>{val.featureTitle}</h4>
                        <p>{val.featureDescription}</p>
                    </div>
                </div>
            )
        });
        return(
                <div className="feature-section section bg-gray pt--50 pb--50">
                    <div className="container">
                        <div className="row">
                            <div className="section-title text-center col-12 mb--70">
                                <h1>Our services</h1>
                            </div>
                            {featureDatalist}
                        </div>
                    </div>
                </div>
        )
    }
}

export default Services;