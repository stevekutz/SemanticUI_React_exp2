import React, {Component, Fragment} from 'react';
import {Button, Icon} from 'semantic-ui-react';

import './App.css';

const ButtonExampleBasicShorthand = () => (
  <div>
    <Button content='Standard' basic />
    <Button basic color='red' content='Red' />
    <Button inverted color='red' content='red' />
    <Button inverted color='violet'> Violet inverted</Button>
    <Button animated='vertical up' inverted color='green'>
      <Button.Content hidden> Bolt </Button.Content>
      <Button.Content visible>
        <Icon name='bolt' />
      </Button.Content>
    </Button>
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
