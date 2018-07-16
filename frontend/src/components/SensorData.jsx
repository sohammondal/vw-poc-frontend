import React, { Component } from 'react';

class SensorData extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded:false,
            sensor_data: null
        }
    }

    getSensorData(){
        fetch('https://o5dcvii60i.execute-api.us-west-2.amazonaws.com/DEVSTAGE?EQUIP_NO='+this.props.equip_no)
        .then(resp => resp.json())
        .then( data => {
            console.log('sensor_data',data);
            data.message.length > 0 ? this.setState({sensor_data:data.message,isLoaded:true}) : this.setState({sensor_data:null,isLoaded:false})
        })
    }  

    componentDidMount(){
        this.getSensorData()
    }

    renderSensorData(){
        const { sensor_data,isLoaded } = this.state;
        return (isLoaded ? 
        <div className="table-responsive">
        <table className="table">
        <thead className="thead-dark table-name"><tr>
            <th></th>
            <th></th>
            <th>SENSOR DATA</th>
            <th></th>
            <th></th>
        </tr></thead>
        <thead className="thead-light">
        <tr>
            <th>SENSOR_ID</th>
            <th>SENSOR_TYPE</th>
            <th>SENSOR_VALUE</th>
            <th>CREATED_DATE</th>
            <th>CREATED_TIME</th>
        </tr>
        </thead>
        <tbody>
           
            {
                sensor_data.map((sensor,index) =>{
                    //console.log(sensor);
                    
                    return(
                        <tr key={sensor.SENSOR_ID+'-'+index}>
                        <td>{sensor.SENSOR_ID}</td>
                        <td>{sensor.SENSOR_TYPE}</td>
                        <td>{sensor.SENSOR_VALUE}</td>
                        <td>{sensor.CREATED_DATE}</td>
                        <td>{sensor.CREATED_TIME}</td>
                        </tr>
                    )
                    
                })
            }
           
        </tbody>
        </table>
        </div> : 
        <div className='no-data-sensor'>*There is no sensor data for this equipment</div>
    )
        

    }






    render(){
        //console.log('props',this.props);
        
        return(
            <div>
                {this.renderSensorData()}
            </div>
        )
    }
}

export default SensorData;