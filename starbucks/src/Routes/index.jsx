import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
const Store = lazy(() => import('../pages/Store'))
const Account = lazy(() => import('../pages/Account'))
const Menu = lazy(() => import('../pages/Menu'))
const More = lazy(() => import('../pages/More'))


export default function RoutesConfig() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/store' element={<Store />}></Route>
          <Route path='/account' element={<Account />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/more' element={<More />}></Route>
      </Routes>
    </>
  )
}
