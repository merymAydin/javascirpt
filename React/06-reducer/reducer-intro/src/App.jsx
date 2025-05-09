import './App.css'
import Calculate from './components/Calculate'
import CalculateReducer from './components/CalculateReducer'
import Counter from './components/Counter'
import CounterReducer from './components/CounterReducer'
import ToDo from './components/ToDo/ToDo'


function App() {
  
  
  return (
    <>
    <ToDo/>
    <br /><hr /><br />
    <Counter/>
    <hr />
    <CounterReducer/>
    <Calculate/>
    <CalculateReducer/>
    </>
  )
}

export default App
