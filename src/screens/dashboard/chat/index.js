import React, { useState, useEffect, useCallback } from 'react'
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import { renderMessageText, renderBubble } from './MessageContainer';
import { renderInputToolbar, renderSend, renderCustomView } from './InputTool';

export default function Chat({ navigation }) {

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 5,
        text: 'Yes sure, thanks!',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Nikita',
          avatar: 'https://placeimg.com/140/140/any'

        },
      },
      {
        _id: 2,
        text: 'It would be hard for me to postpone it however let me check with other members.',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Nikita',
          avatar: 'https://placeimg.com/140/140/any'

        },
      },
      {
        _id: 4,
        text: 'Can we postpone the pitch?',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Nikita',
          avatar: 'https://placeimg.com/140/140/any'

        },
      },
      {
        _id: 4,
        text: 'Hello Nikita',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Nikita',
          avatar: 'https://placeimg.com/140/140/any'

        },
      },
    ])
  }, [])
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <GiftedChat
        alignTop={true}
        renderSend={renderSend}
        renderMessageText={renderMessageText}
        placeholder='Type your message'
        renderInputToolbar={renderInputToolbar}
        messages={messages}
        renderBubble={renderBubble}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        wrapInSafeArea={false}
        alwaysShowSend
      />
    </View>
  )
}
