import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import {router} from './router/router'
import { ThemeProvider } from "@material-tailwind/react";
import { DataProvider } from './context/DataContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </ThemeProvider>,
)
