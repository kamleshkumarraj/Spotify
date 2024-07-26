
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FullPageWrapper from './context/FullPageContext'

function App() {

  return (
    <>
      <div id="page-wrapper" className='w-[100%] px-[2rem]'>
        <FullPageWrapper>
          <Header />
          <Outlet />
          <Footer />
        </FullPageWrapper>
      </div>
    </>
  )
}

export default App
