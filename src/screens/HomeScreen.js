
'use strict';

import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    Button,
} from 'react-native';

import COLOR_SCHEME from '../styles/ColorScheme';
import COLOR from '../styles/Color';
import styles from '../styles/Styles';

export default class HomeScreen extends React.Component {
    launchToMainClicked() {
        console.log('launch clicked...')

        this.props.navigation.navigate('Main', {
            parentName: 'Gunner',
            childName: 'Lucy',
            active: '4 hours ago',
            allowanceAmount: 50,
            currency: 'SEK',
            transferTime: '1 day',
            cardName: 'Gimi Card',
            balance: 1900,
            goal: 'Nitendo Switch',
            todo: 6,
            todoComplete: 3,
            isActive: true,
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.safearea}>
                <StatusBar barStyle={Platform.OS === 'ios' ? COLOR_SCHEME.DARK : COLOR_SCHEME.LIGHT} backgroundColor={COLOR.PRIMARY_DARK} />
                <View Style={styles.homeContainer}>
                    <View>
                        <View style={styles.launchform}>
                            <TouchableOpacity onPress={() => this.launchToMainClicked()} style={styles.launchbutton}>
                                <Text style={styles.launchbuttonText}>
                                    GIMI
                         </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
