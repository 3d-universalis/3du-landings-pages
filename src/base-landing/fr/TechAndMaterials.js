import React, { Component } from 'react';

class PrintingProcess extends Component{
    render(){
        return(
            <div className="techAndMaterials">
                <div className="feature-section section bg-gray pt--50 pb--100">
                    <div className="container">
                        <div className="row">
                            <div className="section-title text-center col-12 mb--70">
                                <h1>Technologies et matériaux </h1>
                            </div>
                            <div className="col-12" className="description">
                                <p>Nous fabriquons dans plus de 200 types de matériaux différents
                                (métaux et polymères/plastiques) en utilisant une dizaine de
                                technologies variées. Soyez rassurés, des experts de notre équipe
                                se feront le plaisir de vous conseiller à propos des matériaux
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