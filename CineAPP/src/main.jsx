import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Filmes from './assets/pages/Filmes.jsx'
import Sobre from './assets/pages/Sobre.jsx'
import PageNotFound from './assets/pages/PageNotFound.jsx'
import Home from './assets/pages/Home.jsx'
import Contato from './assets/pages/Contato.jsx'

const router = createBrowserRouter(
  [ 
    {
      path: "/",
      element: <App/>,
      children: [
        {index: true, element: <Home/>},
        {path: "filmes",element: <Filmes/>},
        {path: "sobre",element: <Sobre/>},
        {path: "contato",element: <Contato/>},
        {path: "*",element: <PageNotFound/>}
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
