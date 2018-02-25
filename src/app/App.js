import React from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";

export default class App extends React.Component {

    // create virtual dom
    render() {
        console.log('App render');
        return (
            <div>
                   {/* <Header title="Product App" />   */}
                   <Header title="dfdsdf" /> 
                <h2>Welcome to React</h2>  
            <Home/>
            <About/>
            <Footer year={2018} company="Xebia" />
            </div>
        )
    }
}