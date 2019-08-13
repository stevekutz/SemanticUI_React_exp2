import React, {Component, Fragment} from 'react';
import {Button} from 'semantic-ui-react';

import './App.css';

const ButtonExampleBasicShorthand = () => (
  <div>
    <Button content='Standard' basic />
    <Button basic color='red' content='Red' />
    <Button basic color='violet' content='Violet' />
    <Button basic color='purple' content='Purple' />
  </div>
)

class App extends Component {
  
  render() {
    return (
      <Fragment>
        <div className="App">
          <ButtonExampleBasicShorthand /> 
        </div>
      </Fragment>
    )
  }

}

export default App;
