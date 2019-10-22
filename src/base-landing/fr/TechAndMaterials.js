import React, { Component } from 'react';

class PrintingProcess extends Component{
    render(){
        return(
            <div className="techAndMaterials">
                <div className="feature-section section bg-gray pt--50 pb--70">
                    <div className="container">
                        <div className="row">
                            <div className="section-title text-center col-12 mb--70">
                                <h1>Technologies et matériaux </h1>
                            </div>
                            <div className="col-12 description-text">
                                <p>Nous fabriquons dans plus de <b>200 types de matériaux</b> différents
                                (métaux et polymères/plastiques) en utilisant une dizaine de
                                technologies variées.<br/> Soyez rassurés, <b>nos experts se feront le plaisir de vous conseiller</b> à propos des matériaux
                                qui conviendront le mieux à vos projets.
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