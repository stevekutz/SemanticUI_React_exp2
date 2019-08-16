import React from 'react';
import {Button, Icon, Modal} from 'semantic-ui-react';

class ModalNested extends React.Component {
    state = {
        open: false,

    }

    //handlers
    open = () => this.setState({ open: true});
    close = () => this.setState({open: false})

    render() {
        const {open} = this.state;

        return (
            <Modal
                open = {open}
                onOpen = {this.open}
                onClose = {this.close}
                size = 'tiny'
                trigger = {
                    <Button primary icon>
                        Goto Next Modal <Icon name = 'mail forward'/>
                    </Button>
                }
            >
                <Modal.Header>Next Modal</Modal.Header>
                <Modal.Content>
                    <p> Next Modal content here</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button icon = 'hand victory' content = "That/'s All folks" onClick = {this.close} />
                </Modal.Actions>
            </Modal>
        )
    }
}

const MultiModal = () => (
    <Modal trigger = {<Button> Multy Modals</Button>}>
        <Modal.Header> Firsty </Modal.Header>
        <Modal.Content image>
        <div className='image'>
          <Icon name='right arrow' />
        </div>
        <Modal.Description>
          <p>Go to the next Modal</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <ModalNested />
      </Modal.Actions>   
    </Modal>
)

export default MultiModal;