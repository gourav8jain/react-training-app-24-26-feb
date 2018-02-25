import React from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import PropTypes from "prop-types";

import Cart from "./cart/components/Cart";

export default class App extends React.Component {

    // keyword method which react will call only
    getChildContext() {
        return {
                color: this.props.color,
                name: "Product App"
            };
   }

    
   componentWillMount()
   {
       console.log("component will mount -- app will mount");
      // this.recalculateTotal(this.state.items);
   }

   componentDidMount()
   {
       console.log("component did mount -- app did mount");
   }

    // create virtual dom
    render() {
        console.log('App render');
        return (
            <div>
                   {/* <Header title="Product App" />   */}
                   <Header title="dfdsdf" /> 
                   <Cart/>
                <h2>Welcome to React</h2>  
            <Home/>
            <About/>
            <Footer year={2018} company="Xebia" />
            </div>
        )
    }
}


//  keyword method from react
App.childContextTypes = {
    color: PropTypes.string,
    name: PropTypes.string
  };