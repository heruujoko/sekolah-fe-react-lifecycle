import React, { Component } from 'react';
import ProductInfo from '../components/ProductInfo';

export default class Products extends Component {

    constructor() {
        super();
        console.log('constructor');
        this.state = {
            loading: false
        }
        this.routine = 0;
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    render() {
        console.log('render', this.state);
        return (
            <div>
                { this.state.loading? <p>loading data...</p> : <p>Products</p>}
                <ProductInfo loading={this.state.loading}/>
            </div>
        )
    }

    getData() {
        this.setState({ loading: true });

        // delay 2.5s (2500ms)
        setTimeout(() => {
            this.setState({ loading: false });
        }, 2500);
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.setState({ loading: true });
        
        setTimeout(() => {
            this.getData();
        }, 1000);

        this.routine = setInterval(() => {
            console.log(`Products => interval 1s`);
        }, 1000);
        console.log(`routine ${this.routine}`);
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.routine);
    }

}