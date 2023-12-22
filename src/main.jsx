import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './components/Register/Register.jsx';
import Login from './components/Register/Login.jsx';
import Home from './components/Home/Home.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Dashboard from './components/Dashboard/Dashboard/Dashboard.jsx';
import UserHome from './components/Dashboard/UserHome/UserHome.jsx';
import AllTask from './components/Dashboard/AllTask.jsx/AllTask.jsx';
import AddTask from './components/Dashboard/AddTask/AddTask.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TaskUpdate from './components/Dashboard/TaskUpdate/TaskUpdate.jsx';
const queryClient = new QueryClient()
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Guide from './components/Home/Guide/Guide.jsx';
import Feedback from './components/Home/Feedback/Feedback.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/guide',
        element:<Guide></Guide>
      },
      {
        path:'/feedback',
        element:<Feedback></Feedback>
      }
    ]
  },
  {
    path:"dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'userHome',
        element:<UserHome></UserHome>
      },
      {
        path:'alltask',
        element:<AllTask></AllTask>
      },
      {
        path:'addtask',
        element:<AddTask></AddTask>
      },
      {
        path:'updateTask/:id',
        element:<TaskUpdate></TaskUpdate>,
        loader: ()=>fetch('http://localhost:5000/task')
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <DndProvider backend={HTML5Backend}>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      </DndProvider>
    </AuthProvider>
  </React.StrictMode>,
)
