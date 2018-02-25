import React from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Home from "./components/Home";
// import About from "./components/About";
import PropTypes from "prop-types";

//import Cart from "./cart/components/Cart";

export class App extends React.Component {

    // keyword method which react will call only
    getChildContext() {
        return {
            color: this.props.color,
            name: "Product App"
        };
    }


    componentWillMount() {
        console.log("component will mount -- app will mount");
        // this.recalculateTotal(this.state.items);
    }

    componentDidMount() {
        console.log("component did mount -- app did mount");
    }

    // create virtual dom
    render() {
        console.log('App render');
        return (
            <div>
                {/* <Header title="Product App" />   */}
                <Header title="Welcome to React - Gourav" />
                {/* <Cart />
                <h2>Welcome to React</h2>
                <Home />
                <About /> */}
                <div>
                    {this.props.children}
                </div>
                <Footer year={2018} company="Xebia">
                    {/* THIS SHOULD GO INTO PROPS.CHILDREN */}
                    {/* CONCEPT OF TRANSLUDE */}
                    <p> Contact Time: 09:00 AM to 06:00 PM</p>
                </Footer>
            </div>
        )
    }
}


//  keyword method from react
App.childContextTypes = {
    color: PropTypes.string,
    name: PropTypes.string
};