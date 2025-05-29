import './App.css'
import W from './components/Welcome'
import G from './components/Greeting'
import Counter from './components/Counter'

function App() {

  return (
  <>
    <h1 className="changeColor">This is my First react component</h1>
    <h2 className="changeBackground">React Components</h2>
    <h3 style={{color:'blue',padding:'30px',fontSize:'40px'}}>Single Page Architecture</h3>

    <W batch="RIT"/>
    <W batch="CET"/>
    <W batch="IIT"/>

    <G name="Shuhaibh"/>

    <Counter />
  </>
  )
}

export default App
