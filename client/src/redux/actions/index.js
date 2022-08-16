import axios from 'axios';

export const GET_ALL_COUNTRY = 'GET_ALL_COUNTRY';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const ORDER_NAME = 'ORDER_NAME';
export const ORDER_POPULATION = 'ORDER_POPULATION';
export const GET_NAMES = 'GET_NAMES';
export const GET_ACTIVITY = 'GET_ACTIVITY';
export const SET_PAGINA = 'SET_PAGINA';
export const GET_DETAILS = 'GET_DETAILS';
export const POST_ACTIVITY='POST_ACTIVITY';
export const FILTER_BY_ACTIVITY='FILTER_BY_ACTIVITY';
export const GET_ALL_COUNTRY2='GET_ALL_COUNTRY2';

export function getCountries() {
    return async function (dispatch) {
        var json = await axios('http://localhost:3001/countries');

        return dispatch({
            type: GET_ALL_COUNTRY,
            payload: json.data
        });
    };
}

export function getCountries2(){
    return async function(dispatch){
        try{
            var json2=await axios.get('http://localhost:3001/actividades');
            return dispatch({
                type:GET_ALL_COUNTRY2,
                payload:json2.data,
            })

        }catch(error){
            console.log(error);
        }
    }
}





export function filterCountriesByContinent(payload) {
    return {
        type: FILTER_BY_CONTINENT,
        payload
    };
}


export function orderByCountryName(payload) {
    return {
        type: ORDER_NAME,
        payload

    };
}

export function orderByPopulation(payload) {
    return {
        type: ORDER_POPULATION,
        payload
    };

}


export function getNames(payload) {
    return async function (dispatch) {
        var traerBack = await axios.get(`http://localhost:3001/countries?queryName=${payload}`);
        return dispatch({
            type: GET_NAMES,
            payload: traerBack.data,

        })

    }

}

export function setPagina(payload) {
    return {
        type: SET_PAGINA,
        payload
    };

}


export function getDetail(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/countries/'+id);
            return dispatch({
                type: GET_DETAILS,
                payload: json.data,
            })
        } catch (error) {
            console.log(error);
        }
    };
}


export function filtroActividad(payload){
    return{
        type:FILTER_BY_ACTIVITY,
        payload,
    };
}


export function getActivity() {
    return async function(dispatch){
        var traerBack= await axios.get(`http://localhost:3001/activities`,{});
        return dispatch({
            type:GET_ACTIVITY,
            payload:traerBack.data,

        });
    }
}
export function postActivity(payload){
    return async function(dispatch){
        var ponerBack=await axios.post(`http://localhost:3001/activities`,payload);
        return dispatch({
            type:POST_ACTIVITY,
            payload:ponerBack,
        });
    }
}


