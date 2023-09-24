import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { ToyIndex } from './views/ToyIndex'
import { store } from './store/store'
import { Provider } from 'react-redux'

import { Home } from './views/Home'
import { About } from './views/About'
import { AppHeader } from './cmps/AppHeader'
import { ToyDetails } from './cmps/ToyDetails'
import { ToyEdit } from './cmps/ToyEdit'

import './assets/css/main.css'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Router>
        <section className="app">
          <AppHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/toy" element={<ToyIndex />} />
            <Route path="/toy/:toyId" element={<ToyDetails />} />
            <Route path="/toy/edit" element={<ToyEdit />} />
            <Route path="/toy/:toyId/edit" element={<ToyEdit />} />
          </Routes>
        </section>
      </Router>
    </Provider>
  )
}


