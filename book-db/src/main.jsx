import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as React from 'react'
import { NextUIProvider } from '@nextui-org/system'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider >
      <main className='dark' />
      <App />
    </NextUIProvider>
  </React.StrictMode>,
)
