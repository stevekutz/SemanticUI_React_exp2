import React from 'react';
import {Button, Modal} from 'semantic-ui-react';

const ModalExampleShortCut = () => {
    <Modal
        trigger = {<Button inverted color='blue' content='blue' > Try out Modal</Button>}
        header = 'This is Header'
        content = 'This is the Content'
        actions = {['Soemthing', {key: 'done', content: 'OK', positive: true }]}
    />
}

export default ModalExampleShortCut;