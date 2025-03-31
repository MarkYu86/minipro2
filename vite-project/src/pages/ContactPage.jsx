import React from 'react';
import '../App.css'
import SubmitForm from '../components/SubmitForm';
import Contact from '../components/Contact';

function ContactPage() {
  return(
    <div className="contact-page">
  
    <Contact />
    <h2>Get in Touch:</h2>
    <SubmitForm />
  </div>
  ) 
}

export default ContactPage;