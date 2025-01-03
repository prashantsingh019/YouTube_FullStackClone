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
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import AddChannel from './components/AddChannel.jsx'
import ErrorPage from './components/ErrorPage.jsx'


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
        path:'/channel+page/:channelEmail',
        element:<ChannelPage/>
      },
      {
        path:'/login',
        element:<LoginForm/>
      },
      {
        path:'/create-channel',
        element:<AddChannel/>
      },

    ],
    errorElement:<ErrorPage/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={routes}/>
    </Provider>
  </StrictMode>,
)
