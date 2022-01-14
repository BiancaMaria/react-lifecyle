import React, { Component } from "react";

export default class Users extends Component {

  constructor(){
    super();
    this.state = {
      secondsVisible: 0,
    };

    this.interval = null;
  }

  componentDidMount(){
    
    console.log("componentDidMount de Users.js");

    this.interval = setInterval(() => {
      const {secondsVisible} = this.state;
      
      this.setState({
        secondsVisible: secondsVisible + 1,
      })
    }, 1000);
  }

  componentDidUpdate(){
    console.log("componentDidUpdate de Users.js");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount de Users.js");
    clearInterval(this.interval);
  }

  render() {
    const { users } = this.props;
    const { secondsVisible } = this.state;

    return (
      <div>
        <p>Component Users visível por {secondsVisible} segundos</p>
        {users.map((user) => {
          const { login, name, picture } = user;
          return (
            <div className="container">
              <div className="row">
                <div className="col">
                  <img src={picture.large} />
                </div>
                <div className="col">
                  <p key={login.uuid}>{name.first}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
