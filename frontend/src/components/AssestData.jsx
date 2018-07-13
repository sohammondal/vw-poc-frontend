import React, { Component } from 'react';


class AssetData extends Component{
    constructor(props){
        super(props);
        this.state = {
            asset_data:null,
            isLoaded:false
        }
    }

    getAssetData(){        
        fetch('https://6no17qcva0.execute-api.us-west-2.amazonaws.com/DevStage?EQUIP_NO='+this.props.equip_no  )
        .then(resp => resp.json())
         .then(
             data => {                
                this.setState({ asset_data:data, isLoaded:true })
                
             }
         )
    }
   
                    

    componentDidMount(){
        this.getAssetData();
    }

    renderData(){
        const { asset_data,isLoaded } = this.state;
         
            
       // console.log("asset_data",this.state.asset_data);        
        if(isLoaded)
        {
         return ( 
            <div> 
             
            
                 { asset_data.message.map( asset => {
                        return( 
                           <div className="card" key={asset.EQUIP_NO}> 
                            <div className="card-header">Equipment NO: {asset.EQUIP_NO}</div>
                            <div className="card-body">
                              <p className=""><code>DSTRCT_CODE: {asset.DSTRCT_CODE}</code></p>
                              <p className=""><code>EQUIP_CLASS: {asset.EQUIP_CLASS}</code></p>
                              <p className=""><code>EQUIP_GRP_ID: {asset.EQUIP_GRP_ID}</code></p>
                              <p className=""><code>EQUIP_LOCATION: {asset.EQUIP_LOCATION}</code></p>
                              <p className=""><code>EQUIP_STATUS: {asset.EQUIP_STATUS}</code></p>
                              <p className=""><code>ITEM_NAME_1: {asset.ITEM_NAME_1}</code></p>
                              <p className=""><code>ITEM_NAME_2: {asset.ITEM_NAME_2}</code></p>
                              <p className=""><code>ITEM_NAME_CODE: {asset.ITEM_NAME_CODE}</code></p>
                              <p className=""><code>LOCATION: {asset.LOCATION}</code></p>
                              <p className=""><code>PARENT_EQUIP: {asset.PARENT_EQUIP}</code></p>
                              <p className=""><code>PLANT_NO: {asset.PLANT_NO}</code></p>
                            </div>
                            <div className='card-footer'>Equipment NO: {asset.EQUIP_NO}</div>
                           </div>     
                        )
                    }) 
                   
                }
                
            </div> )
        }
        else{
            <div> 
               <p>No Data Available </p>
            </div>
        }
    }
 
    render(){         
        //console.log( 'TestData-',this.state.asset_data);
       // console.log(this.state.asset_data.message.DSTRCT_CODE);
        
        return(
<<<<<<< HEAD
            <div>
                AssetDataCompUpdate
=======
            
            <div> 

               {
                   this.renderData()
               }
>>>>>>> origin/frontend2
            </div>
            
        )
    }
   
}


export default AssetData;