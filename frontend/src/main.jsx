import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router"
import Gallery from './components/Gallery.jsx'
import VideoPage from './components/VideoPage.jsx'
import ChannelPage from './components/ChannelPage.jsx'
import LoginForm from './components/LoginForm.jsx'
import UserSidebar from './components/UserSidebar.jsx'


const routes = createBrowserRouter([
  {
    path:'',
    element:<App/>,
    children:[
      {
        path:'',
        element:<Gallery/>
      },
      {
        path:'/watch/:id',
        element:<VideoPage/>
      },
      {
        path:'/sidebar',
        element:<UserSidebar/>
      },
      {
        path:'/channel+page',
        element:<ChannelPage/>
      },
      {
        path:'/login',
        element:<LoginForm/>
      },

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
