import React, { Component } from 'react';

class PrintingProcess extends Component{
    render(){

        let printingProcessURLs =
        [
            {name: 'Plastiques', youtubeURL: 'https://www.youtube.com/embed/FqQAjkZOBeY' },
            {name: 'Métalliques', youtubeURL: 'https://www.youtube.com/embed/te9OaSZ0kf8' },
        ];
        
        let processList = printingProcessURLs.map((val, i)=> {
            return(
                <div className="single-feature col-lg-6 col-md-6 col-12 mb--50" key={i}>
                    <span className="">{val.name}</span>
                    <div className="content fix">
                    <iframe width="100%" height="315" src={val.youtubeURL} frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            )
        });
       

        return(
                <div className="feature-section section bg-gray pt--50 ">
                    <div className="container">
                        <div className="row">
                            <div className="section-title text-center col-12 mb--70">
                                <h1>Processus d'impression</h1>
                            </div>
                            {processList}
                        </div>
                    </div>
                </div>
        )
    }
}

export default PrintingProcess;