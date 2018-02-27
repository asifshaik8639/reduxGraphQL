import React from 'react';
import { Link } from 'react-router';
import '../../styles/shared.css';

class HomePage extends React.Component {
  render() {
      return (
      <div>         
        <div className='rootContainer'>        
            <div className='containerBox'>
                <h1><b> Client side</b> </h1>
                <ul>
                    <li><b> React </b>- A Javascript library for building User Interfaces</li>
        
                    <li><b> Redux </b>- An application architecture for building User Interfaces</li>
                    
                  <li><b> GraphQL </b>- is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data</li>
          
                   <li><b> webpack </b>- is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.</li>

                    <li><b> Bootstrap </b>- Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</li>

                    <li><b> Toastr </b>- is a Javascript library for non-blocking notifications</li>
                </ul>
            </div>
          
            <div className='containerBox'>
                <h1> <b>Server side</b> </h1>
                <ul>
                    <li><b> Node.js </b>- is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js package ecosystem, npm, is the largest ecosystem of open source libraries in the world</li>
          
                    <li><b> Express </b>- is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile application</li> 
                          
                </ul>
            </div>
          
            <div className='containerBox'>
                <h1> <b>Database side</b> </h1>
                <ul>
                    <li><b> MongoDB</b>- is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas.</li>
                </ul>
            </div>
          
            <Link to="reduxgraphql"
             className="col-xs-offset-9 col-xs-3 btn btn-primary btn-sm">Visit Redux GraphQL Page</Link>
        </div>
      </div>
    );   
  }
}

export default HomePage;
