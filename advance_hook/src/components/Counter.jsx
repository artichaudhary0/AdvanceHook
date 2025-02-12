/*
useContent : ThemeToggle and Counter : we will going to use useTheme hook to access theme state.

useReducer : Implement in themeContext to manage theme state with action.

useMemo : Counter component to memories result.

useCallBack : event Handle. prevent unneccesary re-render

useSelector : USed in counter component to access the redux store state.

useDispatch : Used in counter component to dispatch redux actions.
*/

import { useCallback } from "react";
import {useSelector, useDispatch}  from "react-redux";
import { decrement, increment } from "../Slices/CounterSlice";


function Counter() {

// useSelector hook : getting state from redux store.
const count = useSelector(state=>state.counter.value)


// useDispatch hook : getting dispatch function from redux.
const dispatch = useDispatch()


// useContext hook (Custom hook) : getting theme context


// useCallback hook - memoized callback function 
const handleIncrement = useCallback(()=>{
    dispatch(increment())
},[dispatch]);

const handleDecrement = useCallback(()=>{
    dispatch(decrement())
},[dispatch]);



// useMemo hook : memoized value of calculation


const style = {
    backgroundColor : '#fff' ,
    padding : "20px",
    borderRadius : "8px",
    fontSize : "1.2rem",
    color : "black"
}


  return (
    <div style={style}>
        <h2>Counter Component</h2>
        <p>Current Count : {0}</p>
        <p>Double Count (Memoized) : {2}</p>

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
