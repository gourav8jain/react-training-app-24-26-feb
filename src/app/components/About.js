
import React, { Component } from "react";
import PropTypes from "prop-types";
import Contact from "./Contact"

export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            frameworks: ['React', 'Redux'],
            show: true,
            name: 'Enter name',
            highlight: false
        }
    }

    getList() {
        let list = [];
        for (let name of this.state.frameworks) {
            list.push(<li> {name}</li>)
            //list.push(React.createElement('li', null, name));
        }

        return list;
    }


    toggle() {
        this.setState({
            show: !this.state.show
        })
    }

    onHandleChange(e) {
        //target is real dom object
        console.log(e.target.value);
        this.setState({
            name: e.target.value
        })
    }

    addToList() {
        this.setState({
            frameworks: [...this.state.frameworks, this.state.name],
            name: ''
        })
    }

    componentDidMount() {
        this.inputElem.focus();
    }

    render() {
        console.log("About render");

        return (
            <div>
                <h2>About</h2>

                <input type="text"
                    value={this.state.value}
                    onChange={(e) => this.onHandleChange(e)}

                    onBlur={() => this.addToList()}

                    //  TO WROK WITH THE REAL DOM AND THIS METHOD WILL BE CALLED IN THE COMPONENT DID MOUNT
                    ref={(elem) => this.inputElem = elem}

                />

                <button onClick={() => this.toggle()}

                    onMouseEnter={() => this.setState({ highlight: true })}

                    onMouseLeave={() => this.setState({ highlight: false })}
                    className={this.state.highlight ? "success" : ""}

                >
                    {this.state.show ? "Hide" : "Show"}
                </button>

                {this.state.show ? <p>Shown</p> : <p>Not Shown</p>}


                {this.state.show &&
                    <ul>
                        {/* {this.getList()}   */}

                        {
                            this.state
                                .frameworks.map((name, index) => (
                                    <li key={name} > {name} </li>
                                ))
                        }
                    </ul>
                }
                {/* <Contact /> */}
            </div>
        )
    }
}


About.defaultProps = {

}

About.propTypes = {

}