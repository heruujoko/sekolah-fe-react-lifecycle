import React, { Component } from 'react';
import ProductInfo from '../components/ProductInfo';
import Loading from '../components/Loading';
export default class Products extends Component {

    constructor() {
        super();
        console.log('constructor');
        this.state = {
            loading: false,
            products: [],
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
                {/* <ProductInfo loading={this.state.loading}/> */}
                <table className="table table-stripped table-content">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !this.state.loading && this.state.products.map((pr) => {
                                return (
                                    <tr>
                                        <td>{pr.id}</td>
                                        <td>{pr.title}</td>
                                        <td>{pr.body}</td>
                                    </tr>
                                )
                            })
                        }
                        {this.state.loading && <Loading />}
                    </tbody>
                </table>
            </div>
        )
    }

    getData(repeat) {
        console.log('get data');
        this.setState({ loading: true });

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(`response`);
                console.log(data);
                this.setState({
                    // loading: false,
                    products: data,
                });

                if (repeat) {
                    this.routine = setInterval(() => {
                        this.getData(false);
                    }, 2500);
                }
            });
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.getData(true);
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