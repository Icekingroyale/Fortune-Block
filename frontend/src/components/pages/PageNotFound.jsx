import React from 'react'
import '../../stylesheets/pagestyles/PageNotFound.css'
import {FaExclamationTriangle} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Copyright from '../Copyright'



const PageNotFound = () => {
  return (
    <>
    <Header/>
    <div className='pagenf-container'>
        <FaExclamationTriangle className='icon'/>
        <h1>404 Not Found</h1>
        <p>This page does not exist</p>
        <Link><button> Go Back </button>  </Link>

         

       
    </div>
    </>
  )
}

export default PageNotFound
