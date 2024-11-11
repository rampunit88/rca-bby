import { useState } from 'react'

import './App.css'
import { RouterProvider } from 'react-router-dom'
import routes from './common/routes'

function App() {  

  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
