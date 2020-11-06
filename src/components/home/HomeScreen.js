import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class HomeScreen extends Component {

    state = {
    favorites: []
    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }

    render() {

    const { favorites } = this.state;

    return (
        <View>

        {/* { favorites.length == 0 ?
        <FavoritesEmptyState />
        : null
        } */}
            <Text>Home screen: Here i could get some of the updates like the day of the week and the excercise is related to today, as well as the diet</Text>

        </View>
    );
    }
}

const styles = StyleSheet.create({

});

export default HomeScreen;