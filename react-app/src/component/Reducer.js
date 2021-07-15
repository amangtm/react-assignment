const Reducer= (state,action)=>{
    switch (action.type){
        case 'GET_COUNTRY':
            // console.log('Get country action called')
            return {
                ...state,
                countryList: action.payload,
            }
        
        case 'SET_ERROR':
            // console.log('Error action called')
            return {
                ...state,
                error: action.payload
            }
        case 'SET_THEME':
            return {
                ...state,
                theme: action.payload
            }  
        default:
            return state; 
        

    }

}
export default Reducer;