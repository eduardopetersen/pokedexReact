import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home';
import Details from './pages/Details';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <section className='container'>
      <Home />
    </section>
  </React.StrictMode>
);