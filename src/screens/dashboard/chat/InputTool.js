import React from 'react';
import { InputToolbar, Send } from 'react-native-gifted-chat';
import Images from '../../../assets/images';
import { Image } from 'react-native';

export const renderInputToolbar = (props) => (
    <InputToolbar
        {...props}
        containerStyle={{
            backgroundColor: '#F5F5F5',
            borderColor: '#0A4975',
            borderRadius: 8,
            borderWidth: 0.5,
        }}
    />
);



export const renderSend = (props) => (
    <Send
        {...props}
        disabled={!props.text}
        containerStyle={{
            width: 22,
            height: 22,
            margin: 15,
        }}
    >
        <Image
            style={{ width: 22, height: 22 }}
            source={Images.chatSend}
        />
    </Send>
);












