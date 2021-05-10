'use strict';

import { StyleSheet } from 'react-native';
import COLOR from './Color';

export default StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: COLOR.WHITE,
    },
    //Shadow
    shadowSettings: {
        shadowColor: COLOR.BLACK,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    //TitleText
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Helvetica Neue',
        color: COLOR.WHITE,
        opacity: 1.0
    },
    subTextTitle: {
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: 'Helvetica Neue',
        color: COLOR.WHITE,
        opacity: 0.5
    },
    // HomeScreens
    launchbutton: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: COLOR.WHITE,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLOR.PRIMARY_LiGHT,
    },
    launchbuttonText: {
        color: COLOR.PRIMARY_LiGHT,
        textAlign: 'center',
    },
    homeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    launchform: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    // Main screens
    // Todo
    mainScreenContainer: {
        flex: 1,
        backgroundColor: COLOR.MAINSCREEN_BACKGROUND_COLOR,
        paddingTop: 10,
        paddingLeft: 0,
    },
    todoImage: {
        alignSelf: 'flex-start',
        padding: 5,
        width: 20,
        height: 20,
        tintColor: COLOR.WHITE,
        opacity: 0.5
    },
    todoTitleText: {
        paddingLeft: 10,
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Cochin",
        color: COLOR.WHITE,
        opacity: 0.5
    },
    // Profile
    profileContainer: {
        flex: 2,
        paddingTop: 30,
        marginLeft: 0,
        paddingLeft: 5,
        flexDirection: "row",
    },
    profileBox: {
        width: 50,
        height: 50,
    },
    rightArrowImage: {
        paddingLeft: 30,
        width: 15,
        height: 15,
        tintColor: COLOR.WHITE,
        opacity: 0.5
    },
    profileImage: {
        borderWidth: 2,
        borderColor: COLOR.WHITE,
        height: 40,
        width: 40,
        borderRadius: 20,
        overflow: 'hidden',
    },

    //Allowance
    allowanceContainer: {
        flex: 2,
        paddingTop: 0,
        marginLeft: 0,
        flexDirection: "row",
        justifyContent: 'center',
    },
    allowanceBox: {
        width: 100,
        height: 100,
        paddingLeft: 10,
    },

    //Allowance Text
    allowanceTextContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 10,
        padding: 8,
    },
    allowanceContainerRow: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    amountText: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Helvetica Neue',
        color: COLOR.WHITE,
        opacity: 1.0,
        paddingLeft: '40%'
    },
    accountCardImage: {
        width: '120%',
        height: '120%',
        aspectRatio: 2,

    },

    //Account
    accountContainer: {
        flex: 5,
        paddingTop: 0,
        marginLeft: 0,
        flexDirection: "row",
        justifyContent: 'center',
    },
    accountBox: {
        width: 100,
        height: 100,
        paddingLeft: 10,
        backgroundColor: 'transparent',
    },
    topUpbutton: {
        marginLeft: '67%',
        marginTop: 20,
        width: 100,
        height: 40,
        backgroundColor: COLOR.PRIMARY_DARK,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLOR.PRIMARY_DARK,
        justifyContent: 'center',
    },
    topUpButtonText: {
        color: COLOR.WHITE,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    //Track
    trackContainer: {
        flex: 5,
        paddingTop: 0,
        marginLeft: 0,
        flexDirection: "row",
        justifyContent: 'center',
    },

    // Goals
    goalsContainerColumn: {
        flexDirection: 'column',
        backgroundColor: 'transparent',
    },
    goalsbutton: {
        marginLeft: '20%',
        marginTop: '10%',
        width: 100,
        height: 40,
        backgroundColor: COLOR.PRIMARY_DARK,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLOR.PRIMARY_DARK,
        justifyContent: 'center',
    },
    goalsImage: {
        borderWidth: 3,
        borderColor: COLOR.MAINSCREEN_GREEN,
        height: 40,
        width: 40,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        marginLeft: '40%',
        marginTop: '10%',
    },
    goalsButtonText: {
        color: COLOR.WHITE,
        fontWeight: 'bold',
        textAlign: 'center',
    },


    //Chores
    choresContainerColumn: {
        flexDirection: 'column',
        backgroundColor: 'transparent',
    },
    choresbutton: {
        marginLeft: '20%',
        marginTop: '10%',
        width: 100,
        height: 40,
        backgroundColor: COLOR.PRIMARY_DARK,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLOR.PRIMARY_DARK,
        justifyContent: 'center',
    },
    choresImage: {
        borderWidth: 3,
        borderColor: COLOR.MAINSCREEN_GREEN,
        height: 40,
        width: 40,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        marginLeft: '40%',
        marginTop: '10%',
    },
    choresButtonText: {
        color: COLOR.WHITE,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});
