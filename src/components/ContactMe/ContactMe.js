import React, { useState } from 'react';
import './ContactMe.css';
import emailjs from '@emailjs/browser';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {


    const notifySuccess = () => toast.success('Email Sent Successfully!');
    const notifyWarning = () => toast.warning('Please fill in all details');
    const notifyAgreementWarning = () => toast.warning('Please agree to the terms.');



    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        body: '',
        agreement: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!formData.name || !formData.email || !formData.subject || !formData.body) {
            notifyWarning();
            return;
        }
    
        if (!formData.agreement) {
            notifyAgreementWarning();
            return;
        }

        const public_key = 'D0fCaMAf6nDuoRcSA';
        const service_id = 'service_1l7222g';
        const template_id = 'template_huc297k';

        const templateParams = {

            subject: formData.subject,
            to_name: 'Srushti',
            from_name: formData.name,
            email: formData.email,
            message: formData.body

        }

        emailjs.send(service_id, template_id, templateParams, public_key)
            .then((response) => {
                console.log('Email Sent Successfully!', response);
                notifySuccess();
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    body: '',
                    agreement: false,
                });
            })
            .catch((error) => {
                console.error('Error sending email: ', error);
            })



    }






    return (
        <div className="contactme-container">
            <div className="contactme-left">
                <strong>GeekyGalaxy Mail - Let's Connect 🌌✨🚀💫</strong>
                <div className="left-to">
                    <strong>To:</strong>
                    <p>
                        srushant23@gmail.com 📧
                    </p>
                </div>
                <div className="left-subject">
                    <strong>Subject:</strong>
                    <p>
                        {formData.subject ? <p>{formData.subject} 🚀</p> : <p>&lt;Your Subject&gt;🚀</p>}
                    </p>
                </div>
                <div className="left-salutation">
                    <h2>"Hey Srushti! 👋</h2>

                </div>

                <div className="left-message">
                    {/* <p>
                    <strong>Message:</strong>
                </p> */}
                    <p>
                        {formData.body ? <p>{formData.body}🌟"</p> : <p>&lt;Your Message&gt;💫"</p>}
                    </p>
                </div>

                <div className='left-closing'>
                    <p>
                        <strong>Regards</strong>
                    </p>
                    <p>
                        {formData.name ? <p>{formData.name}✨</p> : <p>&lt;Your Name&gt;✨</p>}
                    </p>
                </div>

                <div className="left-email">
                    <strong>Email:</strong>
                    <p>
                        {formData.email ? <p>{formData.email}📧</p> : <p>&lt;Your Email&gt;📧</p>}
                    </p>
                </div>
            </div>
            <div className="contactme-right">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className='right-input'
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className='right-input'
                    />
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className='right-input'
                    />
                    <textarea
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        placeholder="Your message"
                        className='right-input'
                    />
                    <label className="privacy-policy">
                        <input
                            type="checkbox"
                            name="agreement"
                            checked={formData.agreement}
                            onChange={handleChange}
                            className="right-checkbox"
                        />
                        Yup, I'm cool with Srushti using my name and email to reach out to me.
                    </label>
                    <div className='send-container'>
                        <button type="submit" className="contact-send-btn">
                            <p>Send</p>
                        </button>
                        <ToastContainer />
                    </div>
                    <p className="privacy-policy">
                        By submitting this request, you acknowledge that you have read the Privacy Policy.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;
