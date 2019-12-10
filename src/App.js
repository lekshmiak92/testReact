import React, { Component } from "react";
import "./App.css";
import { TOKEN } from "./token";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleStatusChange = () => {
    let userInput = document.getElementById("idInput").value;
    let endPoint = "https://mern-app-sample-1.herokuapp.com";
    let token = TOKEN;
    console.log(token);
    let url = endPoint + "/changeUserPlivoEnabledState?";
    fetch(url, {
      method: "put",
      headers: {
        // "Content-Type": "application/json",
        "x-auth-id-token": token
      },
      body: JSON.stringify({
        isPlivoEnabled: false,
        firebaseId: "UldvXHBwuKZYVyT4enqVD2PpFvN2"
      })
    })
      .then(res => {
        this.Auth.handleError(res.status);
        return res.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  render() {
    return (
      <>
        <div style={{ textAlign: "center", display: "flex" }}>
          <h3>Change status</h3>
          <input id="idInput"></input>
          <button onClick={this.handleStatusChange}>Set</button>
        </div>
      </>
    );
  }
}

export default App;
