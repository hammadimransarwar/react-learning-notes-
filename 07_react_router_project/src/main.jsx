import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contactus/Contactus.jsx';
import User from './components/User/User_.jsx';
import Github, {githubInfoLoader} from './components/Github/Github_.jsx';
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      }
      ,
      {
        path:"about",
        element:<About/>
      }
      ,
      {
        path:"contactus",
        element:<Contact/>
      }
      ,
      {
      path:"user/:userid",
      element:<User/>
      }
      ,
      {
        loader:githubInfoLoader,
        path:"github",
      element:<Github/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>  
  </StrictMode>,
)
