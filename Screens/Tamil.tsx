import { ScrollView } from 'native-base';
import React from 'react';
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';


  const Tamil = ({route}) => {

    const lang = route.params.language;
    const name = route.params.Name;
    const Text1 = "வணக்கம் "+name+". எங்கள் மதிப்புமிக்க வாடிக்கையாளராக இருப்பதற்கு நன்றி";
    const Text2 = "உங்கள் பிரச்சனையில் உங்களுக்கு உதவவும், தேவைப்பட்டால் எங்கள் வாடிக்கையாளர் சேவையுடன் இணைக்கவும் நான் இங்கு இருக்கிறேன். கீழே கொடுக்கப்பட்டுள்ள பட்டியலில் இருந்து உங்கள் சிக்கலைத் தேர்ந்தெடுக்கவும்";
    const Text3 = "உங்கள் சிக்கலைத் தேர்ந்தெடுக்கவும்";
    const Text4 = "மற்றவைகள்";
    const TransactionQuery = "பரிவர்த்தனை வினவல்";
    const AccountRelatedQuery = "கணக்கு தொடர்பான வினவல்";
    const CreateNewAccountCloseAccount = "புதிய கணக்கை உருவாக்க / கணக்கை மூடு";
    const ChangeAccountType = "கணக்கு வகையை மாற்றவும்";
    const ContactText = "தொடர்பு விபரங்கள்"
    const ARQ = "வங்கி சேவையகம் செயலிழந்ததால் உங்கள் கணக்கு விவரங்களைப் பெற முடியவில்லை. சிரமத்திற்கு மன்னிக்கவும்";
    const TQ1 = "பற்று வைக்கப்பட்ட தொகை ஆனால் கணக்கில் பிரதிபலிக்கவில்லை";
    const Tq2 = "கணக்கிற்கு சமீபத்திய அபராதம் விதிக்கப்பட்டது";
    const CNACA1 = "புதிய கணக்கை உருவாக்க";
    const CNACA2 = "கணக்கை மூடு";
    const CAT = "கணக்கு வகையை சேமிப்பு அல்லது நடப்பு அல்லது சம்பளமாக மாற்ற, பின்புற வங்கிக்குச் சென்று தேவையான ஆவணத்தைச் சமர்ப்பிக்கவும். ஆவணத்தைச் சமர்ப்பித்த 10 வேலை நாட்களுக்குள் கணக்கு வகையை மாற்றும் செயல்முறை முடிந்துவிடும்";
    const Contact = "வாடிக்கையாளர் பராமரிப்பு அஞ்சல் மூலம் தொடர்பு கொள்ள xyzBank@google.com அல்லது மொபைல் எண் (9907657908)";
    const TQ1Ans = "3 முதல் 7 வணிக நாட்களுக்குள் தொகை உங்கள் கணக்கில் திருப்பித் தரப்படும்";
    const TQ2Ans = "விதிக்கப்படும் அபராதம் உங்கள் குறைந்தபட்ச இருப்புத் தொகையை விட குறைவாக இருக்கும்";
    const CNACA1Ans = "புதிய கணக்கை உருவாக்க, உங்கள் ஆதார் சான்று, முகவரி சான்று, பான்கார்டு மற்றும் பாஸ்போர்ட் அளவு புகைப்படம் ஆகியவற்றின் நகலைச் சமர்ப்பிக்க வேண்டும். ஆவணங்களைச் சமர்ப்பித்த பிறகு, அடுத்த 10 வணிக நாட்களில் உங்கள் வீட்டு வாசலில் உங்கள் பாஸ்புக் மற்றும் ஏடிஎம் கார்டைப் பெறுவீர்கள்.";
    const CNACA2Ans = "ஒரு கணக்கை மூடுவதற்கு, உங்கள் கணக்கை மூட விரும்புகிறீர்கள் என்ற கடிதத்துடன் அருகிலுள்ள கிளைக்குச் செல்லவும், கீழே உங்கள் கையொப்பமும் உள்ளது.";


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
                <View style={{backgroundColor:'silver',
                              width:'80%',
                              marginLeft:10,
                              marginTop:50,
                              borderRadius:5}}>
                    <Text style={{fontSize:15,
                                  color:'black',
                                  margin:15}}>{Text1}</Text>
                </View>
                <View style={{backgroundColor:'silver',
                              width:'80%',
                              marginLeft:10,
                              marginTop:20,
                              borderRadius:5}}>
                    <Text style={{fontSize:15,
                                  color:'black',
                                  margin:15}}>{Text2}</Text>
                </View>
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
                <View >
                        {this.renderSection()}
                </View>
            </ScrollView>
        </View>
    )

}

export default Tamil;