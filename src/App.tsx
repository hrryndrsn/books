import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import creds from './key.json' 
import axios from 'axios'


interface Fields {
  bookTitle: string;
  bookAuthor: string;
  bookUrl: string;
  isReading: boolean;
  audiobook: boolean;
}

interface BookRecord {
  id: string;
  fields: Fields;
  createdTime: Date;

}
class App extends Component {
  componentDidMount() {
    this.fetchData(creds.key)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  fetchData = (key: string) => {
    let readingList: BookRecord[]
    readingList = []
    axios.get(`https://api.airtable.com/v0/appz2wjE9XrYOZ7Lq/reading%20list?api_key=` + key)
    .then(function (response) {
      // handle success
      // create a list of keys 
      let obj = Object.keys(response.data.records);
      let newRecord: BookRecord

      //interate through the arr of keys 
      obj.forEach(element => {
        let record = response.data.records[element]
        newRecord = {
          id: record.id,
          fields: record.fields,
          createdTime: record.createdTime
        }
        readingList.push(newRecord)
      });
      console.log(readingList)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    }
}

export default App;
