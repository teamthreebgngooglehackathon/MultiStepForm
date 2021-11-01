import React, { Component, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MultiselectCheckbox from "react-multiselect-checkbox";



export class Skills extends Component {


  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };


  render() {

    const { values, handleChange } = this.props;


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
                <div>Skills</div>
            </AppBar>
          </div>

           <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th> </th>
              <th>Skills</th>
              <th>
                <MultiselectCheckbox
                  checkboxes=".table .select-checkbox"
                  sync=".table .row"
                  onNotAllChecked={(selectedMap) => {
                    console.log("Not all checked", selectedMap.orderedByI());
                  }}
                  onAllChecked={(selectedMap) => {
                    console.log("All checked", selectedMap.orderedByI());
                  }}
                  onAllUnchecked={(selectedMap) => {
                    console.log("All unchecked", selectedMap.orderedByI());
                  }}
                />
              </th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr className="row">
              <td>1</td>
              <td>Financial Markets</td>
              <td>
                <input type="checkbox" className="select-checkbox" value="1" />
              </td>
            </tr>
            <tr className="row">
              <td>2</td>
              <td>SQL</td>
              <td>
                <input type="checkbox" className="select-checkbox" value="2" />
              </td>
            </tr>
            <tr className="row">
              <td>3</td>
              <td>Java</td>
              <td>
                <input type="checkbox" className="select-checkbox" value="3" />
              </td>
            </tr>
            <tr className="row">
              <td>4</td>
              <td>Python</td>
              <td>
                <input type="checkbox" className="select-checkbox" value="4" />
              </td>
            </tr>
            <tr className="row">
              <td>5</td>
              <td>Ruby</td>
              <td>
                <input type="checkbox" className="select-checkbox" value="5" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>




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


export default Skills;