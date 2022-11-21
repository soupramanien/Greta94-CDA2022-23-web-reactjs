import React from "react";

export default class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: true
        }
    }
    // handleClick = () => {
    //     this.setState(function (prevState) {
    //         return {
    //             isToggleOn: !prevState.isToggleOn
    //         }
    //     })
    // }
    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "ON" : "Off"}
            </button>
        )
    }
}