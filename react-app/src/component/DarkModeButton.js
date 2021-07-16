import React, { useContext, useEffect ,useState} from 'react'

import MoonIcon from '../assets/half-moon.png'
import { StateContext } from './Store'
import { darkTheme, lightTheme } from './Theme';
function DarkModeButton() {
    const [count,setCount]= useState(0)
    const [state,dispatch]= useContext(StateContext);
       const clickHandler=()=>{
            let themeVar={}
            // console.log(state)
            if(state.theme==undefined) return ;
            if(state.theme.type=='light'){
                themeVar=darkTheme
            }
            else{
                themeVar=lightTheme
            }
            // console.log('Use effect called')
            // console.log('Theme button clicked')
            dispatch({type:'SET_THEME', payload:themeVar})
        }

        // console.log(state.theme)
        return <div className="theme-button" >
                    {/* <img src={MoonIcon} alt="theme"/> */}
                    <a href="#!" onClick={clickHandler}>
                      <span > Dark Mode</span>
                    </a>
                    
                </div>

}

export default DarkModeButton

