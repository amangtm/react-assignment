import React, { useContext, useEffect ,useState} from 'react'

import MoonIcon from '../assets/half-moon.png'
import { StateContext } from './Store'
import { darkTheme, lightTheme } from './Theme';
function DarkModeButton() {
    const [count,setCount]= useState(0)
    const [state,dispatch]= useContext(StateContext);
        // useEffect((state)=>{
        //     let themeVar={}
        //     // if(state.theme=={}) return ;
        //     if(state.theme.type=='light'){
        //         themeVar=darkTheme
        //     }
        //     else{
        //         themeVar=lightTheme
        //     }
        //     console.log('Use effect called')
        //     console.log(themeVar)
        //     dispatch({type:'SET_THEME', payload:themeVar})
        // },[count])

        console.log(state.theme)
        return <div className="toggleTheme" >
                    {/* <img src={MoonIcon} alt="theme"/> */}
                    <a href="#!" onClick={()=> setCount(count+1)}>
                      <span  > Dark Mode</span>
                    </a>
                    
                </div>

}

export default DarkModeButton




// CLASS COMPONENT

// import React from 'react';
// import MoonIcon from '../assets/half-moon.png'
// class ToggleTheme extends React.Component{
//     render(){
//         return <div className="toggleTheme" >
//                     <img src={MoonIcon} alt="theme"/>
//                     <span> Dark Mode</span>
//                 </div>
        
//     }
// }

// export default ToggleTheme; 