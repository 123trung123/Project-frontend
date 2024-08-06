import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
// import ProductPage from '../productpage/ProductPage'
import LandingPages from '../landingpage/LandingPages'
// import LandingPage from '../../components/LandingPage/LandingPage'


export default function Home() {
  return (
    <div>
      <Header/>
      <LandingPages/>
      {/* <ProductPage/> */}
      <Footer/>
    </div>
  )
}
