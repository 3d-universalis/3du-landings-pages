import React , { Component } from "react";
class HeroBanner extends Component {
    render(){
        return(
            <div className="hero-section section overlay landing-hero-bg" style={{ backgroundImage: "url(" + this.props.bannerDetails.bgImgPath + ")"}}>
            <div className="container">
            <div className="row">
                <div className="hero-content text-center col-12">
                    <h1 dangerouslySetInnerHTML={{__html:  this.props.bannerDetails.header}}></h1>
                    <a href="javascript:;" className="buy-btn goToContact">Demandez un devis</a>
                </div>
            </div>
            </div>
        </div>
        )
    }
}
export default HeroBanner







