import React from "react";
import FONTS from '../../../constants/fonts';
import { Bubble } from "react-native-gifted-chat";
import { MessageText } from "react-native-gifted-chat";
export const renderMessageText = (props) => (

    <MessageText
        {...props}
        customTextStyle={{
            fontSize: 18,
            lineHeight: 18,
            paddingTop: 13,
            fontWeight: '400',
            fontFamily: FONTS.REGULAR,
            fontStyle: 'normal',


        }}
    />

);

export const renderBubble = (props) => (
    <Bubble {...props}
        wrapperStyle={{
            left: {
                backgroundColor: '#F5F5F5',

            },
            right: {
                backgroundColor: '#F5F5F5'
            }
        }}
        timeTextStyle={{
            left: {
                color: '#000000',
            },
            right: {
                color: '#000000',

            },
        }}
        textStyle={{
            right: {
                color: '#000000',
            }

        }}



    />
);



