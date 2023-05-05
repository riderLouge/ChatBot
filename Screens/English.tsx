import { ScrollView } from 'native-base';
import React from 'react';
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';



  const English = ({route}) => {

    const lang = route.params.language;
    const name = route.params.Name;
        const Text1 = "Hello "+name+". Thank you for being our valuable customer";
        const Text2 = "I am here to assist you with your problem and connect with our customer service if needed. Please select your problem from the below given list";
        const Text3 = "Select your problem";
        const Text4 = "Others";
        const TransactionQuery = "Transaction Query";
        const AccountRelatedQuery = "Account Related Query";
        const CreateNewAccountCloseAccount = "Create New Account / Close Account";
        const ChangeAccountType = "Change Account Type";
        const ContactText = "Contact"
        const ARQ = "Bank server is down and so we are not able to get your accound details. Sorry for the inconvinience";
        const TQ1 = "Amount debited but not reflected in account";
        const Tq2 = "Recent fine charged for account";
        const CNACA1 = "Create new account";
        const CNACA2 = "Close account";
        const CAT = "In order to change account type to Savings or Current or Salary visit the rearby bank and submit the required doc. The process of changing account type will be over within 10 working days after doc submission";
        const Contact = "In order to contact out customer care mail at xyzBank@google.com or call (9907657908)";
        const TQ1Ans = "The ammount will be refunded back to your account within 3 to 7 business days";
        const TQ2Ans = "The fine charged is onbehalf of the amount less then your minimum balance";
        const CNACA1Ans = "To create a new account, you need to submit a copy of your aadhar proof, address proof, pancard and passport size photo. After the submission of the documents you will receive your passbook and atm card with in the next 10 business days at your doorstep ";
        const CNACA2Ans = "In order to close an account visit the nearest branch with a letter stating that you want to close your account and your signature at the bottom";
    

    


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

export default English;