const Reducer= (state,action)=>{
    switch (action.type){
        case 'GET_COUNTRY':
            // console.log('Get country action called')
            return {
                countryList: action.payload,
                error: null  

            }
        
        case 'SET_ERROR':
            // console.log('Error action called')
            return {
                countryList: [],
                error: action.payload
            }
           
        default:
            return state; 
        

    }

}
export default Reducer;