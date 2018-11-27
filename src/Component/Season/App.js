import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      errorMessage: '',
    };

    window.navigator.geolocation.getCurrentPosition(
      position => (
        this.setState({ latitude: position.coords.latitude })
      ),
      err => (
        this.setState({ errorMessage: err.message })
      ),
    );
  }


  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Latitude: { this.state.latitude }</div>;
    }
    if (!this.state.errorMessage && this.state.latitude){
      return <div>Error: { this.state.errorMessage }</div>;
    }
    return <div>Loading</div>;
  }
}
export default App;
