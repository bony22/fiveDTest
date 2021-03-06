import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Image, Modal, Form, ScrollView, TouchableOpacity, ActivityIndicator, ToastAndroid, Pressable } from 'react-native';
// import { Card, Left, CardItem, Item, Input, Icon, Label, Button, Right, Tab, Tabs } from 'native-base';
// import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
//import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import FavIcon from 'react-native-vector-icons/Entypo'
import FavBorder from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux';
import { addToCart } from '../Redux/Action'



const { height, width } = Dimensions.get('window');

class AddedFav extends Component {
    constructor(props) {
        super(props);
        this.state = {

            indicatorLoading: true,
            result11: [],
            Currentlocation: '',

            dataSource: [],
            name: '',
            nickname: '',
            imgg: ''



            // ListArray: [
            //     { img: '../app/assets/profile.jpg', text: 'ADD TO CART', text1: 'Pestutant Gum Care Toothpaste 140 gm', text2: 'Rs. 49' },
            //     { img: '../app/assets/profile.jpg', text: 'ADD TO CART', text1: 'Pestutant Gum Care Toothpaste 140 gm', text2: 'Rs. 49' },
            //     { img: '../app/assets/profile.jpg', text: 'ADD TO CART', text1: 'Pestutant Gum Care Toothpaste 140 gm', text2: 'Rs. 49' },
            //     { img: '../app/assets/profile.jpg', text: 'ADD TO CART', text1: 'Pestutant Gum Care Toothpaste 140 gm', text2: 'Rs. 49' },
            //     { img: '../app/assets/profile.jpg', text: 'ADD TO CART', text1: 'Pestutant Gum Care Toothpaste 140 gm', text2: 'Rs. 49' },
            //     { img: '../app/assets/profile.jpg', text: 'ADD TO CART', text1: 'Pestutant Gum Care Toothpaste 140 gm', text2: 'Rs. 49' },
            //     { img: '../app/assets/profile.jpg', text: 'ADD TO CART', text1: 'Pestutant Gum Care Toothpaste 140 gm', text2: 'Rs. 49' },
            //     { img: '../app/assets/profile.jpg', text: 'ADD TO CART', text1: 'Pestutant Gum Care Toothpaste 140 gm', text2: 'Rs. 49' },

            // ]


        };
    }




    list1 = () => {
        return this.props.cartItems.map((item, index) => {
            // console.log('image', item)
            return (
                <View key={index} style={{ justifyContent: 'flex-start', padding: 5, backgroundColor: '#000', }}>
                    <View style={styles.boxView1}>

                        <Image source={{ uri: item.img }}
                            style={{
                                height: 200, width: 180,
                                marginVertical: 5, borderRadius: 5, alignSelf: 'center', overflow: 'hidden', resizeMode: 'contain'
                            }} />
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text

                            numberOfLines={1} style={{ fontSize: 13, fontWeight: 'bold', color: '#fff', }}>{item.name}</Text>

                        <Pressable style={{}}
                        // onPress={() => this.onRemovePressItem(item)}
                        >
                            <FavBorder name='favorite-border' type='MaterialIcons' style={{ fontSize: 20, color: 'red', }} />
                        </Pressable>


                    </View>

                    <Text
                        style={{ fontSize: 11, color: '#AEAEAE' }}>{item.nickname}</Text>



                </View>
            )
        })
    }




    render() {


        return (
            <View style={styles.mainview}>




                <View style={{ width: '100%', height: '15%', justifyContent: 'center', flexDirection: "row",  }}>
                    <View style={{ width: '45%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, marginLeft: 10, color: '#fff', fontFamily:'Roboto-Bold' }}>Favourites</Text>
                    </View>

                    {/* <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}> */}



                        <TouchableOpacity style={{ width: '50%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}
                            onPress={() => this.props.navigation.navigate('AllListCharacter')}
                        >
                            <FavIcon name='cross' type='Entypo' style={{

                                fontSize: 30,
                                color: '#fff',
                                //    marginLeft: 15

                            }} />
                        </TouchableOpacity>
                    {/* </View> */}
                </View>

                <ScrollView>



                    <View style={{ justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'row', }}>

                        {this.list1()}
                    </View>


                </ScrollView>
                {/* <View style={{ height: '50%' }}></View> */}
            </View>


        );
    }
}




const mapStateToProps = (state) => {

    return {

        cartItems: state.AddInformation.cartItems


    }
}

export default connect(mapStateToProps)(AddedFav);




const styles = StyleSheet.create({

    mainview: {
        flex: 1,
        backgroundColor: '#000',


    },
    Upper: {
        backgroundColor: '#FFFBFA',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    middle: {
        backgroundColor: 'pink',
        width: '100%',
        // justifyContent:'center',
        // alignItems:'center'

    },
    heading: {
        flexDirection: 'row'
    },
    boxView: {
        width: 170,
        backgroundColor: '#FFFBFA',
        height: 100,
        alignItems: 'center',
        borderRadius: 10, elevation: 5,
        marginVertical: 10,
        justifyContent: 'center',
        // paddingLeft:5,
        // paddingRight:5
        // padding:10

    },

    boxView1: {
        width: '100%',
        // backgroundColor: '#FFFBFA',
        height: 200,
        alignItems: 'center',
        borderRadius: 5,
        elevation: 5,
        // marginVertical:10,
        justifyContent: 'center',
        marginBottom: '4%'

    },
    Inner: {
        width: '20%',
        backgroundColor: '#804D8A',
        flexDirection: 'row',
        height: 100,
        marginVertical: 20,
        borderRadius: 10
    },

})
