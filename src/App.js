import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedArticle } from './actions';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
  }

  render(){
    const selectedArticle = (this.props.articles[this.props.selectedArticle])?
                            this.props.articles[this.props.selectedArticle].content:'none';
    return ( <div><h2>React Redux App</h2>
    {this.props.articles.map(
      (article, index)=>{
        return <li key={index} 
                   className ={(this.props.selectedArticle === index)?'selected':'' }
                   onClick={(event)=>this.props.onArticleClick(event, index)} >
          {article.title}</li>
      }
    )}
    <p>{selectedArticle}</p>
    </div> 
    );
  }

}

const mapStateToProps = function(state){
  return {
    selectedArticle: state.selectedArticle,
    articles: state.articles
  }
}

const mapDispatchToProps = function(dispatch){
  return {
    onArticleClick: (event, index) => {
      dispatch(setSelectedArticle(index));
    }
  }
}

const VisibleApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default VisibleApp;