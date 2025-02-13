/*
useContent : ThemeToggle and Counter : we will going to use useTheme hook to access theme state.

useReducer : Implement in themeContext to manage theme state with action.

useMemo : Counter component to memories result.

useCallBack : event Handle. prevent unneccesary re-render

useSelector : USed in counter component to access the redux store state.

useDispatch : Used in counter component to dispatch redux actions.
*/

import { useCallback, useMemo } from "react";
import {useSelector, useDispatch}  from "react-redux";
import { decrement, increment } from "../Slices/CounterSlice";
import { useTheme } from "../context/ThemeContext";


function Counter() {

// useSelector hook : getting state from redux store.
const count = useSelector(state=>state.counter.value)


// useDispatch hook : getting dispatch function from redux.
const dispatch = useDispatch()


// useContext hook (Custom hook) :
const {state : {isDark,fontSize}} = useTheme();


// useCallback hook - memoized callback function 
const handleIncrement = useCallback(()=>{
    dispatch(increment())
},[dispatch]);

const handleDecrement = useCallback(()=>{
    dispatch(decrement())
},[dispatch]);



// useMemo hook : memoized value of calculation
const doubleCount = useMemo(()=>{
    console.log("double count")
    return count * 2
},[count])


// dynamic style 
const style = {
    backgroundColor : isDark ? "black": "White" ,
    padding : "20px",
    borderRadius : "8px",
    fontSize : fontSize === "large" ? "1.2rem":"1rem",
    color : isDark ? "white" : "black"
}


  return (
    <div style={style}>
        <h2>Counter Component</h2>
        <p>Current Count : {count}</p>
        <p >Double Count (Memoized) : {doubleCount}</p>

        <button onClick={handleIncrement}>
            Increment
        </button>
        <button 
        onClick ={handleDecrement}
        >
            Decrement
        </button>
      
    </div>
  )
}

export default Counter
