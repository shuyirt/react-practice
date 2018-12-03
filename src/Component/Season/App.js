import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
  constructor(props) {
    super(props);
    // do not do data loading and api call in constructor
    this.state = {
      latitude: null,
      errorMessage: '',
    };
  }

  state = {
    latitude: null,
    errorMessage: '',
  };

  // Only did this one time
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => (
        this.setState({ latitude: position.coords.latitude })
      ),
      err => (
        this.setState({ errorMessage: err.message })
      ),
    );
  };

  renderContent(){
    if (this.state.errorMessage && !this.state.latitude) {
      return <div className="border red">
        <div>Error: { this.state.errorMessage }</div>
      </div>;
    }
    if (!this.state.errorMessage && this.state.latitude){
      return <SeasonDisplay lat={this.state.latitude}/>;
    }
    return <Spinner message="please, accept location request"/>;
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>

    )
  }
}
export default App;
