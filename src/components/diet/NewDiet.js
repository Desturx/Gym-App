import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';

class NewDiet extends Component {

    state = {
        loading: false,
        unsavedChanges: true       
    }

    componentDidMount() {
        // If the changes to the 
        this.props.navigation.addListener("beforeRemove", (e) => {
            if(!this.state.unsavedChanges) {
                return;
            }

            // Prevent default behavior of leaving the screen
            e.preventDefault();

            // Prompt the user before leaving the screen
            Alert.alert(
                "Discard changes?",
                "You have unsaved changes. Are you sure to discard them an leave the screen?",
                [
                    {
                        text: "Discard changes",
                        style: 'destructive',
                        onPress: () => this.props.navigation.dispatch(e.data.action)
                    },
                    {
                        text: "Don't leave",
                        style: "cancel"
                    }
                ],
              );
        });
    }

    componentWillUnmount() {
    }



    render() {

        return (
            <View>
                <Text>New diet page</Text>
            
            </View>
        );
    }

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 22,
        backgroundColor: "red",
        margin: 30
    },
    item: {
        fontSize: 18,
        height: 44,
    },
    button: {
        marginHorizontal: 80,
    }
});

    

export default NewDiet;