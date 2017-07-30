/**
 * Created by gem on 30/07/2017.
 */

import React, { Component } from 'react';


class RequestError extends Component {
    render() {
        return (
            <p className="app__error">{this.props.error}</p>
        );
    }
}

export default RequestError;
