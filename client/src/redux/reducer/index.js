import { GET_ALL_COUNTRY2, FILTER_BY_ACTIVITY, POST_ACTIVITY, GET_DETAILS, SET_PAGINA, GET_ALL_COUNTRY, FILTER_BY_CONTINENT, ORDER_NAME, ORDER_POPULATION, GET_NAMES, GET_ACTIVITY } from "../actions";

const initialState = {
    countries: [],
    copiaCountries: [],
    activities: [],
    currentPage: 1,
    countriesDetail: [],
    countriesAct: [],
    copiaCountriesAct:[],

};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRY:
            return {
                ...state,
                countries: action.payload,
                copiaCountries: action.payload,

            };
            
        case GET_ALL_COUNTRY2:
            return {
                ...state,
                countriesAct: action.payload,
                copiaCountriesAct:action.payload

            }


        case FILTER_BY_CONTINENT:
            const paises = state.copiaCountries;

            const filtroContinente = paises.filter(e => e.continent === action.payload);
            return {
                ...state,
                countries: filtroContinente,
            };






        case ORDER_NAME:
     

            let countrySort = action.payload === 'ascendente' ?
                state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                }) :
                state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (a.name < b.name) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                countries: countrySort,
            };

        case ORDER_POPULATION:
            let populationSort = action.payload === 'mayor' ?    //asc --->menor a mayor
                state.countries.sort(function (a, b) {         //desc --->mayor a menor
                    return b.population - a.population;
                }) :
                state.countries.sort(function (a, b) {
                    return a.population - b.population;
                })

            return {
                ...state,
                countries: populationSort,
            };

        case GET_NAMES:
            return {
                ...state,
                countries: action.payload
            };



        case SET_PAGINA:
            return {
                ...state,
                currentPage: action.payload,
            };

        case GET_DETAILS:
            return {
                ...state,
                countriesDetail: action.payload,
            };


        case FILTER_BY_ACTIVITY:
            const paises2 = state.copiaCountries;
            let stateActivity = []

            for (let country of paises2) {
                if (country.activities.length !== 0) {
                    for (let el of country.activities) {
                        if (el.name === action.payload) {
                            stateActivity = [...stateActivity, country]
                        }
                    }
                }
            }
            return {
                ...state,
                countries: stateActivity,
            };




        case POST_ACTIVITY:
            return {
                ...state
            };
        case GET_ACTIVITY:
            return {
                ...state,
                activities: action.payload,

            };




        default:
            return state;
    }

}

export default rootReducer;