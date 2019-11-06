import React , { Component } from "react";
class Paragraph extends Component {
    render(){

        function GenerateTitle(props) {
            if (props.title) {
              return(
                <div class="section-title text-center col-12 mb--20"><h1 dangerouslySetInnerHTML={{__html:  props.title}}/></div>
                );
            }
            // @todo: See if we could make the return null prettier.
            return null;
        }

        function GenerateDescription(props) {
            if (props.description) {
              return(
                <div class="col-12 description-text"><p dangerouslySetInnerHTML={{__html:  props.description}}/></div>  
                  );
            }
            return null;
        }
          
        return(
                    <div class="techAndMaterials">
                        <div class="feature-section section bg-gray pt--50">
                            <div class="container">
                                <div class="row">
                                <GenerateTitle title={this.props.paragraph.title} />
                                <GenerateDescription description={this.props.paragraph.description} />
                                </div>
                            </div>
                        </div>
                    </div>                    
        )
    }
}
export default Paragraph







