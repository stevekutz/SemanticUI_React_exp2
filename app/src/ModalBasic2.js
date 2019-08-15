import React from 'react';
import {Button, Header, Icon, Modal} from 'semantic-ui-react';

const ModalBasic2 = () => (
    <Modal basic size = 'small' trigger = {<Button> Basic2 Modal </Button>}>
        <Header icon = 'user secret' content = 'Got some Secret stuff' />
        <Modal.Content>
            <p> This is just some message in the content section </p>
        </Modal.Content>

        <Modal.Actions>
            <Button inverted color = 'purple'>
                <Icon style = {{margin: `20px`, 
                                padding: `10px`, 
                                display: 'flex', 
                                justifyContent: 'center',
                                alignItems: 'center'
                              }} 
                      name = 'angrycreative'> Angry Creative icon</Icon>
            </Button>

            <Button>
                <Icon style = {{margin: `10px`, 
                                padding: `5px`, 
                                display: 'flex', 
                                justifyContent: 'center',
                                alignItems: 'center'
                              }} 
                
                name = 'github square'> Github Square </Icon>
            </Button>  
        </Modal.Actions>
    </Modal>

)

export default ModalBasic2;