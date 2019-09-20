import React , { Component } from "react";
class Footer extends Component {
    render(){
        return(
            <div className="feature-section section bg-gray pb--100">
            <div className="container" id="contact-us">
                <div className="col-lg-12 col-xl-12 offset-xl-12">
                    <div className="contact-inner">
                        <div className="section-title text-center col-12 mb--70">
                                    <h1>Nous Contactez</h1>
                        </div>
                        <form className="contact-form" id="contact-form">
                            Nom
                            <div className="input-box">
                                <input name="name" type="text" placeholder="Jean Tremblay"/>
                            </div>
                            Courriel
                            <div className="input-box">
                                <input name="email" type="text" placeholder="nom@exemple.com"/>
                            </div>
                            Téléphone #
                            <div className="input-box">
                            <input name="phone" type="phone" placeholder="+1 514 123 4567"/>
                            </div>
                            Message
                            <div className="input-box">
                                <textarea name="message" placeholder="Partagez-nous en davantage sur vous et votre projet et faites-nous part de vos questions. Un expert de notre équipe vous contactera d'ici la prochaine journée ouvrable."></textarea>
                            </div>

                            <div className="input-box">
                                <button className="submite-button" id="contact-form-submit" type="submit">Envoyer</button>
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







