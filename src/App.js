import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import './App.css'; // estilo siempre va al final

const cities = [
  'Buenos Aires,ar',
  'Bogotá,col',
  'Santiago,scl',
  'Ciudad de México,mx',
  'Madrid,es',
  'Rio de Janeiro,br'
];

class App extends Component {
  handleSelectionLocation = (city) => {
    console.log('handleSelectionLocation');
  }
  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title='Weather Location'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList
                cities = { cities }
                onSelectedLocation = {this.handleSelectionLocation}>
              </LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className= "detail">

                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
      // <MuiThemeProvider>
      //   <div className = "App" >
      //     <LocationList
      //       cities = { cities }
      //       onSelectedLocation = {this.handleSelectionLocation}>
      //     </LocationList>
      //   </div>
      // </MuiThemeProvider>
    );
  }
}

export default App;
