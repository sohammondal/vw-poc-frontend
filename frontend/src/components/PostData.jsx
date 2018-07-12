import React, { Component } from 'react';

import GetData from './GetData';

class PostData extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : null,
            age  : null,
            showData: false
        }
        
        
    }

    postData(){
        console.log('data to post',this.state);
        
    }

    showData(){
        this.state.showData ? this.setState({showData:false}) : this.setState({showData:true})
        
    }

    render(){
        return(
            <div>
                
                <div className='form-inline'>
                    <div className='form-group'>
                        <input className='form-control' 
                               name='name'
                               placeholder='name'
                               onChange={event => {this.setState({name:event.target.value})}}/>
                        <input className='form-control' 
                               name='age'
                               placeholder='age'
                               onChange={event => {this.setState({age:event.target.value})}}/>
                    </div>
                    <button className='btn btn-success'
                            onClick={ () => this.postData() }
                            >Submit</button>  
                     <button className='btn btn-success'
                            name={ (this.state.showData) ? 'Clear' : 'Get All'  }
                            onClick={ () => this.showData() }
                            >{ (this.state.showData) ? <div>Clear</div> : <div>Get All</div>  }</button> 
                </div>

                <div>
                    { (this.state.showData) ? <GetData /> : null }
                </div>

            </div>
        )
    }
}

export default PostData;