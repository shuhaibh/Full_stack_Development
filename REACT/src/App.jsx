import './App.css'
import W from './components/Welcome'
import G from './components/Greeting'
import Counter from './components/Counter'
import Namelist from './components/Namelist'
import MovieList from './components/MovieList'
import Users from './components/Users'
import Products from './components/Products'


function App() {
   const names=['Shuhaibh','Jaseel','Nadha','Amal']
   const movies = [
  { id: 1, title: "Inception", releaseYear: 2010 },
  { id: 2, title: "Interstellar", releaseYear: 2014 },
  { id: 3, title: "The Dark Knight", releaseYear: 2008 },
];

const isLoggedIn=true

  return (
  <>
    <h1 className="changeColor">This is my First react component</h1>
    <h2 className="changeBackground">React Components</h2>
    <h3 style={{color:'blue',padding:'30px',fontSize:'40px'}}>Single Page Architecture</h3>

    <W batch="RIT"/>
    <W batch="CET"/>
    <W batch="IIT"/>

    <G name="Shuhaibh" isLoggedIn={isLoggedIn}/>

    <Counter />

    <Namelist names={names}/>
    <MovieList movies={movies} />

    <Users />

    <Products />

    <h1 className='text-amber-500'>
      Hi from Tailwind
    </h1>
  </>
  )
}



export default App
