import React, { Component } from "react";
import {ControlLabel, FormControl, FormGroup} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { API, Storage } from "aws-amplify";
import List from '../components/List';


export default class Interests extends Component {
  constructor(props) {
    super(props);

    this.state ={
      isLoading: false,
      interest: "",
      data: undefined
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const data = await API.get("search", `/search?interest=${this.state.interest}&limit=100`);
    this.setState({...data});
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
        <List data={this.state.data}/>
      </div>
    );
  }
}
