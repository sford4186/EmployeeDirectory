import React, { Component } from 'react';
import './App.css';
import Table from './components/Table'
import empList from "./lib/employees.json"
import Searchbox from './components/Searchbox'

class App extends Component {
  state = {
    employees: [],
    sortDirection: ""
  }
  componentDidMount() {
    this.setState({ employees: empList })
  }
  handleListUpdate = newList => this.setState({employees: newList})
  handleSort = (firstSort, whatToSort) =>{
    const sortedList = this.state.employees.sort((a, b)=> {
      let first 
      let second 
      if(whatToSort){
        first = a[firstSort][whatToSort];
        second = b[firstSort][whatToSort];
      }else{
        first = a[firstSort];
        second = b[firstSort];
      }
      if(this.state.sortDirection === "des"){
        if (first >  second) {
          return 1;
        }
        if (first < second) {
          return -1;
        }
        return 0;
      }else{
        if (first <  second) {
          return 1;
        }
        if (first > second) {
          return -1;
        }
        return 0;
      }
    });
    this.setState( {employees: sortedList, sortDirection: this.state.sortDirection ==="des"? "asc":"des"})
  }
  render() {
    return (
      <div className="App">
        <div> Employee Directory </div>
        <Searchbox employees={empList} update={this.handleListUpdate} />
        <Table employees={this.state.employees} sort ={this.handleSort}/>
      </div>
    );
  }
}

export default App;
