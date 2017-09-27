import React, { Component } from 'react';

import EthbetToken from '../build/contracts/EthbetToken.json';

import contract from 'truffle-contract';
import getWeb3 from './utils/getWeb3';


class Balance extends Component {

    constructor(props) {
        super(props);

        this.state = {
            deposit: '',
            withdraw: '',
            balance: 0,
            admin: '',
            ethbetInstane: props.ethbetInstane,
            tokenInstance: null,
            web3: null
        };
    }

     componentDidMount() {

        getWeb3
        .then(async (results) => {
            this.setState({
                web3: results.web3
            })

            results.web3.eth.getAccounts( async (error, accounts) => {

                this.setState({
                    admin: accounts[0]
                });

                // Instantiate contract once web3 provided.
                await this.instantiateContract();

            });

        });


    }

     instantiateContract = async () => {

        const ethbetToken = contract(EthbetToken);
        ethbetToken.setProvider(this.state.web3.currentProvider);
        
        const tokenInstance = await ethbetToken.deployed();
           
        this.setState({
            tokenInstance
        });
    }


    depositTokens = async () => {

        const admin = this.state.admin;
        const tokenInstance = this.state.tokenInstance;
        
        const deposit = this.state.deposit;

        console.log(deposit);

        const approve = await tokenInstance.approve.sendTransaction("0x73d23219be42d4cadb8a7ec8cffae432464bcb41", parseInt(deposit, 10), {from: admin, value: 0});

        console.log(approve);

        //We'll have to wait for it to get mined
        const contractBalance = await tokenInstance.allowance(admin, "0x73d23219be42d4cadb8a7ec8cffae432464bcb41");

        this.setState({
            balance: contractBalance.valueOf()
        });

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
                                <input name="deposit" value={ this.state.deposit } onInput={ this.handleChange } type="text" className="form-control" placeholder="Deposit tokens" />
                            </div>
                            <div className="col-lg-4">
                                <button type="button" className="btn btn-info" onClick={ this.depositTokens }>Deposit</button>
                            </div>
                        </div>

                        <hr />

                        <div className="row">
                            <div className="col-lg-7">
                                <input name="withdraw" value={ this.state.withdraw } onInput={ this.handleChange } type="text" className="form-control" placeholder="Withdraw tokens" />
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