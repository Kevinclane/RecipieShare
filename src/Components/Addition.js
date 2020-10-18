import React from 'react';
import '../App.css';
import Difficulty from "./Difficulty";


class Addition extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num1: 0,
      num2: 0,
      difficulty: "",
      difficultySelect: true
    }
  }
  componentDidMount() {
    this.generateEasyProblem()
  }

  render() {
    if (this.state.difficultySelect) {
      return (
        <Difficulty chooseDifficulty={this.chooseDifficulty} />
      )
    } else {

      return (
        <div className="container">
          <div>
            <i className="fa fa-arrow-left fa-3x cursor" aria-hidden="true" onClick={() => this.props.changeView("home")}></i>
          </div>
          <div className="row">
            <div className="col">
              num1: {this.state.num1}
            num2: {this.state.num2}
            </div>
          </div>
        </div>
      )
    }
  }

  generateEasyProblem = () => {
    this.setState({
      num1: Math.ceil(Math.random() * 10),
      num2: Math.ceil(Math.random() * 10)
    })
  }
  chooseDifficulty = (choice) => {
    this.setState({
      difficulty: choice
    })
  }
}
export default Addition