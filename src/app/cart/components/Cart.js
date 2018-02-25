
import React, { Component } from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [{ id: 1, price: 100, qty: 1, name: 'Product 1' }],
            amount: 0, //price * qty of all items
            count: 0, // qty of all items
            flag: false //dummy
        }

        // to avoid calling render in case of pure component as it compares the function as well
        // this.onRemove2 = (id) => { this.removeItem(id) }
        // ES6
        // does the same job of the above
        //ES 5
        this.onRemove2 = this.removeItem.bind(this);

        // new bound function = original function binded
        this.removeItem=this.removeItem.bind(this);
    }

    componentWillMount() {
        console.log("component will mount -- cart will mount");
        this.recalculateTotal(this.state.items);
    }

    // will be called when anything would be deleted -- react will take care of that. -- part of deletion life cycle
    componentDidMount() {
        console.log("component did mount -- cart did mount");
    }

    recalculateTotal(items) {
        let count = 0;
        let amount = 0;

        for (let item of items) {
            count += item.qty;
            amount += item.qty * item.price
        }

        this.setState({
            // es6 feature
            count,  // count: count
            amount
        })
    }

    addItem() {
        let id = Math.ceil(Math.random() * 100000);
        let item = {
            id: id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        //TODO:

        let newItems = [...this.state.items, item];
        this.setState({
            items: newItems
        });

        this.recalculateTotal(newItems);

    }

    removeItem(id) {
        //TODO:

        let newItems = this.state.items.filter(item => item.id != id);
        this.setState({
            items: newItems
        });
        this.recalculateTotal(newItems);

    }

    empty() {
        this.setState({
            items: []
        })

        this.recalculateTotal([]);
    }

    refresh() {
        //dummy
        this.setState({
            flag: !this.state.flag
        })

    }

    render() {
        console.log("Cart Render");

        return (
            <div>
                <h2>Cart</h2>

                <button onClick={() => this.addItem()}>
                    Add
            </button>


                <button onClick={() => this.empty()}>
                    Empty
            </button>



                <button onClick={() => this.refresh()}>
                    Refresh
            </button>

                {/* // onRemove is acting like a property
                <CartList items={this.state.items}
                    removeItem={(id) => this.removeItem(id)}
                /> */}

                {/* onRemove is acting like a property */}
                <CartList items={this.state.items}
                    onRemove={this.removeItem}
                />

                <CartSummary amount={this.state.amount} count={this.state.count} />
            </div>
        )
    }
}


Cart.defaultProps = {

}

Cart.propTypes = {

}