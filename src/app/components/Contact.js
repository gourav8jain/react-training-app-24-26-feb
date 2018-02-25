
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div> 
            <h2>Contact</h2>
            Context Values - 
            <p>
            Name - {this.context.name}
            </p>
            <p>
            Color - {this.context.color}
            </p>
                
            </div>
        )
    }
} 


Contact.defaultProps = {
    
}

Contact.propTypes = {
    
}

Contact.contextTypes={
    color:PropTypes.string,
    name:PropTypes.string
}