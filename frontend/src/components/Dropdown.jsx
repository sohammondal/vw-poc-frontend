import React, { Component } from 'react';
import AssetData from './AssestData';


class Dropdown extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded:false,
            asset_data:null,
            isOptionSelected:false,
            equip_no:null

        }
    }

    getDropdown(){
     fetch('https://hc109ujxz1.execute-api.us-west-2.amazonaws.com/DEVSTAGE')
     .then(resp => resp.json())
     .then(
         data => {
             //console.log('data',data);
             this.setState({asset_data:data,isLoaded:true});
        })   
    }

    componentDidMount(){
        this.getDropdown();
    }
    
    renderAssetData(){
        return(

            this.state.equip_no!=null ? <AssetData equip_no={this.state.equip_no}/> : null
        )
    }

    populateDropdown(){
        const { asset_data } = this.state;
        //console.log(asset_data);
        return ( 
            <select className="form-control" id="sel1" onChange={ event => {
                //console.log(event.target.value)
                event.target.value==='' ? this.setState({isOptionSelected:false,equip_no:null}) : this.setState({isOptionSelected:true,equip_no:event.target.value})
            }
            }>
                <option></option>
                   { asset_data.map( (asset) => {
                        return(<option value={asset.EQUIP_NO} key={asset.EQUIP_NO} >{asset.EQUI_INFO}</option>)
                   } ) }
                       
            </select>
        
     )
    }

    render(){
        
        
        
        return(
            <div>
                <div className="form-group">
                    <label htmlFor="sel1">Select Asset Data:</label>
                    
                    { this.state.isLoaded ? this.populateDropdown() : <div>Loading...</div>}
                    { this.state.isOptionSelected ? this.renderAssetData() : null }
                </div>
                
            </div>
        )
    }
   
}


export default Dropdown;