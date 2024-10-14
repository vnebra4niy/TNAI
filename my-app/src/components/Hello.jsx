import React from 'react'

function a() {
    return 52
}

function Hello() {
    console.log(a())
    return (
        <h1>Hello</h1>
    )
}

export default Hello