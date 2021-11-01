import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM // - here we should send the data to the API
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, school, city, details, phone, country, company, role, bio }
    } = this.props;
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
                <div>Confirm User Details</div>
            </AppBar>
          </div>

            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="School" secondary={school} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={bio} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone Number" secondary={phone} />
              </ListItem>


            </List>
            <br />

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Submit & Continue</Button>

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

export default Confirm;