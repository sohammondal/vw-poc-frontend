import { GET_DATA,POST_DATA,CLEAR_ALL } from '../constants';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';


const getData = () => {
    
    return fetch('https://23qgfo667l.execute-api.us-west-2.amazonaws.com/DevStage')
        .then( resp => resp.json() )
        .then( 
            (data) => {
               console.log('data',data);
                //this.setState({isLoaded:true,items:data});
                //this.state = {isLoaded:true,items:data}
            },
            (error) => {
                console.log('error',error);
                //this.setState({isLoaded:true,error});
            }
         )
         
}

const data = (state=[],action) => {
    let data=null;
    //delete_cookie('data');
    state = read_cookie('data');
    switch(action.type){
        case GET_DATA:
        // data = getData(action).then( res => {return res});
        data = [...state, getData(action)];
        console.log('data in reducer',data);
        bake_cookie('data',data);
        return data;

        case POST_DATA:

        return data;

        case CLEAR_ALL:

        return data;

        default:

        return state;


    }

    //console.log('data as state',data);
}


export default data;