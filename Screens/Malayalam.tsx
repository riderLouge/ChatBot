import { ScrollView } from 'native-base';
import React from 'react';
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
  import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';



  const Malayalam = ({route}) => {


    const lang = route.params.language;
    const name = route.params.Name;
    const Text1 = "ഹലോ "+name+". ഞങ്ങളുടെ വിലയേറിയ ഉപഭോക്താവായതിന് നന്ദി";
    const Text2 = "നിങ്ങളുടെ പ്രശ്‌നത്തിൽ നിങ്ങളെ സഹായിക്കാനും ആവശ്യമെങ്കിൽ ഞങ്ങളുടെ ഉപഭോക്തൃ സേവനവുമായി ബന്ധപ്പെടാനും ഞാൻ ഇവിടെയുണ്ട്. ചുവടെ നൽകിയിരിക്കുന്ന പട്ടികയിൽ നിന്ന് നിങ്ങളുടെ പ്രശ്നം തിരഞ്ഞെടുക്കുക";
    const Text3 = "നിങ്ങളുടെ പ്രശ്നം തിരഞ്ഞെടുക്കുക";
    const Text4 = "മറ്റുള്ളവ";
    const TransactionQuery = "ഇടപാട് ചോദ്യം";
    const AccountRelatedQuery = "അക്കൗണ്ടുമായി ബന്ധപ്പെട്ട ചോദ്യം";
    const CreateNewAccountCloseAccount = "പുതിയ അക്കൗണ്ട് സൃഷ്ടിക്കുക / അക്കൗണ്ട് അടയ്ക്കുക";
    const ChangeAccountType = "അക്കൗണ്ട് തരം മാറ്റുക";
    const ContactText = "ബന്ധപ്പെടുക"
    const ARQ = "ബാങ്ക് സെർവർ പ്രവർത്തനരഹിതമായതിനാൽ നിങ്ങളുടെ അക്കൗണ്ട് വിശദാംശങ്ങൾ ഞങ്ങൾക്ക് ലഭിക്കില്ല. അസൗകര്യത്തിൽ ക്ഷമിക്കുക";
    const TQ1 = "തുക ഡെബിറ്റ് ചെയ്‌തെങ്കിലും അക്കൗണ്ടിൽ പ്രതിഫലിച്ചിട്ടില്ല";
    const Tq2 = "അക്കൗണ്ടിന് അടുത്തിടെ ഈടാക്കിയ പിഴ";
    const CNACA1 = "പുതിയ അക്കൗണ്ട് സൃഷ്ടിക്കുക";
    const CNACA2 = "അക്കൗണ്ട് അടയ്ക്കുക";
    const CAT = "അക്കൗണ്ട് തരം സേവിംഗ്സ് അല്ലെങ്കിൽ കറന്റ് അല്ലെങ്കിൽ ശമ്പളം എന്നതിലേക്ക് മാറ്റുന്നതിന്, പിൻവശത്തെ ബാങ്ക് സന്ദർശിച്ച് ആവശ്യമായ രേഖ സമർപ്പിക്കുക. പ്രമാണം സമർപ്പിച്ച് 10 പ്രവൃത്തി ദിവസത്തിനുള്ളിൽ അക്കൗണ്ട് തരം മാറ്റുന്ന പ്രക്രിയ അവസാനിക്കും";
    const Contact = "കസ്റ്റമർ കെയർ മെയിലിൽ ബന്ധപ്പെടുന്നതിന് xyzBank@google.com അല്ലെങ്കിൽ വിളിക്കുക (9907657908)";
    const TQ1Ans = "3 മുതൽ 7 പ്രവൃത്തി ദിവസങ്ങൾക്കുള്ളിൽ തുക നിങ്ങളുടെ അക്കൗണ്ടിലേക്ക് തിരികെ നൽകും";
    const TQ2Ans = "ഈടാക്കുന്ന പിഴ നിങ്ങളുടെ മിനിമം ബാലൻസിനേക്കാൾ കുറവുള്ള തുകയുടെ ഭാഗമാണ്";
    const CNACA1Ans = "ഒരു പുതിയ അക്കൗണ്ട് സൃഷ്ടിക്കാൻ, നിങ്ങളുടെ ആധാർ തെളിവ്, വിലാസ തെളിവ്, പാൻകാർഡ്, പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോ എന്നിവയുടെ പകർപ്പ് സമർപ്പിക്കേണ്ടതുണ്ട്. രേഖകൾ സമർപ്പിച്ചതിന് ശേഷം അടുത്ത 10 പ്രവൃത്തി ദിവസങ്ങൾക്കുള്ളിൽ നിങ്ങളുടെ പാസ്ബുക്കും എടിഎം കാർഡും നിങ്ങളുടെ വീട്ടുവാതിൽക്കൽ ലഭിക്കും.";
    const CNACA2Ans = "ഒരു അക്കൗണ്ട് ക്ലോസ് ചെയ്യുന്നതിനായി, നിങ്ങളുടെ അക്കൗണ്ടും താഴെയുള്ള ഒപ്പും ക്ലോസ് ചെയ്യണമെന്ന് പ്രസ്താവിക്കുന്ന ഒരു കത്ത് സഹിതം അടുത്തുള്ള ബ്രാഞ്ച് സന്ദർശിക്കുക.";


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

export default Malayalam;