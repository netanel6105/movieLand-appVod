import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '../layout/layout';
const AppRouters = () => {

  return (

    <Router>
      <Routes>

        <Route path='/' element={<Layout/>} />

            

        {/* Not Found */}
        <Route path='/*' element={<h1>Not Found 404</h1>} />
      </Routes>


    </Router>
  )
}

export default AppRouters