import React, { Component } from 'react';

class Balance extends Component {

    constructor(props) {
        super(props);

        this.state = {
            deposit: '',
            withdraw: '',
            balance: 0
        };
    }

    depositTokens = () => {
        
    }

    withdrawTokens = () => {

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    render() {   
        return (
                <div className="col-lg-4">
                    <div className="well">
                        <legend>Balance: { this.state.balance } </legend>

                        <div className="row">
                            <div className="col-lg-7">
                                <input name="deposit" value={ this.state.deposit } onInput={ this.handleChange } type="text" className="form-control" placeholder="Edge" />
                            </div>
                            <div className="col-lg-4">
                                <button type="button" className="btn btn-info" onClick={ this.depositTokens }>Deposit</button>
                            </div>
                        </div>

                        <hr />

                        <div className="row">
                            <div className="col-lg-7">
                                <input name="withdraw" value={ this.state.withdraw } onInput={ this.handleChange } type="text" className="form-control" placeholder="Edge" />
                            </div>
                            <div className="col-lg-4">
                                <button type="button" className="btn btn-info" onClick={ this.withdrawTokens }>Withdraw</button>
                            </div>
                        </div>

                    </div>
                </div>
        );
    }

}

export default Balance;