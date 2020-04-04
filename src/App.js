import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DashboardLayout from './layouts/DashboardLayout';
import Product from './pages/Product';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <DashboardLayout>
              <p>Dashboard</p>
            </DashboardLayout>
          </Route>
          <Route path="/products" exact>
            <DashboardLayout>
              <Product />
            </DashboardLayout>
          </Route>
          <Route path="/products/:id" exact>
            <DashboardLayout>
              <p>Products Detail</p>
            </DashboardLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
