import React from 'react';
import {Button, Modal} from 'semantic-ui-react';

const ModalExampleShortHand = () => (
    <Modal
        trigger = {<Button inverted color='blue'> ShortHand Modal</Button>}
        header = 'This is Header'
        content = 'This is the Content'
        actions = {['Something', {key: 'done', content: 'OK', positive: true }]}
    />
)

export default ModalExampleShortHand;