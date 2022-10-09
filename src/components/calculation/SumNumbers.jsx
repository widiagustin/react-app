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
                <div className="text-center m-5 max-w-xl mx-auto">
                    <h1 className="font-bold text-3xl py-5 text-yellow-500">Adding Two Numbers</h1>
                    <div className="flex flex-col gap-3">
                        <input
                            type="number"
                            placeholder="First Number..."
                            onChange={(e) => this.setState({ number1: e.target.value })}
                            className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        <input
                            type="number"
                            placeholder="Second Number..."
                            onChange={(e) => this.setState({ number2: e.target.value })}
                            className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        {/* <input type="number" placeholder="Second Number..." onChange={(e) => this.setState({ number2: e.target.value })} /> */}
                        <button
                            onClick={this.Calculate}
                            className="bg-blue-500 p-3 rounded-full text-white w-32 mx-auto mb-5"
                        >
                            ADD THEM!</button>
                    </div>
                    <h2 className="text-2xl bg-yellow-100 p-2 w-32 mx-auto rounded-lg border-gray-300 text-gray-700">Total : <span className="text-blue-500"> {this.state.result} </span></h2>
                </div>
            </div>
        )
    }
}