import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

class DietScreen extends Component {

    state = {
        diet: [
            {key: "alex"},
            {key: "alex2"},
            {key: "alex3"},
            {key: "alex4"},
            {key: "alex5"},
            {key: "alex6"},
        ],

        loading: false        
    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }


    newDiet = () => {
        // this.props.navigation.navigate('CoinDetail', { coin });
        this.props.navigation.navigate('Create new diet');

    }

    render() {

     const { diet } = this.state;

        return (
            <View style={styles.container}>
                <FlatList
                data={diet}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />

                <View style={styles.button}>
                    <Button
                        onPress={() => this.newDiet()}
                        title="New Diet"
                    />
                </View>
            
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

    

export default DietScreen;