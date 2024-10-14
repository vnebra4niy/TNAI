import React from 'react'
import './App.css'
import World from './components/World'
import Hello from './components/Hello'

function App() {
    const enable=false
    return <>{enable ? <World /> : <Hello />}</>
}

export default App