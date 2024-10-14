import React from 'react'
import './App.css'
import World from './components/World'
import Hello from './components/Hello'

function App() {
    return (
        <div className='app'>
            <Hello/>
            <World/>
            <h1>:-) Hello World</h1>
        </div>
    )
}

export default App