

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Home extends Component {
    constructor(props) {
        super(props);
        // state is a keyword
        //mutable
        //styate is owned by component

        this.state = {
            counter: 0,
            show: true
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate -- Home -- current state", this.state);
        console.log("shouldComponentUpdate -- Home -- next state", nextState);

        // odd number are getting printed and calling render not even // forceupdate dees not call shouldComponentUpdate()
        return nextState.counter % 2 == 1;
    }

    render() {
        console.log('Home render', this.state.counter);
        console.log('show', this.state.show);
        return (
            <div>
                <h2>Home</h2>
                <p>Counter:- {this.state.counter}</p>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }

    increment() {
        // // bad approach -- mutating state directly
        // this.state.counter++;
        // console.log(this.state.counter);

        // // bad call the render using api methods

        // this.forceUpdate();

        // GOOD OPTION -- SET STATE() -- MERGE STATE
        //SET STATE IS ASYNC
        console.log("BEFORE SET-STATE", this.state.counter);
        this.setState({
            // immutable
            counter: this.state.counter + 1
            //counter:1
        })

        this.setState({
            // immutable
            show: !this.state.show
            //show:false
        })
        console.log("AFTER SET-STATE", this.state.counter);
        console.trace("called");
    }
}


Home.defaultProps = {

}

Home.propTypes = {

}