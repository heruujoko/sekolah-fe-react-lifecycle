import React, { Component } from 'react';

export default class ProductInfo extends Component {
    render() {
        return (
            <p>Product info {JSON.stringify(this.props)}</p>
        )
    }

    componentWillReceiveProps(nextProps) {
        console.log(`ProductInfo => componentWillReceiveProps`, nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.loading === nextProps.loading) {
            console.log('*** not render because of same props ***');
            return false;
        } else {
            console.log('*** continue render ***');
            return true;
        }
    }

    componentWillUpdate() {
        console.log(`ProductInfo => componentWillUpdate`);
    }

    componentDidUpdate() {
        console.log(`ProductInfo => componentDidUpdate`);
    }
}