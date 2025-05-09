import React, { useReducer } from 'react'


const InitialValues = {
    number1:0,
    number2:0,
    result:0
}

function CalReducer(state,action){
    switch(action.type){
        case 'SETNUMBER1':
            return {...state,number1:action.payload};
        case 'SETNUMBER2':
            return {...state,number2:action.payload};
        case 'SETRESULT':
          return {...state, result : action.payload};
          case 'SET_MULTIPLE':  
          return {...state,result : action.payload};
          case 'SET_SUBTRACTION':
            return {...state,result: action.payload};
            case 'SET_DIVISION':
                return {...state,result: action.payload};
        default:
            return state;
    }
}



const CalculateReducer = () => { 
    const [state,dispatch] = useReducer(CalReducer,InitialValues)  

    const changeNumber1Input = (e) =>{
        dispatch({type:'SETNUMBER1' ,payload:Number(e.target.value)})
    }
    const changeNumber2Input = (e) =>{
        dispatch({type:'SETNUMBER2' ,payload:Number(e.target.value)})
    }
    const handleAdded = () =>{
        dispatch({type: 'SETRESULT', payload: state.number1+state.number2})
    }
    const handleMUltiple = () =>{
        dispatch({type:'SET_MULTIPLE',payload: state.number1 * state.number2})
    }
    const handleSubtraction = () =>{
        dispatch({type:'SET_SUBTRACTION',payload:state.number1 - state.number2})
    }
    const handleDivision =()=>{
        dispatch({type:'SET_DIVISION' , payload: state.number1 / state.number2})
    }
  return (
    <div className='calculate-wrapper'>
      <h2>Calculate Reducer</h2>
      <div className='calculate-form'>
        <div className="form-group">
            <label htmlFor="number1">Number1</label>
            <input type="number" value={state.number1} onChange={changeNumber1Input} />
        </div>
        <div className="form-group">
            <label htmlFor="number2">NUmber2</label>
            <input type="number" value={state.number2} onChange={changeNumber2Input} />
        </div>
        <button className="add-button" onClick={handleAdded}>Add</button>
        <button className="add-button" onClick={handleSubtraction}>Subtraction</button>
        <button className="add-button" onClick={handleMUltiple}>Multiply</button>
        <button className="add-button" onClick={handleDivision}>Division</button>
        <div className="form-group">
            <label htmlFor="result">result</label>
            <input type="number" id='result' value={state.result} readOnly/>
        </div>
      </div>
    </div>
  )
}

export default CalculateReducer
