import './App.css'
import Counter from './components/Counter'
import { store } from './store/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store = {store} >
    <Counter/>
      
    </Provider>
  )
}

export default App
