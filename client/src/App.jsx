import React from 'react'
import Header from './components/Header'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Search from './pages/Search'

const Layout = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/products/:id', element: <Products /> },
			{ path: '/product/:id', element: <ProductDetails /> },
			{ path: '/search', element: <Search /> },
		],
	},
])

const App = () => {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
