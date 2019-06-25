import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {GiftedChat} from "react-native-gifted-chat"
export default class Chat extends Component {
    state={
        messages:[]
    }
    render() {
        const {name1} = this.props
        return (
            <View>
                    <GiftedChat 
                    messages={this.state.messages}
                    onSend={this.onSend}
                    user={{
                        _id: 1
                    }}
                    />
            </View>
        )
    }
}
