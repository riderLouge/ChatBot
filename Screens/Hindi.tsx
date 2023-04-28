import { ScrollView } from 'native-base';
import React from 'react';
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';


  const Hindi = ({route}) => {


    const lang = route.params.language;
    const name = route.params.Name;
    const Text1 = "नमस्ते "+ name +". हमारे मूल्यवान ग्राहक होने के लिए धन्यवाद";
    const Text2 = "मैं यहां आपकी समस्या में आपकी सहायता करने के लिए हूं और जरूरत पड़ने पर हमारी ग्राहक सेवा से जुड़ता हूं। कृपया नीचे दी गई सूची में से अपनी समस्या का चयन करें";
    const Text3 = "अपनी समस्या का चयन करें";
    const Text4 = "अन्य";
    const TransactionQuery = "लेन-देन क्वेरी";
    const AccountRelatedQuery = "खाता संबंधित प्रश्न";
    const CreateNewAccountCloseAccount = "नया खाता बनाएँ / खाता बंद करें";
    const ChangeAccountType = "खाता प्रकार बदलें";
    const ContactText = "संपर्क"
    const ARQ = "बैंक का सर्वर डाउन है और इसलिए हम आपके खाते का विवरण प्राप्त करने में सक्षम नहीं हैं। असंयम के लिए खेद है";
    const TQ1 = "राशि डेबिट की गई लेकिन खाते में दिखाई नहीं दी";
    const Tq2 = "हाल ही में खाते के लिए जुर्माना लगाया गया";
    const CNACA1 = "नया खाता बनाएँ";
    const CNACA2 = "खाता बंद करें";
    const CAT = "खाता प्रकार को बचत या चालू या वेतन में बदलने के लिए पीछे के बैंक में जाएँ और आवश्यक दस्तावेज जमा करें। दस्तावेज़ जमा करने के 10 कार्य दिवसों के भीतर खाता प्रकार बदलने की प्रक्रिया समाप्त हो जाएगी";
    const Contact = "कस्टमर केयर मेल पर संपर्क करने के लिए xyzBank@google.com अथवा फोन करें (9907657908)";
    const TQ1Ans = "राशि 3 से 7 व्यावसायिक दिनों के भीतर आपके खाते में वापस कर दी जाएगी";
    const TQ2Ans = "आपके न्यूनतम शेष राशि से कम राशि की ओर से वसूला गया जुर्माना";
    const CNACA1Ans = "नया खाता बनाने के लिए, आपको अपने आधार प्रमाण, पता प्रमाण, पैनकार्ड और पासपोर्ट आकार की फोटो की एक प्रति जमा करनी होगी। दस्तावेज़ जमा करने के बाद आपको अपनी पासबुक और एटीएम कार्ड अगले 10 व्यावसायिक दिनों में आपके दरवाजे पर मिल जाएगा";
    const CNACA2Ans = "खाता बंद करने के लिए नजदीकी शाखा में एक पत्र के साथ जाएं जिसमें लिखा हो कि आप अपना खाता बंद करना चाहते हैं और नीचे अपने हस्ताक्षर करें";


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

export default Hindi;