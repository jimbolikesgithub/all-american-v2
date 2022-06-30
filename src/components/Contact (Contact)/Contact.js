import React from 'react';
import ContactForm from './ContactForm';
import './contact.css';

function Contact() {
  return (
    <section className="contact-body">
      <h1 className="contact-h1">CONTACT US</h1>
      <p className="contact-number">1 (805) - 526 - 2080</p>
      <div className="contact-container">
        <div className="contact-form-container">
          <ContactForm />
        </div>
        <div className="contact-map-container">
          <iframe
            title="myFrame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.3108266096533!2d-118.79498991812291!3d34.27783216315353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82e948da55b05%3A0x40c74cf1ad2a6eab!2sAll%20American%20Doors%20and%20Windows!5e0!3m2!1sen!2sus!4v1656105234293!5m2!1sen!2sus"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;

// {/* <div className="contct-container">
//             <div className="contact-form-container">
//                     <ContactForm  />
//                 </div>
//                 <div className="contact-map-container">
//                     <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.3108266096533!2d-118.79498991812291!3d34.27783216315353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82e948da55b05%3A0x40c74cf1ad2a6eab!2sAll%20American%20Doors%20and%20Windows!5e0!3m2!1sen!2sus!4v1656105234293!5m2!1sen!2sus" width="100%" height="auto" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//                 </div>
//             </div> */}

// <div className="lg:grid lg:gap-6 bg-blue-300 lg:h-2/3">
//                 <div className="flex flex-col">
//                     <div>
//                     <h1>Contact Us</h1>
//                         <ContactForm  />
//                     </div>
//                     <div>

//                     </div>
//                 </div>

//                 </div>
