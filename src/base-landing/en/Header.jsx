import React , { Component } from "react";
import assetUrl from '../../assetUrl';
class Header extends Component {
    render(){
        return(
            <div className="header-section section sticker">
            <div className="container">
            <div className="row justify-content-between align-items-center">
                {/* Logo */}
                <div className="logo col-6 text-left">
                    <a href="https://3duniversalis.com/?utm_source=lp.3duniversalis.com&utm_medium=landing-pages&utm_campaign=lp-2019">
                        <img src={assetUrl('assets/images/landing/logo.png')} className="img-fluid" alt="" />
                        <img src={assetUrl('assets/images/landing/logo-2.png')} alt="" className="sticky-logo img-fluid" /></a>
                </div>
                {/* Logo */}
                <div className="col-6 text-right">
                    <span className="header-number"><span className="icon-phone"></span> +1 833 776 7775 (Toll‑Free)</span><a href="javascript:;" className="buy-btn goToContact" >Contact Us</a>
                </div>
            </div>
            </div>
        </div>
        )
    }
}
export default Header







