import React from 'react';
import './App.css';
import ListOfGifs from './Components/ListOfGifs';
import { Link, Route } from 'wouter';

function App() {


  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/Gifs/panda'>Gif de pandas</Link>
        <Link to='/Gifs/monos'>Gif de monos</Link>
        <Link to='/Gifs/argentina'>Gif de argentina</Link>
        <Route 
        component={ListOfGifs}
        path='/Gifs/:Keyword' 
        />
      </section>
    </div>
  );
}

export default App;
