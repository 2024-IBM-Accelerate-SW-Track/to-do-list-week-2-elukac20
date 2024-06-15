import React, { Component } from "react";
import { Button, TextField } from "@mui/material";

class AddTodo extends Component {
  // Create a local react state of the this component with a content property set to nothing.
  constructor() {
    super();
    
    this.state = {
      content: "",
      pre:"",
      acc:"",
      date:"",
    };
  }
  // The handleChange function updates the react state with the new input value provided from the user.
  // "event" is the defined action a user takes. In this case, the event is triggered when the user types something
  // into the text field.
  handleChange = (event) => {
    let val = event.target.value;
    let inputName = event.target.name;
    if(inputName === 'content'){
      this.setState({
        content: val,
      });
    }
    if(inputName === 'pre'){
      this.setState({
        pre: val,
      });
    }
    if(inputName === 'acc'){
      this.setState({
        acc: val
      });
    }
    this.setState({
      date:Date().toLocaleString('en-US')
    });
  };
  // The handleSubmit function collects the forms input and puts it into the react state.
  // event.preventDefault() is called to prevents default event behavior like refreshing the browser.
  // this.props.addTodo(this.state) passes the current state (or user input) into the addTodo function defined
  // in the Home.js file which then adds the input into the list.
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.content.trim()) {
      this.props.addTodo(this.state);
      this.setState({
        content: "",
        date:"",
        pre:"",
        acc:"",
      });
    }
    
  };
  render() {
    return (
      // 1. When rendering a component, you can render as many elements as you like as long as it is wrapped inside
      // one div element.
      // 2. The return statement should include a text field input with the handleChange function from above that
      // is passed into an onChange event.
      // 3. The return should also include a button with the handleSubmit function from above that is passed into
      // an OnClick event.
      // 4. The value of the text field also should reflect the local state of this component.
      <div>
        <TextField
          label="Add New Item"
          name="content"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.content}
          data-testid="new-item-textfield"
        />
        <TextField 
          label="Add Preconditions" 
          name="pre"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.pre}
        />
        <TextField
          label="Add Acceptance Criteria" 
          name="acc"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.acc}
        />
        <Button
          style={{ marginLeft: "10px" }}
          onClick={this.handleSubmit}
          variant="contained"
          color="primary"
          data-testid="new-item-button"
        >
          Add
        </Button>
      </div>
    );
  }
}

export default AddTodo;
