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
        // Remove event listener to check if the user presses the back button whithout saving the changes
        this.props.navigation.removeListener("beforeRemove", (e) => {this.askBleaving(e);});
    }   

    // Method to create a new element to write info inside
    newElement = () => {
        this.state.elements.push(index++)
        this.setState({ elements: this.state.elements })
    }

    render() {
        // Function to create the new element and its components
        let new_element = this.state.elements.map((/*elements, index*/) => {
            return (
                <View style={styles.detailContainer}>
                    <TextInput
                        style={styles.detailTitle}
                        placeholder="Title here"
                    />

                    <TextInput 
                        multiline
                        numberOfLines={4}
                        style={styles.detailDetails}
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

                {/* Here goes the new element created by the button "New element" */}
                { new_element }
               
                {/* Button to create a new element to add text into */}
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

// Stylesheet
const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: "red",
        marginTop: 20,
        borderRadius: 3
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign:"center",
        margin: 20,
        color: "white"
    },
    detailContainer: {
        backgroundColor: "green",
        marginHorizontal: 30,
        marginTop: 15
    }, 
    detailTitle: {
        textAlign: "center",
        backgroundColor: "yellow",
        fontSize: 15
    }, 
    detailDetails: {
        padding: 4,
        fontSize: 12
    },
    button: {
        marginHorizontal: 50,
        marginVertical: 20
    }
});

    
export default NewDiet;