import React, { Component, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export class FormPersonalDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };


  constructor (props) {
    super(props)
    this.state = {
      startDate: new Date(),
      endDate: new Date(),

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,

    })
  }


  handleChange1(date) {
    this.setState({
      endDate: date,

    })
  }


  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate)
    console.log(this.state.endDate)
  }






  render() {

    const { values, handleChange } = this.props;
    const options = [
    'BSc', 'BEng', 'MSc','BA','MA','PhD'];

    const options1 = [
    'Computer Science', 'Mechanical Engineering', 'Electronic and Electrical Engineering','Physics','Business'];

    const defaultOption = 'Please Choose';


    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <div align="center">
            <AppBar>
                <div>Education</div>
            </AppBar>
          </div>
            <TextField
              placeholder="Enter Your School"
              label="School"
              onChange={handleChange('school')}
              defaultValue={values.school}
              margin="normal"
              fullWidth
            />

            <br />

           <form onSubmit={ this.onFormSubmit }>
        <div className="form-group">
          <DatePicker
               //<h3>yay</h3>
              selected={ this.state.startDate }
              onChange={ this.handleChange }
              label="Start Date"
              name="startDate"
              dateFormat="MM/dd/yyyy"

          />
          <button className="btn btn-primary">Start Date</button>
        </div>
      </form>


        <br />

        <form onSubmit={ this.onFormSubmit }>
        <div className="form-group">
          <DatePicker

              selected={ this.state.endDate }
              onChange={ this.handleChange1 }
              defaultValue={this.state.endDate}
              name="endDate"
              dateFormat="MM/dd/yyyy"

          />
          <button className="btn btn-primary">End Date</button>
        </div>
      </form>


        <br />

        <div>Qualification</div>
        <Dropdown
        options={options}
        onChange={this._onSelect}
        value={defaultOption}
        placeholder="Select an option"
        title="Drop small"
        label="Details"
        />

        <br />

        <div>Area of Study</div>
        <Dropdown
        options={options1}
        onChange={this._onSelect}
        value={defaultOption}
        placeholder="Select an option"
        title="Drop small"
        label="Details"
        />

        <br />
        <button className="btn btn-primary">Remove</button>

        <br />

        <button className="btn btn-primary">Add Another</button>

        <br />



            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>


            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

          </Dialog>
        </>
      </MuiThemeProvider>
    );








  }
}


export default FormPersonalDetails;