import React, { useReducer} from 'react'

function reducer(state,action){
    switch(action){
        case "INCREMENT" : return state+1;
        case "DECREMENT" : return state-1;
        case "RESET" : return 0;
        default: return state;
    }
}

const CounterReducer = () => {
    const [state,dispatch] = useReducer(reducer,0);
    
  return (
    <>
      <h2>Counter Reducer</h2>
      <p>counter = {state}</p>
      <button onClick={dispatch("INCREMENT")}> + </button>
      <button onClick={dispatch("RESET")}> reset </button>
      <button onClick={dispatch("DECREMENT")}> - </button>
    </>
  )
}

export default CounterReducer
  );
};

export default CounterReducer;
