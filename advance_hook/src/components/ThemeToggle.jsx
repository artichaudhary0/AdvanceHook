import { useCallback } from "react";
import { useTheme } from "../context/ThemeContext";


function ThemeToggle(){
    // using useContext through our cuustom hook 

    const {state: {isDark,fontSize},dispatch } = useTheme()


    // useCallback for memoized event handles. 
    const handleThemeToggle =  useCallback(()=>{
        dispatch({type : "TOGGLE_THEME"});
    },[dispatch])

    const handleFontSize =  useCallback(()=>{
        dispatch(
            {type : "SET_FONT_SIZE",payload : fontSize === 'medium' ? "large" : "medium"});
    },[dispatch,fontSize])

    return <div >
        <button onClick={handleThemeToggle}>Switch to {isDark?"Light":"Dark"}</button>
        <button onClick={handleFontSize}>Toggle Font Size (Current : {fontSize})</button>

    </div>
}


export default ThemeToggle;