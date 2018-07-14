import React, { Component } from 'react';
// import connect  from 'react-redux';
// import { getData,postData,clearAll } from '../actions';
// import PostData from '../components/PostData';
// import { read_cookie } from 'sfcookies';
// import avatar from '../img/img_avatar3.png'

import AssetData from '../components/AssestData';
import Dropdown  from '../components/Dropdown';
 
class App extends Component {

    
   
    render(){
       
        return(
            <div className='App'>
                <h1>Veolia Water AquaVista Portal Demo POC 14.07.2018</h1>

                    
                    <Dropdown />
               
            </div>
        );
    }
    
    
}

export default App;