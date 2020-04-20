import React from 'react'
import App from './App'
import { render } from '@testing-library/react'

 const Index = () => {
    return (
        <div>
        <App />            
        </div>
    )
}

render(<Index />, document.getElementById('root'))
