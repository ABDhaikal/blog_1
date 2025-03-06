import React from 'react'
import ContentPage from './components/ContentPage/ContentPage'
import Author from './components/Author/Author'
import AboutTitle from './components/BigTitle/AboutTitle'

const AboutPage = () => {
  return (
    <div className='container m-auto'>
        <AboutTitle />
        <ContentPage />
        <Author />
        </div>
  )
}

export default AboutPage