import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, Alert, Button } from 'react-native';


let index = 0;
class NewDiet extends Component {

    state = {
        loading: false,
        unsavedChanges: true,
        elements: []      
    }

    askBleaving = (e) => {
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
    }

    componentDidMount() {
        // Add event listener to check if the user presses the back button whithout saving the changes
        this.props.navigation.addListener("beforeRemove", (e) => {this.askBleaving(e);});
    }

    componentWillUnmount() {
        this.props.navigation.removeListener("beforeRemove", (e) => {this.askBleaving(e);});
    }   


    newElement = () => {
        this.state.elements.push(index++)
        this.setState({ elements: this.state.elements })
    }

    render() {

        let new_element = this.state.elements.map( (elements, index) => {
            return (
                <View style={styles.detailContainer}>
                    <TextInput
                        placeholder="Title here"
                    />

                    <TextInput 
                        multiline
                        numberOfLines={4}
                        placeholder="Details here"
                    />
                </View>
            )
        });

        return (
            
            <View>
                <View style={styles.titleContainer}>
                    <TextInput 
                        style={styles.title}
                        placeholder="Write the name of your diet here"
                        defaultValue={"Dietname"}
                    />
                </View>
                
                { new_element }

                <View style={styles.button}>
                    <Button
                        onPress={() => this.newElement()}
                        title="New Element"
                    />
                </View>
            </View>
        );
    }

    
}

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: "red",
        // marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 3
    },
    detailContainer: {
        backgroundColor: "green",
        marginHorizontal: 30,
        marginTop: 15
    },  
    title: {
        fontSize: 20,
        textAlign:"center",
        margin: 20,
        color: "white"
    },
    button: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 20,
        marginBottom: 20
    }
});

    

export default NewDiet;