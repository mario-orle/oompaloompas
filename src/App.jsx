import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import './App.css'

const OompaLoompaList = React.lazy(() => import('./pages/OompaLoompaList'))
const OompaLoompaDetail = React.lazy(() => import('./pages/OompaLoompaDetail'))

const Loading = () => <p>Loading ...</p>

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<Loading />}>
              <OompaLoompaList />
            </Suspense>
          }
        />
        <Route
          path='/:oompaLoompaId'
          element={
            <Suspense fallback={<Loading />}>
              <OompaLoompaDetail />
            </Suspense>
          }
        />
        <Route path='*' element={<OompaLoompaList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
