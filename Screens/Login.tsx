import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, Dimensions, TextInput, Image} from "react-native";
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import { Button } from 'react-native-elements';


var {width,height} = Dimensions.get('window')


const Login = () => {

    const Navigation = useNavigation()
    const language = ["English","Malayalam","Tamil","Hindi","Telugu","Kannada"]
    const [selectedLanguage,setSelectedLanguage] = React.useState('');
    const [name,setName] = React.useState('');

    return(
        <View style={{flex:1, backgroundColor:'black'}}>
            <View style={{alignItems:'center'}}>
                <Text style={{fontStyle:'italic', fontSize:25, marginTop:50}}>FINAL PROJECT</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Name"
                    placeholderTextColor={'#666666'}
                    onChangeText={(newName) => setName(newName)}>
                </TextInput>
                <SelectDropdown
                    data={language}
                    defaultButtonText={'Select language'}
                    buttonStyle={styles.dropdownBtnStyle}
                    // buttonTextStyle={styles.dropdownBtnTxtStyle}
                    rowStyle={styles.dropdownRowStyle}
                    onSelect={(selectedItem, index) => {
                        setSelectedLanguage(selectedItem)
                        console.log(selectedItem)
                }}></SelectDropdown>  
            </View> 
            <Button 
                mode='contained' title='Login'
                type="solid"
                buttonStyle={{width:(width/3),
                                height:(width/9),
                                backgroundColor:'#1f1e1e',
                                borderRadius:4,
                                marginTop:25,
                                marginLeft:'55%'}}
                onPress={() => Navigation.push(selectedLanguage, {language: selectedLanguage, Name: name })}>
            </Button>
        </View>
       
    )

}

const styles = StyleSheet.create({
    textInput: {
        color: "black",
        width:(width-80),
        backgroundColor:'silver',
        borderRadius:10,
        marginTop:200,
        fontSize:20,
    },
    dropdownBtnStyle: {
        width:(width-80),
        backgroundColor:'silver',
        borderRadius:10,
        marginTop:20,
    },
    dropdownRowStyle: {
        backgroundColor:'silver'
    }

});

export default Login;