import React from 'react';
import {cat_01} from './img/cat_01.jpg';
import {Button, Header, Image, Modal} from 'semantic-ui-react';

const ModalBasic = () => (
    <Modal trigger = {<Button  color = 'pink' inverted> See Basic Modal</Button>}>
        <Modal.Header> This is the header section</Modal.Header>
        <Modal.Content image>
            <Image wrapped size = 'small' src = {cat_01} />
            <Modal.Description>
                <Header> Default Profile Image </Header>
                <p> This is some basic cat relted text you may add</p>
                <p> Is this kitty silly?  </p>
            
            </Modal.Description>
        </Modal.Content>

    </Modal>
)

export default ModalBasic;
