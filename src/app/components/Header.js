// USE COMPONENT DIRECTLY AS WELL

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom"

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
                <NavLink to="/" exact className="button" activeClassName="success" > Home </NavLink>
                <NavLink to="/cart" className="button" activeClassName="success" > Cart </NavLink>
                {/* WE DONT HAVE PRODUCT SO IT WILL SHOW NOTFOUND PAGE */}
                <NavLink to="/product" className="button" activeClassName="success" > Product </NavLink>
                <NavLink to="/about" className="button" activeClassName="success" > About </NavLink>
                <NavLink to="/contact" className="button" activeClassName="success" > Contact </NavLink>
                
               
                </div>
        )
    }

}

Header.propTypes={
    // mandatory field
    title:PropTypes.string.isRequired
}