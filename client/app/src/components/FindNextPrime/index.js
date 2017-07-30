/**
 * Created by gem on 30/07/2017.
 */

import React, { Component } from 'react';
import Button from '../Button/index';
import List from '../List/index';
let axios = require('axios');

class FindNextPrime extends Component {

    constructor(props) {
        super(props);
        this.state = {numbers: []};
    }

    searchNextPrime = () => {
        let val = this.state.numbers.length === 0 ? 0 : this.state.numbers[this.state.numbers.length - 1];

        axios.get('http://localhost:1515/next-prime?val=' + val).then((response) => {
            let numbers = this.state.numbers.slice();
            numbers.push(response.data);
            this.setState({numbers: numbers});
        });
    };

    reset = () => {
        this.setState({numbers: []});
    };

    render() {
        return (
            <div>
                <div className="app__title">Trouver le prochain nombre premier</div>
                <List numbers={this.state.numbers} />
                <Button label="Remise à zéro" onClick={this.reset} />
                <Button label="Suivant" onClick={this.searchNextPrime} />
            </div>
        );
    }
}

export default FindNextPrime;
