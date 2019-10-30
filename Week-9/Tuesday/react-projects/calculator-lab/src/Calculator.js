import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Button = styled.button`
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px;
  color: #fff;
  position: relative;
  display: inline-block;
  background-color: #6fc6ff;
  box-shadow: 0px 5px 0px 0px #3c93d5;
  animation: ${rotate360} 2s infinite; 
  &:hover {
    background-color: #6fc6ff;
  }
  &:active {
    transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
`;
const ErrorButton = styled(Button)`
  background-color: #e74c3c;
  box-shadow: 0px 5px 0px 0px #ce3323;
  &:hover {
    background-color: #ff6656;
  }
`;
const SuccessButton = styled(Button)`
  background-color: #2ecc71;
  box-shadow: 0px 5px 0px 0px #ce3323;
  &:hover {
    background-color: #48e68b;
  }
`;
const InfoButton = styled(Button)`
  background-color: #f1c40f;
  box-shadow: 0px 5px 0px 0px #d8ab00;
  &:hover {
    background-color: #ffde29;
  }
`;
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            output: 0,
            numOne: 0,
            numTwo: 0,
            hover: false,
            click: false
        }
        this.numOne = this.numOne.bind(this);
        this.numTwo = this.numTwo.bind(this);
        this.calculateIt = this.calculateIt.bind(this);
    }
    hoverEnter = () => {
        this.setState({ hover: true });
    }
    hoverLeave = () => {
        this.setState({ hover: false });
    }
    numOne(e) {
        const numOne = parseInt(e.target.value);
        this.setState({
            numOne
        })
    }
    numTwo(event) {
        const numTwo = parseInt(event.target.value);
        this.setState({
            numTwo
        })
    }
    calculateIt(operator) {
        let output;
        if (operator === "+") {
            output = this.state.numOne + this.state.numTwo;
        }
        else if (operator === "-") {
            output = this.state.numOne - this.state.numTwo;
        }
        else if (operator === "*") {
            output = this.state.numOne * this.state.numTwo;
        }
        else {
            output = this.state.numOne / this.state.numTwo;
        }
        this.setState({
            output
        })
    }
    mouseDown = () => {
        this.setState({ click: true })
    }
    mouseUp = () => {
        this.setState({ click: false })
    }
    render() {
        return (
            <div className="container">
                <h1>Calculate with React!</h1>
                <div className="add">
                    <input type="number" onChange={this.numOne} />
                    <input type="number" onChange={this.numTwo} />
                    <span>=</span>
                    <h3>{this.state.output}</h3>
                    <Button
                        onClick={() => this.calculateIt("+")}
                    >Add</Button>
                    <ErrorButton onClick={() => this.calculateIt("-")}>Subtract</ErrorButton>
                    <SuccessButton onClick={() => this.calculateIt("*")}>Multiply</SuccessButton>
                    <InfoButton onClick={() => this.calculateIt("/")}>Divide</InfoButton>
                </div>
            </div>
        )
    }
}
export default Calculator;
