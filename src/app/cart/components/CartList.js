
import React, {Component,PureComponent} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

export default class CartList extends PureComponent {
    constructor(props) {
        super(props);
        console.log("CartList cons");
    }
    

    componentWillMount() {
        console.log("CartList will mount");
    }
    

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("cart list should update");
    //     console.log("current list ", this.props.items.length);
    //     console.log("current list ", nextProps.items.length);
    //     console.log("this.props.items == nextProps.items", this.props.items == nextProps.items)
    //     return  nextProps.items != this.props.items;
    // }


    componentDidMount() {
        console.log("CartList did mount");
    }
    
    render() {
        console.log("CartList render");
        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>

                    {
                        this.props.items.map(item => (
                            <CartItem key={item.id} item = {item} onRemove={this.props.onRemove}
                            />
                        ))
                    }
                </tbody>
                </table>
            </div>
        )
    }
} 


CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}