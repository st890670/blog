import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from 'app'
import 'styles/main.scss'

ReactDOM.render(
  <BrowserRouter basename='/'>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
