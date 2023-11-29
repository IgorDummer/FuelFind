import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginForm(){
    return(
        <View>
            <TextInput
                placeholder='E-mail'
            />
        </View>

    )
}