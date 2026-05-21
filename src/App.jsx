import './App.css'
import { useTheme } from './hooks/UseTheme.jsx'; 

function App() {
  const { mode, toggle } = useTheme();
  
  return (
    <>
      <button onClick={toggle}>Toggle Theme</button>
      <p>Current Theme: {mode}</p>
    </>
  )
}

export default App
