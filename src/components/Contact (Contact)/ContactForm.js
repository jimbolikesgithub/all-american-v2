import { useEffect, useState } from 'react';
import InputField from './InputField'
import TextAreaField from './TextArea';
import { ChevronRightIcon } from '@heroicons/react/solid'
import emailjs from '@emailjs/browser';

function ContactForm() {

    const [values, setValues] = useState({
        // Must ALL be the same as corresponding 'name' values in below JSX tags
        fullName: '',
        email: '',
        role: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    console.log(values);

    const handleSubmit = (e) => {
        // Enables browser to NOT reload on submit
        e.preventDefault();
        emailjs.send('service_l9rndbt', 'template_yf6j0vr', values, 'x-fNIW7YWM2GGraUP').then(response => {
                console.log('SUCCESS!', response);
                setValues({
                    fullName: '',
                    email: '',
                    role: '',
                    message: ''
                });
                setStatus('SUCCESS');
            }, error => {
                console.log('FAILED....', error);
            })
    }

    useEffect(() => {
        if (status === 'SUCCESS') {
            setTimeout(() => {
                setStatus('');
            }, 3000)
        }
    }, [status]);

    const handleChange = (e) => {
        setValues(values => ({
            // Grabs ALL values
            ...values,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="">
            {status && renderAlert()}
            <form onSubmit={handleSubmit}>
                <InputField value={values.fullName} handleChange={handleChange} label="Name" name="fullName" type="text" placeholder="John Doe" />
                <InputField value={values.email} handleChange={handleChange} label="Email" name="email" type="email" placeholder="john@example.com" />
                <TextAreaField value={values.message} handleChange={handleChange} label="Message" name="message" />
                <button type="submit" className="mt-4 bg-gray-900 text-gray-200 rounded hover:bg-gray-700 px-4 py-2 focus:outline-none">Send <ChevronRightIcon className="w-6 ml-2 float-right" /> </button>
            </form>
        </div>
    )
    
}

const renderAlert = () => (
    <div className="px-4 py-1 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
        <p>Message successfully sent!</p>
    </div>
)

export default ContactForm;