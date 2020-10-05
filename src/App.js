import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from "axios";

let base = window.location.host.includes("localhost")
  ? "//localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true,
});

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { apiResponse: "" }
  }

  async callAPI() {
    try {
      let res = await api.get("userinfo")
      this.state.apiResponse = res.data
    } catch (error) {
      console.error(error)
    }
  }

  componentWillMount() {
    this.callAPI()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.apiResponse}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
