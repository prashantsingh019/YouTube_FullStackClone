import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router"
import Gallery from './components/Gallery.jsx'
import VideoPage from './components/VideoPage.jsx'
import UserSidebar from './components/userSidebar.jsx'
import ChannelPage from './components/ChannelPage.jsx'


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
        path:'/watch',
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

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
