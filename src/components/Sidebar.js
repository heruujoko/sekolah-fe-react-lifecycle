import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Sidebar extends Component {

    navigate(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="sidebar">
                <ul>
                    <li>
                        <a href="#" onClick={() => this.navigate('/')}>Dashboard</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => this.navigate('/products')}>Products</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => this.navigate('/products/1')}>Products 1</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default withRouter(Sidebar);