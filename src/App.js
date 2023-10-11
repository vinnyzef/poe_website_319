import React from "react"
import Creators from "./Creators"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import PoeNav from "./Nav"
import Home from "./Home"

const router = createBrowserRouter([
  {
    element: <PoeNav />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/creators",
        element: <Creators />,
      },
    ],
  },
])
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
