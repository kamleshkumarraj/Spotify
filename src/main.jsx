
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import store from './store/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([{
    path : '/',
    element : <App />,
    children : [{
      path : '/',
      element : <Home />
    }]
}])

//rendering the element in our webpages
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
      <Provider store={store}>
        <App />
      </Provider>
    </RouterProvider>
)
