import { createBrowserRouter } from 'react-router-dom';
import { Home, Contact, Cookies, Kvvk } from '../pages';
import { Layout } from '../components';
import { dataLoader } from '../services/index'

export const router = createBrowserRouter([
 {
   element: <Layout/>,
   children: [
     {
       index: true,
       element:<Home/>,
       loader: dataLoader
     },
     {
       path: "/iletisim",
       element: <Contact/>,
     },
     {
       path: "/cerez-politikasi",
       element: <Cookies/>,
     },
     {
       path: "/kvvk",
       element: <Kvvk/>,
     },
     {
       path: "/*",
       element: <Home/>,
     }
   ]
 }
])