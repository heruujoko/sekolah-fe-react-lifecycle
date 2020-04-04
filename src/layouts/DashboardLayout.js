import React, { Component } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default class DashboardLayout extends Component {
    render() {
        return (
            <div className="layout-grid">
                <Header />
                <Sidebar />
                <div className="content">
                    { this.props.children }
                </div>
            </div>
        );
    }
}