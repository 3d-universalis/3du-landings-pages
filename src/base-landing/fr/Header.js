import React , { Component } from "react";
class Header extends Component {
    render(){
        return(
            <div className="header-section section sticker">
            <div className="container">
            <div className="row justify-content-between align-items-center">
                {/* Logo */}
                <div className="logo col-6 text-left">
                    <a href="https://3duniversalis.com/fr/?utm_source=lp.3duniversalis.com&utm_medium=landing-pages&utm_campaign=lp-2019">
                        <img src="/assets/images/landing/logo.png" className="img-fluid" alt="" />
                        <img src="/assets/images/landing/logo-2.png" alt="" className="sticky-logo img-fluid" /></a>
                </div>
                {/* Logo */}
                <div className="col-6 text-right">
                    <span className="header-number"><span className="icon-phone"></span> +1 833 776 7775 (Sans‑frais au Canada)</span><a href="javascript:;" className="buy-btn goToContact" >Nous contacter</a>
                </div>
            </div>
            </div>
        </div>
        )
    }
}
export default Header







