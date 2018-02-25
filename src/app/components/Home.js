
import React, { Component } from "react";
import PropTypes from "prop-types";

// throw away code
import store from "../store";

export default class Home extends Component {
    constructor(props) {
        super(props);


    }

    increment() {
        let action = {
            type: 'INCREMENT',
            payload: {
                value: 1
            }
        }
        store.dispatch(action);
    }

    componentDidMount()
    {
        // SUBSCRIBE WILLL ALWAYS HAVE NO PARAMETERS AS SUCH
        this.unsubscribeFunc = store.subscribe(()=>{
            console.log("home subs called", Math.random());
            this.forceUpdate();
        })
    }

    componentWillUnmount()
    {
       console.log('unsubscribeFunc -- componentWillUnmount')
        this.unsubscribeFunc();
    }


    render() {
        console.log("Home render", );
        let state = store.getState();
        let counter = state;
        //let _this = this;

        return (
            <div>
                <h2>Home</h2>

                <p> Counter: {counter}  </p>


                <button onClick={() => this.increment()}>
                    +1
                </button>

            </div>
        )
    }
}


Home.defaultProps = {

}

Home.propTypes = {

}