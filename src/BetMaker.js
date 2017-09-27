import React, { Component } from 'react';

class BetMaker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            edge: ''
        };
    }

    makeBet = () => {

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
                    <form className="form-horizontal">
                    <legend>Make bet</legend>
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2 bet-row">
                                <input name="value" value={ this.state.value } onInput={ this.handleChange } type="text" className="form-control" placeholder="Number of tokens" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2 bet-row">
                                <input name="edge" value={ this.state.edge } onInput={ this.handleChange } type="text" className="form-control" placeholder="Edge" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-lg-offset-4">
                                <button type="button" className="btn btn-info" onClick={ this.makeBet }>Offer Bet</button>
                            </div>
                        </div>

                        </form>
                    </div>
            </div>
        );
    }

}

export default BetMaker;