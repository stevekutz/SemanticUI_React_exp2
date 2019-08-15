import React, {Component, Fragment} from 'react';
import {Button, Icon, Container} from 'semantic-ui-react';
import ModalShortHand from './ModalShortHand';

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

/*    This works
const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
   

    {children}
    <ModalShortHand/>
  </Container>
);
*/
    // This works
class App extends Component {
  
  render() {
    return (
      <Fragment>
       

      <Container style = {{margin: `20px`, padding: `10px`, border: `1px solid dodgerblue`}}>
        <ModalShortHand/>
      </Container>
      
      </Fragment>
    )
  }

}



export default App;
