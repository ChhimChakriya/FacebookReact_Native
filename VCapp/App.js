/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <ScrollView alwaysBounceVertical= 'true'>
    <View >
      
      {/* cover and profile */}
      <View style = {{ top: 50}}>
        <Image style = {{width: '100%', height: 250} } source = {{uri: 'https://images.pexels.com/photos/312105/pexels-photo-312105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}/>
        <Image style = {{width: 150, height: 150, borderRadius: 100, borderColor: 'white', borderWidth: 3, top: -75, alignSelf: 'center'} } source = {{uri: 'https://images.pexels.com/photos/312105/pexels-photo-312105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}/>
      </View>
      
       {/* user name */}
      <Text style = {{ fontSize: 20, alignSelf: 'center'}}> Chakriya Chhim</Text>

      <View>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}> 

            <View style = {{ backgroundColor: 'blue', borderRadius: 5, marginHorizontal: 5, marginTop: 10, flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
                <Image source = {require('./image/graduation-hat.png')} style = {{ width: 25, height: 25, marginRight: 3, marginTop: 7}} />
                <Button title ="Add Story" color = 'white' style = {{fontSize: 20}} > </Button>
            </View>

            <View style = {{ backgroundColor: 'ghostwhite', borderRadius: 5, marginHorizontal: 5, marginTop: 10, flexDirection: 'row',  alignItems: 'center'}}>
              <Image source = {require('./image/graduation-hat.png')} style = {{ width: 25, height: 25, marginHorizontal: 10, alignSelf: 'center'}} />
            </View>

            <View style = {{ backgroundColor: 'ghostwhite', borderRadius: 5, marginHorizontal: 5, marginTop: 10, flexDirection: 'row',  alignItems: 'center'}}>
              <Image source = {require('./image/graduation-hat.png')} style = {{ width: 25, height: 25, marginHorizontal: 10, alignSelf: 'center'}} />
            </View>
            
         </View>
      </View>

      {/* user info */}
      <View style = {{ top: 10, paddingHorizontal: 10}}>

           {/* job */}
          <View style = {{ flexDirection: 'row'}}>
              <Image source = {require('./image/graduation-hat.png')} style = {{ width: 25, height: 25, marginRight: 20}} />
              <Text style = {{marginTop: 2}}> iOS Developer</Text>
          </View>

          {/* university */}
          <View style = {{flexDirection: 'row'}}>
              <Image source = {require('./image/graduation-hat.png')} style = {{ width: 25, height: 25, marginRight: 20}} />
              <Text style = {{marginTop: 2}}> Royal University</Text>
          </View>

           {/* high school */}
          <View style = {{flexDirection: 'row'}}>
              <Image source = {require('./image/graduation-hat.png')} style = {{ width: 25, height: 25, marginRight: 20}} />
              <Text style = {{marginTop: 2}}> Bak Tok High School</Text>
          </View>

           {/* Live */}
          <View style = {{ flexDirection: 'row'}}>
              <Image source = {require('./image/graduation-hat.png')} style = {{ width: 25, height: 25, marginRight: 20}} />
              <Text style = {{marginTop: 2}}> Phnom Penh</Text>
          </View>

           {/* from */}
          <View style = {{ flexDirection: 'row'}}>
              <Image source = {require('./image/graduation-hat.png')} style = {{ width: 25, height: 25, marginRight: 20}} />
              <Text style = {{marginTop: 2}}> Svay Rieng</Text>
          </View>

          
         {/* status */}
          <View style = {{ flexDirection: 'row'}}>
              <Image source = {require('./image/graduation-hat.png')} style = {{ width: 25, height: 25, marginRight: 20}} />
              <Text style = {{marginTop: 2}}> Single</Text>
          </View>

          {/* more info */}
          <View style = {{ flexDirection: 'row'}}>
              <Image source = {require('./image/graduation-hat.png')} style = {{ width: 25, height: 25, marginRight: 20}} />
              <Text style = {{marginTop: 2}}> More about your info</Text>
          </View>

      </View>

      {/* photo featured  */}
      <View style = {{marginTop:20, marginHorizontal: 10}}>
          <View style = {{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Image source = {{uri: 'https://images.pexels.com/photos/312105/pexels-photo-312105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style = {{width: '30%', height: 100, borderTopLeftRadius: 20}} />
            <Image source = {{uri: 'https://images.pexels.com/photos/312105/pexels-photo-312105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style = {{width: '30%', height: 100}} />
            <Image source = {{uri: 'https://images.pexels.com/photos/312105/pexels-photo-312105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style = {{width: '30%', height: 100, borderTopRightRadius: 20}} />
          </View>

          <View style = {{flexDirection: 'row', justifyContent: 'space-around', marginTop:10}}>
            <Image source = {{uri: 'https://images.pexels.com/photos/312105/pexels-photo-312105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style = {{width: '30%', height: 100, borderBottomLeftRadius: 20}} />
            <Image source = {{uri: 'https://images.pexels.com/photos/312105/pexels-photo-312105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style = {{width: '30%', height: 100}} />
            <Image source = {{uri: 'https://images.pexels.com/photos/312105/pexels-photo-312105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style = {{width: '30%', height: 100, borderBottomRightRadius: 20}} />
          </View>
      
      </View>

      {/* button action */}
      <View style = {{marginTop: 10}}>
        <View style = {{ backgroundColor: 'ghostwhite', borderRadius: 5, marginHorizontal: 10}}>
            <Button title =" Add to feateared" color = 'gray' style = {{fontSize: 20}} ></Button>
        </View>

        <View style = {{ backgroundColor: 'ghostwhite', borderRadius: 5, marginHorizontal: 10, marginTop: 10}}>
            <Button title ="Edit your info" color = 'blue' style = {{fontSize: 20}} > </Button>
        </View>
      </View>
    </View>

    {/* friends */}
    <View>
        <View>
          <View style = {{ flexDirection: 'row', flex: 1}}>
            <Text>Friends</Text>
            <Button title ='Find Friends' style = {{ alignSelf: 'center'}}></Button>
          </View>
          <Text> 1034 fiends</Text>
        </View>

        <View style = {{width: '100%', flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style = {{width: '30%'}}>
                <Image source = {{uri: 'https://images.pexels.com/photos/312105/pexels-photo-312105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style = {{width: '100%', height: 100}} />
                <Text>Vattanac Sim</Text>
            </View>

            <View style = {{width: '30%'}}>
                <Image source = {{uri: 'https://images.pexels.com/photos/312105/pexels-photo-312105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style = {{width: '100%', height: 100}} />
                <Text>Vattanac Sim</Text>
            </View>

            <View style = {{width: '30%'}}>
                <Image source = {{uri: 'https://images.pexels.com/photos/312105/pexels-photo-312105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style = {{width: '100%', height: 100}} />
                <Text>Vattanac Sim</Text>
            </View>

        </View>
      
    </View>



     {/* footer space */}
     <View style = {{ height: 50}}></View>
    </ScrollView>
  );
};


export default App;
