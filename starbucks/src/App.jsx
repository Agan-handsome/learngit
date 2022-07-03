import { useState, Suspense } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import RoutesConfig from './Routes'

function App() {

  return (
    <>
     <Header />
        <Suspense fallback={<div>loading...</div>}>
          <RoutesConfig />
        </Suspense>
     <Footer />
    </>
  )
}

export default App
