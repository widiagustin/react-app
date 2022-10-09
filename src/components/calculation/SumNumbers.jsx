import React from "react";

export default class SumNumbers extends React.Component {
    state = {
        number1: 0,
        number2: 0,
        result: 0
    }

    Calculate = () => {
        this.setState({ result: parseInt(this.state.number1) + parseInt(this.state.number2) })
    }
    render () {
        return (
            <div>
                <div className="text-center m-5">
                    <h1 className="font-bold text-3xl">Adding Two Numbers</h1>
                    <div className="form">
                        <input type="number" placeholder="First Number..." onChange={(e) => this.setState({ number1: e.target.value })} />
                        <input type="number" placeholder="Second Number..." onChange={(e) => this.setState({ number2: e.target.value })} />
                        <button onClick={this.Calculate}>ADD THEM!</button>
                    </div>
                    <h2>Total : {this.state.result}</h2>
                </div>
            </div>
        )
    }
}