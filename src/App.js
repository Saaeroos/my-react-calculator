import React, { Component } from 'react';

import * as math from 'mathjs'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css'
import Input from './components/Input'
import Button from './components/Button'
import Clear from './components/Clear'


class App extends Component {
    state = {
        input: ''
    }
    clearHandler = ()=> {
        this.setState({
            input: ''
        })
    }
    addValueHandler = val => {
        this.setState({
            input: this.state.input + val
        })
    }
    evaluationHandler = ()=> {
        let equation = this.state.input
        let solution = eval(equation)
        this.setState({
            input: solution
        })
    }
    render() {
        return (
            <div className="app">
                <div className="calc-wrapper">
                    <Input>{this.state.input}</Input>
                    <div className="row">
                        <Button addVal={this.addValueHandler}>7</Button>
                        <Button addVal={this.addValueHandler}>8</Button>
                        <Button addVal={this.addValueHandler}>9</Button>
                        <Button addVal={this.addValueHandler}>/</Button>
                    </div>
                    <div className="row">
                        <Button addVal={this.addValueHandler}>4</Button>
                        <Button addVal={this.addValueHandler}>5</Button>
                        <Button addVal={this.addValueHandler}>6</Button>
                        <Button addVal={this.addValueHandler}>x</Button>
                    </div>
                    <div className="row">
                        <Button addVal={this.addValueHandler}>1</Button>
                        <Button addVal={this.addValueHandler}>2</Button>
                        <Button addVal={this.addValueHandler}>3</Button>
                        <Button addVal={this.addValueHandler}>+</Button>
                    </div>
                    <div className="row">
                        <Button addVal={this.addValueHandler}>.</Button>
                        <Button addVal={this.addValueHandler}>0</Button>
                        <Button addVal={this.evaluationHandler}>=</Button>
                        <Button addVal={this.addValueHandler}>-</Button>
                    </div>
                    <div className="row">
                        <Clear clear={this.clearHandler}>Clear</Clear>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default App;