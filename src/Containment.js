import React, {Component} from 'react';

function Contacts() {
  return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}

function FancyBorder(props){
  return(
    <div className={'FancyBorder FancyBorder-'+props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props){
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return(
    <Dialog 
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}

function SplitPane(props){
  return(
    <div className="SplitPane">
      <div className="SplitPane-Left">
        {props.left}
      </div>
      <div className="SplitPane-Right">
        {props.right}
      </div>
    </div>
  );
}

class Containment extends Component{
  constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSignUp = this.handleSignUp.bind(this);
      this.state = {login: ''};
  }

  render(){
    return (
      <div>
        <WelcomeDialog />
        <SplitPane left={<Contacts />} right={<Chat />} />
        <Dialog title="Mars Exploration Program"
                message="How should we refer to you?">
          <input value={this.state.login}
                 onChange={this.handleChange} />
          <button onClick={this.handleSignUp}>
            Sign Me Up!
          </button>
        </Dialog>
      </div>
    );
  }

  handleChange(e){
      this.setState({login: e.target.value});
  }

  handleSignUp(){
      alert(`Welcome Aboard,${this.state.login}!`);
  }
}

export default Containment;