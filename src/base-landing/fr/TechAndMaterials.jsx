import React, { Component } from 'react';

class TechAndMaterials extends Component{
    render(){

        function GenerateTitle(props) {
            if (props.techAndMaterials.title) {
              return(
                <div class="section-title text-center col-12 mb--30"><h1 dangerouslySetInnerHTML={{__html:  props.techAndMaterials.title}}/></div>
                );
            }
            return (<div class="section-title text-center col-12 mb--30"><h1>Technologies et matériaux </h1></div>);
        }

        function GenerateDescription(props) {
            if (props.techAndMaterials && props.techAndMaterials.description) {
              return(
                <div class="col-12 description-text"><p dangerouslySetInnerHTML={{__html:  props.techAndMaterials.description}}/></div>  
                  );
            }
            return ( <div class="col-12 description-text"><p>Nous fabriquons dans plus de <b>200 types de matériaux</b> différents
                (métaux et polymères/plastiques) en utilisant une dizaine de
                technologies variées.<br/> Soyez rassurés, <b>nos experts se feront le plaisir de vous conseiller</b> à propos des matériaux
                qui conviendront le mieux à vos projets.
                </p></div>);
        }
          
        return(
            <div class="feature-section section bg-gray pt--50 pb--50">
                <div class="container">
                    <div class="row">
                    <GenerateTitle techAndMaterials={this.props.techAndMaterials} />
                    <GenerateDescription techAndMaterials={this.props.techAndMaterials} />
                    </div>
                </div>
            </div>                
        )
    }
}
export default TechAndMaterials;