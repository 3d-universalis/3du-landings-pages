import React , { Component } from "react";
class Industry extends Component {
    render(){
        return(
            <div className="feature-section section bg-gray pt--50 pb--50">
            <div className="container">
                <div className="row">
                    <div className="col-12" dangerouslySetInnerHTML={{__html:  this.props.industryDetails.details}}/>
                </div>
            </div>
        </div>
        )
    }
}
export default Industry







