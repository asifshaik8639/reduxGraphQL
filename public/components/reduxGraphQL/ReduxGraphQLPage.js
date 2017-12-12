import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as graphQLActions from '../../actions/graphQLActions';
import { Link, browserHistory } from 'react-router';
import '../../styles/graphql.css';

class ReduxGraphQLPage extends React.Component {
 constructor(props) {
     super(props);
     this.buttonClickHandler = this.buttonClickHandler.bind(this);        
 } 
    
 buttonClickHandler() {
     console.log('buttonClickHandler in GraphQL page');
     this.props.actions.loadGraphQLData();
 }
    
  render() { 
    let result = this.props.data; 
    
    console.log('result in the render ============> ',result);
      
    let content = result.map((link) => { 
        
         return  <tr key={link._id}>
                    <td className='result-data'>{link._id}</td>
                    <td className='result-data'>{link.title}</td>
                    <td className='result-data'>
                        <a target="_blank" href={link.url}>{link.url}</a>
                    </td>
                 </tr>
    }); 
    return (
      <div className="jumbotron">
        <h1>React Redux GraphQL </h1>
        {
            result && result.length === 0 &&
              <div>
                  <p>Click on the button to get the data</p>
                  <input
                  type="button"
                  value="Redux GraphQL Click"
                  className="btn btn-primary"
                  onClick={this.buttonClickHandler}/> 
             </div>
        }
        {
            result && result.length > 0 &&
                <div className='tableborder'> 
                     <table className='tableStyle'>
                      <tr>
                        <th className='header'>Id</th>
                        <th className='header'>Title</th>                
                        <th className='header'>URL</th>
                      </tr>
                        {content}
                     </table>
                </div>
        }
      </div>
    );
        
    }
  
  
}

ReduxGraphQLPage.propTypes = {  
  data: PropTypes.array.isRequired  
};
                             

function mapStateToProps(state, ownProps) {     
  console.log('ReduxGraphQLPage state =>',state);    
  return {    
     data: state.reduxGraphQLReducer.reduxGraphQLData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(graphQLActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxGraphQLPage);