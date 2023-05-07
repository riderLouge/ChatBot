import { ScrollView } from 'native-base';
import React from 'react';
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';



  const Telugu = ({route}) => {

    const lang = route.params.language;
    const name = route.params.Name;
    const Text1 = "హలో "+name+". మా విలువైన కస్టమర్ అయినందుకు ధన్యవాదాలు";
        const Text2 = "మీ సమస్యతో మీకు సహాయం చేయడానికి మరియు అవసరమైతే మా కస్టమర్ సేవతో కనెక్ట్ అవ్వడానికి నేను ఇక్కడ ఉన్నాను. దయచేసి దిగువ ఇవ్వబడిన జాబితా నుండి మీ సమస్యను ఎంచుకోండి";
        const Text3 = "మీ సమస్యను ఎంచుకోండి";
        const Text4 = "ఇతరులు";
        const TransactionQuery = "లావాదేవీ ప్రశ్న";
        const AccountRelatedQuery = "ఖాతా సంబంధిత ప్రశ్న";
        const CreateNewAccountCloseAccount = "కొత్త ఖాతాను సృష్టించండి / ఖాతాను మూసివేయండి";
        const ChangeAccountType = "ఖాతా రకాన్ని మార్చండి";
        const ContactText = "సంప్రదించండి"
        const ARQ = "బ్యాంక్ సర్వర్ డౌన్‌లో ఉంది కాబట్టి మేము మీ ఖాతా వివరాలను పొందలేకపోతున్నాము. అసౌకర్యానికి క్షమించండి";
        const TQ1 = "మొత్తం డెబిట్ చేయబడింది కానీ ఖాతాలో ప్రతిబింబించలేదు";
        const Tq2 = "ఖాతాకు ఇటీవల జరిమానా విధించబడింది";
        const CNACA1 = "క్రొత్త ఖాతా తెరువుము";
        const CNACA2 = "ఖాతాను మూసివేయండి";
        const CAT = "ఖాతా రకాన్ని సేవింగ్స్ లేదా కరెంట్ లేదా శాలరీకి మార్చడానికి వెనుక ఉన్న బ్యాంకును సందర్శించి, అవసరమైన పత్రాన్ని సమర్పించండి. పత్రాన్ని సమర్పించిన తర్వాత 10 పని దినాలలో ఖాతా రకాన్ని మార్చే ప్రక్రియ ముగుస్తుంది";
        const Contact = "కస్టమర్ కేర్ మెయిల్‌ను xyzBank@google.comలో సంప్రదించడానికి లేదా కాల్ చేయండి (9907657908)";
        const TQ1Ans = "3 నుండి 7 పని రోజులలోపు మీ ఖాతాకు అమౌంట్ తిరిగి చెల్లించబడుతుంది";
        const TQ2Ans = "విధించిన జరిమానా మీ కనీస బ్యాలెన్స్ కంటే తక్కువ మొత్తంలో ఉంటుంది";
        const CNACA1Ans = "కొత్త ఖాతాను సృష్టించడానికి, మీరు మీ ఆధార్ ప్రూఫ్, అడ్రస్ ప్రూఫ్, పాన్‌కార్డ్ మరియు పాస్‌పోర్ట్ సైజ్ ఫోటో కాపీని సమర్పించాలి. పత్రాలను సమర్పించిన తర్వాత, మీరు మీ పాస్‌బుక్ మరియు atm కార్డ్‌తో పాటు వచ్చే 10 పని దినాలలో మీ ఇంటి వద్దకే అందుకుంటారు";
        const CNACA2Ans = "ఖాతాను మూసివేయడానికి, మీరు మీ ఖాతాను మూసివేయాలనుకుంటున్నారని మరియు దిగువన ఉన్న మీ సంతకాన్ని ఒక లేఖతో సమీప శాఖను సందర్శించండి ";

    


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

export default Telugu;