import React, { Component } from 'react';

class PrintingProcess extends Component{
    render(){
       
        function getPrintingProcess(props) {
            var processlist = null;
            if (props.processes && props.processes.videos) {
                processlist = props.processes.videos;
            } else {
                // Defaults Processes
                processlist =            [
                    {name: 'Plastiques', youtubeURL: 'https://www.youtube.com/embed/FqQAjkZOBeY' },
                    {name: 'Métalliques', youtubeURL: 'https://www.youtube.com/embed/te9OaSZ0kf8' },
                ];
            }

            return processlist;
        }

        function GenerateProcessesList(props) {
           let processList = getPrintingProcess(props);

           return processList.map((val, i)=> {
            return(
                <div className="single-feature col-lg-6 col-md-6 col-12 mb--50" key={i}>
                    <span className="">{val.name}</span>
                    <div className="content fix">
                    <iframe title={val.name} width="100%" height="315" src={val.youtubeURL + "?playsinline=1&loop=1&modestbranding=1"} frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            )
        });
        }
       

        function GenerateTitle(props) {
            if (props.processes && props.processes.title) {
              return(<h1 dangerouslySetInnerHTML={{__html:  props.processes.title}}/>);
            }
            return (<h1>Processus D'impression</h1>);
        }
       

        return(
                <div className="feature-section section bg-gray pt--50 ">
                    <div className="container">
                        <div className="row">
                            <div className="section-title text-center col-12 mb--30">
                                 <GenerateTitle processes={this.props.process} />
                            </div>
                            <GenerateProcessesList processes={this.props.process} />
                        </div>
                    </div>
                </div>
        )
    }
}

export default PrintingProcess;