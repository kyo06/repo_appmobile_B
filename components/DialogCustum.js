import React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider, Button, Paragraph, Dialog, Portal } from 'react-native-paper';

const DialogCustum = ({ dialogTitle, dialogContent, buttonValue, btnStyle, dialogStyle }) => {

    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);

    return (
        <PaperProvider>
            <View>
                <Button style={btnStyle} onPress={showDialog}>{buttonValue}</Button>
                <Portal>
                    <Dialog style={dialogStyle} visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>{dialogTitle}</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>{dialogContent}</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => {console.log('Ok');hideDialog()}}>Confirmer</Button>
                            <Button onPress={hideDialog}>Annuler</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        </PaperProvider>
    )

}

export default DialogCustum;