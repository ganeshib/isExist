import React from 'react';
import './App.css';
import Header from './Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import Searchbox from '../Searchbox/Searchbox';

const name=require('@rstacruz/startup-name-generator');
class App extends React.Component{
    constructor(){
        super();
        this.state={
            headerText:"is Exist!",
            headerExpanded: true,
            suggestedNames:[],
        };
    }
    handleInputChange= (inputText) => {
        name(inputText);
       this.setState
       ({
           headerExpanded: !inputText,
           suggestedNames:inputText ? name(inputText):[],
       });
    };
    render()
    {
        return (
        <div> 
            <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText} />
            <Searchbox onInputChange={this.handleInputChange} />
            <ResultsContainer suggestedNames={this.state.suggestedNames} />
        </div>
        );
    }
}
export default App
