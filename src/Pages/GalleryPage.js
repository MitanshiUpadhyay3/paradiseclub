import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import Gallery from '../Components/Gallery'
import Video from '../Video'

const GalleryPage = () => {
  return (
    <>
        <Hero title="GALLERY"/>
        {/* <Video /> */}
        <Gallery/>
    </>
  )
}

export default GalleryPage