
import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";

// Pure compnent can take care of this shouldComponentUpdate
export default class CartSummary extends PureComponent {
    constructor(props) {
        super(props);
    }

    // called whenever parent render called on update cycle
    componentWillReceiveProps(nextProps) {
        console.log("summary will receive next", nextProps);
        console.log("summary current props", this.props);
    }

    //called when parent render is called
    //called when this.setState called on update cycle
    //return true, calls this.render
    // Pure compnent can take care of this shouldComponentUpdate
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("summary should update -- called shouldComponentUpdate");
    //     return nextProps.amount != this.props.amount || nextProps.count != this.props.count;
    // }

    render() {
        console.log("CartSummary render");
        return (
            <div>
                <h2>Cart Summary</h2>
                <p> Amount {this.props.amount} </p>
                <p> Total Items {this.props.count} </p>
            </div>
        )
    }
}


// defaultProps is static, keyword
CartSummary.defaultProps = {
    amount: 0,
    count: 0
}

CartSummary.propTypes = {
    amount: PropTypes.number,
    count: PropTypes.number
}