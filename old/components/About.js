import React ,  { Component } from "react";


class About extends Component{
    render(){
        return(
            <div className={`app-about ${this.props.horizontalabout}`}  id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--40">
                                <h2>ABOUT <span className="theme-color">APNEW</span></h2>
                                <img className="image-1" src="/assets/images/app/title-icon.png" alt="App Landing"/>
                                <img className="image-2" src="/assets/images/app/title-icon-2.png" alt="App Landing"/>
                                <img className="image-3" src="/assets/images/app/title-icon-3.png" alt="App Landing"/>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 offset-lg-1 mt--40">
                            <div className="about-thumbnail mr--35">
                                <img className="image-1" src="/assets/images/app/mobile.png" alt="App Landing"/>
                                <img className="image-2" src="/assets/images/app/mobile-2.png" alt="App Landing"/>
                                <img className="image-3" src="/assets/images/app/mobile-3.png" alt="App Landing"/>
                            </div>
                        </div>
                        <div className="col-lg-6 mt--40">
                            <div className="about-content">
                                <h2 className="title">BEST <span className="theme-color">MOBILE APP</span></h2>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master of human happiness. No one rejects, dislikes,</p>
                                <p>mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the </p>
                                <div className="about-buttons">
                                    <button type="button" className="button-default button-olive button-border">Download</button>
                                    <a className="button-default button-border" href="/" role="button">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;











