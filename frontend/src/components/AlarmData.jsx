import React, { Component } from 'react';

class AlarmData extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded:false,
            alarm_data: null
        }
    }

    getAlarmData(){
        fetch('https://0lhdq4ay5h.execute-api.us-west-2.amazonaws.com/DevStage?EQUIP_NO='+this.props.equip_no)
        .then(resp => resp.json())
        .then( data => {
            console.log('alarm_data',data);
            data.message.length > 0 ? this.setState({alarm_data:data.message,isLoaded:true}) : this.setState({alarm_data:null,isLoaded:false})
        })
    }  

    componentDidMount(){
        this.getAlarmData()
    }

    renderAlarmData(){
        const { alarm_data,isLoaded } = this.state;
        return (isLoaded ?
        <div className="table-responsive">
        <table className="table">
        <thead className="thead-dark table-name"><tr>
            <th></th>
            <th></th>
            <th>ALARM DATA</th>
            <th></th>
            <th></th>
        </tr></thead>
        <thead className="thead-light">
        <tr>
            <th>SENSOR_ID</th>
            <th>SENSOR_TYPE</th>
            <th>SENSOR_ALARM</th>
            <th>CREATED_DATE</th>
            <th>CREATED_TIME</th>
        </tr>
        </thead>
        <tbody>
           
            {
                alarm_data.map((alarm,index) =>{
                    //console.log(alarm);
                    
                    return(
                        <tr key={alarm.alarm_ID+'-'+index}>
                        <td>{alarm.SENSOR_ID}</td>
                        <td>{alarm.SENSOR_TYPE}</td>
                        <td>{alarm.SENSOR_Alarm}</td>
                        <td>{alarm.CREATED_DATE}</td>
                        <td>{alarm.CREATED_TIME}</td>
                        </tr>
                    )
                    
                })
            }
           
        </tbody>
        </table>
        </div> : 
        <div className='no-data-alarm'>*There is no  alarm data for this equipment</div>
    )
        

    }



    render(){
        //console.log('props',this.props);
        
        return(
            <div>
               {this.renderAlarmData()}
            </div>
        )
    }
}

export default AlarmData;