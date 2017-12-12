import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>React Redux GraphQL</h1>
        <p>POC for showcasing GraphQL with Redux.</p>
        <Link to="reduxgraphql" className="btn btn-primary btn-lg">Swith to Redux GraphQL Page</Link>
        
      </div>
    );
  }
}

export default HomePage;
