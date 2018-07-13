import React, { Component } from 'react';


class AssetData extends Component{
    constructor(props){
        super(props);
        this.state = {
            asset_data:null,

        }
    }

    getAssetData(){
       
    }


    render(){
        console.log('this.props',this.props);
        return(
            <div>
                AssetDataCompUpdate
            </div>
        )
    }
   
}


export default AssetData;