import React, { Component } from 'react';

function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>Water would boil.</p>;
    }
    return <p>Water would not bol.</p>;
}

class Calculator extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: ''};
  }
  
  handleChange(e){
    this.setState({value:e.target.value});
  }

  render(){
    const value = this.state.value;
    return (
      <fieldset>
        <legend>Enter Temperature in Celsius:</legend>
        <input 
          value={value}
          onChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(value)} />
      </fieldset>
    );
  }
}

export default Calculator;
