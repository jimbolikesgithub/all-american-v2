import React from 'react';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <section>
            <div className="lg:grid lg:grid-cols-2 lg:gap-6 bg-blue-300 lg:h-2/3">
                <div className="flex flex-col justify-center text-center">
                    <h1>Contact Us</h1>
                </div>
                <ContactForm  />
            </div>
        </section>
    )
    
}

export default Contact;




// const form = useRef();

// function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('service_l9rndbt', 'template_yf6j0vr', form.current, 'x-fNIW7YWM2GGraUP')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });

//     e.form.current.reset();
// }

// return (
//     <section>
//         <h4 className="text-4xl">Hiiii</h4>
//         <form ref={form} onSubmit={sendEmail}>
//             <label>Name</label>
//             <input type="text" name="user_name" />
//             <label>Email</label>
//             <input type="email" name="user_email" />
//             <label>Message</label>
//             <textarea name="message" />
//             <input type="submit" value="Send" />
//         </form>
//     </section>
// )

