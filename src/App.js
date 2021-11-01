import React, { Component } from 'react';
import './App.css';
import { UserForm } from './components/UserForm';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class App extends Component {
    render() {
      return (
        <div className="App">
          <UserForm />
        </div>
      );
    }
}
export default App;
