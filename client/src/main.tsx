import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Layout from './ui/Layout.tsx'
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom'
import Product from './pages/Product.tsx'
import Category from './pages/Category.tsx'
import Profile from './pages/Profile.tsx'
import Cart from './pages/Cart.tsx'
import Favourite from './pages/Favourite.tsx'
import Orders from './pages/Orders.tsx'
import NotFound from './pages/NotFound.tsx'
import RefundPolicy from './components/RefundPolicy.tsx'
import Privacypolicy from './components/PrivacyPolicy.tsx'
import TermsandConditions from './components/TermsConditions.tsx'

const RouterLayout =()=>{
  return(
    <Layout>
      <ScrollRestoration />
      <Outlet />
    </Layout>
  )
}

const router = createBrowserRouter([{
  path: '/',
  element: <RouterLayout />,
  children: [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/product',
      element: <Product />,
    },
    {
      path: '/product/:id',
      element: <Product />,
    },
    {
      path: '/category',
      element: <Category />,
    },
    {
      path: '/category/:id',
      element: <Category />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '/cart',
      element: <Cart />,
    },
    {
      path: '/favorite',
      element: <Favourite />,
    },
    {
      path: '/orders',
      element: <Orders />,
    },
    {
      path: '/refund-policy',
      element: <RefundPolicy />,
    },
    {
      path: '/privacy-policy',
      element: <Privacypolicy />,
    },
    {
      path: '/Terms-and-Conditions',
      element: <TermsandConditions />,
    },
    {
      path: '/orders/:id',
      element: <Orders />,
    },
    {
      path: '*',
      element: <NotFound />,
    }
  ]
}])


createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
