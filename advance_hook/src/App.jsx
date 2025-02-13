import './App.css'
import Counter from './components/Counter'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './context/ThemeContext'
import { store } from './store/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store = {store} >
        <ThemeProvider>
        <ThemeToggle/>
        <Counter/>
        </ThemeProvider>
    </Provider>
  )
}

export default App
