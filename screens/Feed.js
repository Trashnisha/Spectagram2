import React,{Component} from 'react'
import {Text,View,} from 'react-native';
import PostCard from "./PostCard";
import{FlatList} from "react-native-gesture-handler"

export default class Feed extends Component{
    renderItem=({item:post})=>{
        return <PostCard post={post}/>
    }
    render()
     {
         return (
             <View style={styles.container}>
                 <SafeAreaView style={styles.droidSafeArea} />
                  <View style={styles.appTitle}> 
                  <View style={styles.appIcon}>
                     <Image source={require("../assets/logo.png")} style={styles.iconImage} ></Image> 
                     </View> <View style={styles.appTitleTextContainer}> 
                     <Text style={styles.appTitleText}>Spectagram</Text>
                      </View> </View> <View style={styles.cardContainer}>
                         <FlatList keyExtractor={this.keyExtractor} data={posts} renderItem={this.renderItem} /> 
                         </View> </View> ); 
}

}
