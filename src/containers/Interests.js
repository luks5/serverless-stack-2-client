import React, { Component } from "react";
import {ControlLabel, FormControl, FormGroup} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";

export default class Interests extends Component {
    constructor(props) {
        super(props);

        this.state ={
            isLoading: false,
            interest: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.interest)
    }


    render() {
        return (
            <div className="interestSearch">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="interest" bsSize="large">
                        <ControlLabel>Interest</ControlLabel>
                        <FormControl
                            autoFocus
                            value={this.state.interest}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <LoaderButton
                        block
                        bsSize="large"
                        type="submit"
                        isLoading={this.state.isLoading}
                        text="Search"
                        loadingText="Searching..."
                    />
                </form>
            </div>
        );
    }
}