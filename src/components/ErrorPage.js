import React from 'react';
import Header from './Header';
import Footer from './Footer';

function ErrorPage() {
  return (
    <div>
        <Header/>
        <div className="container">You have hit the wrong route.</div> 
        <Footer/>
        </div>
  );;
}

export default ErrorPage;
