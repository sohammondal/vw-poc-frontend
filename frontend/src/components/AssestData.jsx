import React, { Component } from 'react';


class AssetData extends Component{
    constructor(props){
        super(props);
        this.state = {
            asset_data:null,
            isLoaded:false,
            
        }
    }

    getAssetData(){        
        
        fetch('https://6no17qcva0.execute-api.us-west-2.amazonaws.com/DevStage?EQUIP_NO='+this.props.equip_no)
        .then(resp => resp.json())
         .then(
             data => {        
                // this.setState({show:false,isLoaded:false})        
                this.setState({ asset_data:data.message, isLoaded:true, equip_no:data.message.EQUIP_NO  })
                
             }
         )
    }
   
                    
componentDidMount(){
        this.getAssetData();
        // console.log('state',this.state.asset_data.EQUIP_NO);
        
    }

    renderAssetData(){
        const { asset_data,isLoaded } = this.state;
        return (isLoaded ? 
        <table className="table">
        <thead className="thead-dark table-name"><tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>ASSET DATA</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            
        </tr></thead>
        <thead className="thead-light">
        <tr>
            <th>EQUIP_NO</th>
            <th>DSTRCT_CODE</th>
            <th>EQUIP_CLASS</th>
            <th>EQUIP_GRP_ID</th>
            <th>EQUIP_LOCATION</th>
            <th>EQUIP_STATUS</th>
            <th>ITEM_NAME_1</th>
            <th>ITEM_NAME_2</th>
            <th>ITEM_NAME_CODE</th>
            <th>LOCATION</th>
            <th>PARENT_EQUIP</th>
            <th>PLANT_NO</th>

        </tr>
        </thead>
        <tbody>
           
            {
                asset_data.map(asset =>{
                    //console.log(asset);
                    
                    return(
                        <tr key={asset.EQUIP_NO}>
                        <td>{asset.EQUIP_NO}</td>
                        <td>{asset.DSTRCT_CODE}</td>
                        <td>{asset.EQUIP_CLASS}</td>
                        <td>{asset.EQUIP_GRP_ID}</td>
                        <td>{asset.EQUIP_LOCATION}</td>
                        <td>{asset.ITEM_NAME_1}</td>
                        <td>{asset.ITEM_NAME_2}</td>
                        <td>{asset.ITEM_NAME_CODE}</td>
                        <td>{asset.LOCATION}</td>
                        <td>{asset.PARENT_EQUIP}</td>
                        <td>{asset.PLANT_NO}</td>
                        </tr>
                    )
                    
                })
            }
           
        </tbody>
        </table> : null)
        

    }
 
    render(){         
        //console.log( 'TestData-',this.state.asset_data);
       // console.log(this.state.asset_data.message.DSTRCT_CODE);
        
        return(
            
            <div> 
               {
                  
                   this.renderAssetData()
                  
               }
            </div>
            
        )
    }
   
}


export default AssetData;