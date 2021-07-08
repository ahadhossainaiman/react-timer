import React, { Component } from 'react'
import './counter.style.css'

export default class Counter extends Component {
    state = {
        count:0
    }
    increment = () =>{
        this.setState({count: this.state.count + 1})
    }
    decrement = () =>{
        if(this.state.count > 0){
            this.setState({count: this.state.count - 1})
        }
    }

    interValId = null;

    startTimer = () =>{
        if(this.state.count > 0 && !this.interValId){
           this.interValId = setInterval(() =>{
                this.setState({count:this.state.count -1},() =>{
                    if(this.state.count === 0){
                        alert("Time is Finished")
                        clearInterval(this.interValId)
                        this.interValId = null;
                    }
                })
            },1000)
        }
    }

    stopTimer = () =>{
        if(this.interValId){
            clearInterval(this.interValId);
            this.interValId = null;
            console.log(this.interValId);
        }
    }

    resetTimer = () =>{
        this.setState({count:0})
        clearInterval(this.interValId)
        this.interValId = null;
    }

    render() {
        return (
            <div>
                <h1>Time system</h1>
                <button className="btn" onClick={this.decrement}>-</button>
                <span style={{fontSize:'30px',fontWeight:'900',color:'#eee'}}>{this.state.count}:Sec</span>
                <button className="btn" onClick={this.increment}>+</button>
                <div>
                    <button className="btn" onClick={this.startTimer}>Start</button>
                    <button  className="btn" onClick={this.stopTimer}>Stop</button>
                    <button  className="btn" onClick={this.resetTimer}>Reset</button>
                </div>
            </div>
            
        )
    }
}
