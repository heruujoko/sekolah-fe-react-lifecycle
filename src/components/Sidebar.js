import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul>
                    <li>
                        <a href="/">Dashboard</a>
                    </li>
                    <li>
                        <a href="/products">Products</a>
                    </li>
                    <li>
                        <a href="/products/1">Products 1</a>
                    </li>
                </ul>
            </div>
        )
    }
}