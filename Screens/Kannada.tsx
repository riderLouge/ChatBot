import { ScrollView } from 'native-base';
import React from 'react';
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';



  const Kannada = ({route}) => {

    const lang = route.params.language;
    const name = route.params.Name;
    const Text1 = "ನಮಸ್ಕಾರ "+name+". ನಮ್ಮ ಅಮೂಲ್ಯ ಗ್ರಾಹಕರಾಗಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು";
    const Text2 = "ನಿಮ್ಮ ಸಮಸ್ಯೆಯೊಂದಿಗೆ ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ಮತ್ತು ಅಗತ್ಯವಿದ್ದರೆ ನಮ್ಮ ಗ್ರಾಹಕ ಸೇವೆಯನ್ನು ಸಂಪರ್ಕಿಸಲು ನಾನು ಇಲ್ಲಿದ್ದೇನೆ. ದಯವಿಟ್ಟು ಕೆಳಗಿನ ಪಟ್ಟಿಯಿಂದ ನಿಮ್ಮ ಸಮಸ್ಯೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ";
    const Text3 = "ನಿಮ್ಮ ಸಮಸ್ಯೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ";
    const Text4 = "ಇತರರು";
    const TransactionQuery = "ವಹಿವಾಟಿನ ಪ್ರಶ್ನೆ";
    const AccountRelatedQuery = "ಖಾತೆಗೆ ಸಂಬಂಧಿಸಿದ ಪ್ರಶ್ನೆ";
    const CreateNewAccountCloseAccount = "ಹೊಸ ಖಾತೆಯನ್ನು ರಚಿಸಿ / ಖಾತೆಯನ್ನು ಮುಚ್ಚಿ";
    const ChangeAccountType = "ಖಾತೆ ಪ್ರಕಾರವನ್ನು ಬದಲಾಯಿಸಿ";
    const ContactText = "ಸಂಪರ್ಕಿಸಿ"
    const ARQ = "ಬ್ಯಾಂಕ್ ಸರ್ವರ್ ಡೌನ್ ಆಗಿರುವುದರಿಂದ ನಿಮ್ಮ ಖಾತೆ ವಿವರಗಳನ್ನು ಪಡೆಯಲು ನಮಗೆ ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ. ಅನಾನುಕೂಲತೆಗಾಗಿ ಕ್ಷಮಿಸಿ";
    const TQ1 = "ಮೊತ್ತವನ್ನು ಡೆಬಿಟ್ ಮಾಡಲಾಗಿದೆ ಆದರೆ ಖಾತೆಯಲ್ಲಿ ಪ್ರತಿಫಲಿಸುವುದಿಲ್ಲ";
    const Tq2 = "ಖಾತೆಗೆ ಇತ್ತೀಚಿನ ದಂಡವನ್ನು ವಿಧಿಸಲಾಗಿದೆ";
    const CNACA1 = "ಹೊಸ ಖಾತೆಯನ್ನು ರಚಿಸಿ";
    const CNACA2 = "ಖಾತೆಯನ್ನು ಮುಚ್ಚಿ";
    const CAT = "ಖಾತೆಯ ಪ್ರಕಾರವನ್ನು ಉಳಿತಾಯ ಅಥವಾ ಕರೆಂಟ್ ಅಥವಾ ಸಂಬಳಕ್ಕೆ ಬದಲಾಯಿಸಲು ಹಿಂದಿನ ಬ್ಯಾಂಕ್‌ಗೆ ಭೇಟಿ ನೀಡಿ ಮತ್ತು ಅಗತ್ಯವಿರುವ ಡಾಕ್ ಅನ್ನು ಸಲ್ಲಿಸಿ. ಡಾಕ್ ಸಲ್ಲಿಸಿದ ನಂತರ ಖಾತೆ ಪ್ರಕಾರವನ್ನು ಬದಲಾಯಿಸುವ ಪ್ರಕ್ರಿಯೆಯು 10 ಕೆಲಸದ ದಿನಗಳಲ್ಲಿ ಮುಗಿಯುತ್ತದೆ";
    const Contact = "xyzBank@google.com ನಲ್ಲಿ ಗ್ರಾಹಕ ಆರೈಕೆ ಮೇಲ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಲು ಅಥವಾ ಕರೆ ಮಾಡಿ (9907657908)";
    const TQ1Ans = "ಮೊತ್ತವನ್ನು 3 ರಿಂದ 7 ವ್ಯವಹಾರ ದಿನಗಳಲ್ಲಿ ನಿಮ್ಮ ಖಾತೆಗೆ ಹಿಂತಿರುಗಿಸಲಾಗುತ್ತದೆ";
    const TQ2Ans = "ವಿಧಿಸಲಾದ ದಂಡವು ನಿಮ್ಮ ಕನಿಷ್ಠ ಬ್ಯಾಲೆನ್ಸ್‌ಗಿಂತ ಕಡಿಮೆ ಮೊತ್ತದ ಮೇಲೆ ಇರುತ್ತದೆ";
    const CNACA1Ans = "ಹೊಸ ಖಾತೆಯನ್ನು ರಚಿಸಲು, ನಿಮ್ಮ ಆಧಾರ್ ಪುರಾವೆ, ವಿಳಾಸ ಪುರಾವೆ, ಪ್ಯಾನ್‌ಕಾರ್ಡ್ ಮತ್ತು ಪಾಸ್‌ಪೋರ್ಟ್ ಗಾತ್ರದ ಫೋಟೋದ ಪ್ರತಿಯನ್ನು ನೀವು ಸಲ್ಲಿಸಬೇಕು. ದಾಖಲೆಗಳನ್ನು ಸಲ್ಲಿಸಿದ ನಂತರ ನಿಮ್ಮ ಪಾಸ್‌ಬುಕ್ ಮತ್ತು ಎಟಿಎಂ ಕಾರ್ಡ್ ಅನ್ನು ಮುಂದಿನ 10 ವ್ಯವಹಾರ ದಿನಗಳಲ್ಲಿ ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ ಸ್ವೀಕರಿಸುತ್ತೀರಿ";
    const CNACA2Ans = "ಖಾತೆಯನ್ನು ಮುಚ್ಚಲು ನಿಮ್ಮ ಖಾತೆಯನ್ನು ಮುಚ್ಚಲು ನೀವು ಬಯಸುತ್ತೀರಿ ಮತ್ತು ಕೆಳಭಾಗದಲ್ಲಿ ನಿಮ್ಮ ಸಹಿಯನ್ನು ಹೊಂದಿರುವ ಪತ್ರದೊಂದಿಗೆ ಹತ್ತಿರದ ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ";

    


    const [selected,setSelected] = React.useState('');


    renderSection = () => {

        if(selected === 'ARQ'){
            return(
                <View style={{backgroundColor:'silver',
                              width:'80%',
                              marginLeft:10,
                              marginTop:20,
                              borderRadius:5}}>
                    <Text style={{fontSize:15,
                        color:'black',
                        margin:15,
                        fontWeight:'900'}}>{AccountRelatedQuery}</Text>
                    <Text style={{fontSize:15,
                                  color:'black',
                                  margin:15}}>{ARQ}</Text>
                </View>
            )
        }
        else if(selected === 'TQ'){
            return(
                <View style={{backgroundColor:'silver',
                              width:'80%',
                              marginLeft:10,
                              marginTop:20,
                              borderRadius:5,
                              marginBottom:100}}>
                    <Text style={{fontSize:15,
                        color:'black',
                        margin:15,
                        fontWeight:'900'}}>{TransactionQuery}</Text>
                    <Text style={{fontSize:15,
                        color:'black',
                        margin:15,
                        fontWeight:'900'}}>1. {TQ1}</Text>
                    <Text style={{fontSize:15,
                                  color:'black',
                                  margin:15}}>   {TQ1Ans}</Text>
                    <Text style={{fontSize:15,
                        color:'black',
                        margin:15,
                        fontWeight:'900'}}>2. {Tq2}</Text>
                    <Text style={{fontSize:15,
                                  color:'black',
                                  margin:15}}>   {TQ2Ans}</Text>
                </View>
            )

        }
        else if(selected === 'CNACA'){
            return(
                <View style={{backgroundColor:'silver',
                              width:'80%',
                              marginLeft:10,
                              marginTop:20,
                              borderRadius:5,
                              marginBottom:100}}>
                    <Text style={{fontSize:15,
                        color:'black',
                        margin:15,
                        fontWeight:'900'}}>{CreateNewAccountCloseAccount}</Text>
                    <Text style={{fontSize:15,
                        color:'black',
                        margin:15,
                        fontWeight:'900'}}>1. {CNACA1}</Text>
                    <Text style={{fontSize:15,
                                  color:'black',
                                  margin:15}}>   {CNACA1Ans}</Text>
                    <Text style={{fontSize:15,
                        color:'black',
                        margin:15,
                        fontWeight:'900'}}>2. {CNACA2}</Text>
                    <Text style={{fontSize:15,
                                  color:'black',
                                  margin:15}}>   {CNACA2Ans}</Text>
                </View>
            )
            
        }
        else if(selected === 'CAT'){
            return(
                <View style={{backgroundColor:'silver',
                              width:'80%',
                              marginLeft:10,
                              marginTop:20,
                              borderRadius:5}}>
                    <Text style={{fontSize:15,
                        color:'black',
                        margin:15,
                        fontWeight:'900'}}>{ChangeAccountType}</Text>
                    <Text style={{fontSize:15,
                                  color:'black',
                                  margin:15}}>{CAT}</Text>
                </View>
            )
        }
        else if(selected === 'O'){
            return(
                <View style={{backgroundColor:'silver',
                              width:'80%',
                              marginLeft:10,
                              marginTop:20,
                              borderRadius:5}}>
                    <Text style={{fontSize:15,
                        color:'black',
                        margin:15,
                        fontWeight:'900'}}>{ContactText}</Text>
                    <Text style={{fontSize:15,
                                  color:'black',
                                  margin:15}}>{Contact}</Text>
                </View>
            )
        }


    }



    return(
        
        <View style={{flex:1, backgroundColor:'black'}}>
            <ScrollView>
                <View style={{flexDirection:'row'}}>
                    <Icon name='robot-excited' style={{marginTop:50}} size={30}></Icon>
                    <View style={{backgroundColor:'silver',
                                width:'70%',
                                marginLeft:10,
                                marginTop:50,
                                borderRadius:5}}>
                        <Text style={{fontSize:15,
                                    color:'black',
                                    margin:15}}>{Text1}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Icon name='robot-excited' style={{marginTop:20}} size={30}></Icon>
                    <View style={{backgroundColor:'silver',
                                width:'80%',
                                marginLeft:10,
                                marginTop:20,
                                borderRadius:5}}>
                        <Text style={{fontSize:15,
                                    color:'black',
                                    margin:15}}>{Text2}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Icon name='robot-excited' style={{marginTop:20}} size={30}></Icon>
                    <View style={{backgroundColor:'silver',
                                width:'80%',
                                marginLeft:10,
                                marginTop:20,
                                borderRadius:5}}>
                        <Text style={{fontSize:15,
                                    color:'black',
                                    margin:15}}>{Text3}</Text>
                        <View style={{backgroundColor:'#1f1e1e',
                                    width:'90%',
                                    marginLeft:10,
                                    borderRadius:5}}>
                            <Text style={{fontSize:15,
                                    color:'white',
                                    margin:15}}
                                onPress={()=> setSelected('ARQ')}>{AccountRelatedQuery}</Text>
                        </View>
                        <View style={{backgroundColor:'#1f1e1e',
                                    width:'90%',
                                    marginLeft:10,
                                    borderRadius:5,
                                    marginTop:10}}>
                            <Text style={{fontSize:15,
                                    color:'white',
                                    margin:15}}
                                onPress={()=> setSelected('TQ')}>{TransactionQuery}</Text>
                        </View>
                        <View style={{backgroundColor:'#1f1e1e',
                                    width:'90%',
                                    marginLeft:10,
                                    borderRadius:5,
                                    marginTop:10}}>
                            <Text style={{fontSize:15,
                                    color:'white',
                                    margin:15}}
                                onPress={()=> setSelected('CNACA')}>{CreateNewAccountCloseAccount}</Text>
                        </View>
                        <View style={{backgroundColor:'#1f1e1e',
                                    width:'90%',
                                    marginLeft:10,
                                    borderRadius:5,
                                    marginTop:10}}>
                            <Text style={{fontSize:15,
                                    color:'white',
                                    margin:15}}
                                onPress={()=> setSelected('CAT')}>{ChangeAccountType}</Text>
                        </View>
                        <View style={{backgroundColor:'#1f1e1e',
                                    width:'90%',
                                    marginLeft:10,
                                    borderRadius:5,
                                    marginTop:10,
                                    marginBottom:20}}>
                            <Text style={{fontSize:15,
                                    color:'white',
                                    margin:15}}
                                onPress={()=> setSelected('O')}>{Text4}</Text>
                        </View>
                    </View>
                </View>
                <View >
                        {this.renderSection()}
                </View>
            </ScrollView>
        </View>
    )

}

export default Kannada;