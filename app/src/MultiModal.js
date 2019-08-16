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
                size = 'large'
                trigger = {
                    <Button primary icon>
                        Goto the Next Modal <Icon name = 'mail forward'/>
                    </Button>
                }
            >
                <Modal.Header>Next Modal</Modal.Header>
                <Modal.Content>
                    <p> Next Modal content here</p>
                    <p> Just something extra here </p>
                </Modal.Content>
                <Modal.Actions>
                    <ModalNested2/>
                </Modal.Actions>
            </Modal>
        )
    }
}

// avail sizes >> ["mini","tiny","small","large","fullscreen"]

class ModalNested2 extends React.Component {
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
                        Goto the Next2 Last Modal <Icon name = 'mail forward'/>
                    </Button>
                }
            >
                <Modal.Header>Next2 Last Modal</Modal.Header>
                <Modal.Content>
                    <p> Next2 Last Modal content here</p>
                </Modal.Content>
                <Modal.Actions>
                    <ModalNestedLast/>
                </Modal.Actions>
            </Modal>
        )
    }
}

class ModalNestedLast extends React.Component {
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
                size = 'mini'
                trigger = {
                    <Button primary icon>
                        Goto the Last Modal <Icon name = 'triangle right'/>
                    </Button>
                }
            >
                <Modal.Header>Last Modal</Modal.Header>
                <Modal.Content>
                    <p> Last Modal content here</p>
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
          <p>Go to the next Modal NOW</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <ModalNested />
      </Modal.Actions>   
    </Modal>
)

export default MultiModal;