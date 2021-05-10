
'use strict';

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import { Card } from 'react-native-shadow-cards';

import COLOR from '../styles/Color';
import COLOR_SCHEME from '../styles/ColorScheme';
import styles from '../styles/Styles';

//Images
import CalendarImage from '../assets/calendar.png';
import RightArrowImage from '../assets/rightArrow.png';
import ProfileImage from '../assets/profile.jpeg';
import DebitCard from '../assets/debitCard.png';
import GoalsImage from '../assets/nitendoSwitch.png';
import TaskCompleteImage from '../assets/tick.png';

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    const params = this.props.navigation.state.params;
    this.childName = params ? params.childName : 'Default';
    this.active = params ? params.active : '';
    this.transferTime = params ? params.transferTime : '1 month';
    this.allowanceAmount = params ? params.allowanceAmount : 0;
    this.currency = params ? params.currency : 'USD';
    this.balance = params ? params.balance : 0;
    this.cardName = params ? params.cardName : 'Debit Card';
    this.goal = params ? params.goal : '';
    this.todo = params ? params.todo : 0;
    this.todoComplete = params ? params.todoComplete : 0;

  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Good Morning, ' + navigation.getParam('parentName') + '!',
      headerTintColor: COLOR.WHITE,
      headerStyle: {
        backgroundColor: COLOR.MAINSCREEN_BACKGROUND_COLOR
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'flex-start'
      },
      headerBackTitle: ' ',
      headerRight: (
        <Button
          onPress={() => alert('Info \n Welcome')}
          title="Info"
          color="#fff"
        />
      ),
    };
  };

  topUpButtonClicked() {
    alert('TopUp 100 SEK')
  }
  contributeButtonClicked() {
    alert('Congrats! \n You reached your goal')
  }
  addChoreButtonClicked() {
    alert('Completed for this week')
  }

  render() {
    return (
      <SafeAreaView style={styles.safearea}>
        <StatusBar barStyle={Platform.OS === 'ios' ? COLOR_SCHEME.DARK : COLOR_SCHEME.LIGHT} backgroundColor={COLOR.PRIMARY_DARK} />
        <View style={styles.mainScreenContainer}>
          <Text style={styles.todoTitleText}>
            <Image style={styles.todoImage} source={CalendarImage} />
           You're all set
        </Text>
          <View style={[styles.profileContainer, {}]}>
            <View style={[styles.profileBox, { flex: 5, marginLeft: 5, backgroundColor: 'transparent' }]}>
              <Text style={styles.textTitle}>
                {this.childName}
                <Image style={styles.rightArrowImage} source={RightArrowImage} />
                <Text style={styles.subTextTitle}>
                  {'\nMaster . ' + this.active}
                </Text>
              </Text>
            </View>
            <View style={[styles.profileBox, { flex: 1, marginRight: 0, backgroundColor: 'transparent' }]}>
              <Image style={styles.profileImage} source={ProfileImage} />
            </View>
          </View>
          <View style={{ marginLeft: 10, width: '70%', borderBottomColor: COLOR.MAINSCREEN_GREEN, borderBottomWidth: 10, borderRadius: 10 }} />
          <View style={[styles.allowanceContainer, {}]}>
            <Card style={styles.shadowSettings, { padding: 5, margin: 0, marginRight: 0, height: 80, width: '95%', borderRadius: 10, backgroundColor: COLOR.LIGHTGRAY, opacity: 1.0 }}>
              <View style={styles.allowanceContainerRow}>
                <Text style={styles.textTitle}>{' Allowance '}</Text>
                <Text style={styles.amountText}>{this.allowanceAmount + ' ' + this.currency}</Text>
              </View>
              <Text style={styles.subTextTitle}> {'to be transferred in ' + this.transferTime} </Text>
            </Card>
          </View>
          <View style={[styles.accountContainer, {}]}>
            <Card style={styles.shadowSettings, { padding: 5, margin: 0, marginRight: 0, height: 180, width: '95%', borderRadius: 10, backgroundColor: COLOR.LIGHTGRAY, opacity: 1.0 }}>
              <View style={styles.allowanceContainerRow}>
                <Text style={styles.textTitle}>{' Account '}</Text>
                <Text style={styles.amountText}>{this.balance + ' ' + this.currency}</Text>
              </View>
              <Text style={styles.subTextTitle}>{this.cardName}</Text>
              <TouchableOpacity onPress={() => this.topUpButtonClicked()} style={styles.topUpbutton}>
                <Text style={styles.topUpButtonText}>
                  TopUp
                </Text>
              </TouchableOpacity>
              <Card style={styles.shadowSettings, { marginTop: -30, margin: 0, marginLeft: -10, height: 60, width: '40%', borderRadius: 10, backgroundColor: 'transparent', opacity: 1.0 }}>
                <Image style={styles.accountCardImage} source={DebitCard} />
              </Card>
            </Card>
          </View>
          <View style={[styles.trackContainer, {}]}>
            <Card style={styles.shadowSettings, { padding: 10, margin: 5, marginLeft: 10, height: 180, width: '45%', borderRadius: 10, backgroundColor: COLOR.LIGHTGRAY, opacity: 1.0 }}>
              <View style={styles.goalsContainerColumn}>
                <Text style={styles.textTitle}>{' Goals '}</Text>
                <Text style={styles.subTextTitle}>{this.goal}</Text>
                <Image style={styles.goalsImage} source={GoalsImage} />
                <TouchableOpacity onPress={() => this.contributeButtonClicked()} style={styles.goalsbutton}>
                  <Text style={styles.goalsButtonText}>
                    Contibute
                </Text>
                </TouchableOpacity>
              </View>
            </Card>
            <Card style={styles.shadowSettings, { padding: 10, margin: 5, marginRight: 10, height: 180, width: '45%', borderRadius: 10, backgroundColor: COLOR.LIGHTGRAY, opacity: 1.0 }}>
              <View style={styles.choresContainerColumn}>
                <Text style={styles.textTitle}>{' Chores '}</Text>
                <Text style={styles.subTextTitle}>{' This Week '}</Text>
                <Image style={styles.choresImage} source={TaskCompleteImage} />
                <TouchableOpacity onPress={() => this.addChoreButtonClicked()} style={styles.choresbutton}>
                  <Text style={styles.choresButtonText}>
                    Add Chore
                </Text>
                </TouchableOpacity>
              </View>
            </Card>
          </View>

        </View>
      </SafeAreaView>
    );
  }

}
