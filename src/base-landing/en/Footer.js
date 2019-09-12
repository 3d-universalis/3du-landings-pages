import React , { Component } from "react";
class Footer extends Component {
    render(){
        return(
            <div className="feature-section section bg-gray pb--100">
            <div className="container" id="contact-us">
                <div className="col-lg-12 col-xl-12 offset-xl-12">
                    <div className="contact-inner">
                        <div className="section-title text-center col-12 mb--70">
                                    <h1>Contact us</h1>
                        </div>
                        <form className="contact-form" id="contact-form">
                            Name
                            <div className="input-box">
                                <input name="name" type="text" placeholder="John Smith"/>
                            </div>
                            Email
                            <div className="input-box">
                                <input name="email" type="text" placeholder="name@exemple.com"/>
                            </div>
                            Phone #
                            <div className="input-box">
                            <input name="phone" type="phone" placeholder="+1 111 222 3333"/>
                            </div>
                            Message
                            <div className="input-box">
                                <textarea name="message" placeholder="Message"></textarea>
                            </div>

                            <div className="input-box">
                                <button className="submite-button" id="contact-form-submit" type="submit">Submit</button>
                            </div>
                            <div id="contact-status" className="alert alert-success" role="alert"></div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Footer







