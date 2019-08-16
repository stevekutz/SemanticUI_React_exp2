import React, {Component, Fragment} from 'react';
import {Button, Icon, Container} from 'semantic-ui-react';
import ModalShortHand from './ModalShortHand';
import ModalBasic from './ModalBasic';
import ModalBasic2 from './ModalBasic2';
import ModalTopAligned from './ModalTopAligned';

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

/*
   // This works
const App = ({ children }) => (
  
  <Container style={{ margin: 20 }}>
   

    {children}
    <ModalShortHand/>
    <ModalBasic/>
    <ModalBasic2/>
    <ModalTopAligned/>
  </Container>
);
*/


// This works
class App extends Component {
  
  render() {
   // console.log('this.props.children is >> ', this.props.children);
    return (
      <Fragment>
       

      <Container style = {{margin: `20px`, padding: `10px`, border: `1px solid dodgerblue`}}>
        <ModalShortHand/>
      </Container>
      <Container style = {{margin: `20px`, padding: `10px`, border: `1px solid deeppink`}}>
        <ModalBasic/>
      </Container>
      <Container style = {{margin: `20px`, padding: `10px`, border: `1px solid seagreen`}}>
        <ModalBasic2/>
      </Container>
      <Container style = {{margin: `20px`, padding: `10px`, border: `1px solid seagreen`}}>
        <ModalTopAligned/>
      </Container>


      </Fragment>
    )
  }

}



export default App;
