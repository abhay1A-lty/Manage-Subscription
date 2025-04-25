import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ManageSubscription from './ManageSubscription'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ManageSubscription />} />
      </Routes>
    </Router>
  )
}

export default App
