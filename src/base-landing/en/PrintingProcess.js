import React, { Component } from 'react';

class PrintingProcess extends Component{
    render(){

        let printingProcessURLs =
        [
            {name: 'Polymers', youtubeURL: 'https://www.youtube.com/embed/FqQAjkZOBeY?showinfo=1&modestbranding=1' },
            {name: 'Metals', youtubeURL: 'https://www.youtube.com/embed/te9OaSZ0kf8?showinfo=1&modestbranding=1' },
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
                <div className="feature-section section bg-gray pt--70 pb--50">
                    <div className="container">
                        <div className="row">
                            <div className="section-title text-center col-12 mb--20">
                                <h1>Printing Process</h1>
                            </div>
                            {processList}
                        </div>
                    </div>
                </div>
        )
    }
}

export default PrintingProcess;