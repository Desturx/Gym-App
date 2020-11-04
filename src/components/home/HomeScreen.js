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
            <Text>Esto es la página de home</Text>

        </View>
    );
    }
}

const styles = StyleSheet.create({

});

export default HomeScreen;