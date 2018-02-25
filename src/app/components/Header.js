// USE COMPONENT DIRECTLY AS WELL

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component{
    constructor()
    {
        super(); // MUST
        console.log("header constructor");
    }

    // ES.NEXT

//    static propTypes={
//         title:PropTypes.string.isRequired
//     }

    render(){
        //this.props.title="SAdfsad";
        console.log("header render");
        return(
            <div>
                {/* {Add comments like this} */}
                {/* {props are immutabe}*/}
                <h1>{this.props.title}</h1> 
                </div>
        )
    }

}

Header.propTypes={
    // mandatory field
    title:PropTypes.string.isRequired
}