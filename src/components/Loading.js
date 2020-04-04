import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

export default class Loading extends Component {
    render() {
        return (
            <Loader
                type="Bars"
                color="#00BFFF"
                height={50}
                width={50}
            />
        )
    }
}

