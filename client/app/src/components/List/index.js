/**
 * Created by gem on 30/07/2017.
 */

import React, { Component } from 'react';


class List extends Component {
    render() {
        this.listItems = this.props.numbers.map((number, index) =>
            <li className="app__list__el" key={index}>
                {number}
            </li>
        );
        return (
            <ul className="app__list">{this.listItems}</ul>
        );
    }
}

export default List;
