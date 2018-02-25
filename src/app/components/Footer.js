import React from 'react';
import PropTypes from 'prop-types';

// FUNCTIONAL COMPONENT 
// PRESENTATION/STATELESS COMPONENT 

export default function Footer(props) {
    console.log("Footer Log");
    // deconstruct
    
    let{year,company}=props;
    return(
        <div>
            <hr/>
            FOOTER COPYRIGHT@ {year}, {company}
            {props.children}
            </div>
    )
}

// DEFAULT VALUES
Footer.defaultProps={
    company:'Default Company App'
}

// propTypes is a keyword

Footer.propTypes={
    // mandatory field
    year:PropTypes.number.isRequired,
    company:PropTypes.string
}