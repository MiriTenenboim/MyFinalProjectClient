import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import "./SendEmail";

emailjs.init('MWdKGN28PpafQHXOI');


export default function SendEmail() {
  const [toName, setToName] = useState(localStorage.getItem("userName"));
  const [toEmail, setToEmail] = useState(localStorage.getItem("userEmail"));
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: toName,
      to_email: toEmail,
      subject: subject,
      message: message
    };

    if(templateParams.to_name!=null && templateParams.to_email && templateParams.subject && templateParams.message)
    {
        emailjs.send('service_gcsp50k', 'template_87mgofj', templateParams)
        .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
       })
        .catch((error) => {
        console.error('Error sending email:', error);
       });
    }
    else{
        alert("כל השדות הם שדות חובה");
    }
  };

  return (
    <form onSubmit={sendEmail}>
      <input className="Details"
        type="text"
        placeholder="Your Name"
        value={toName}
        onChange={(e) => setToName(e.target.value)}
      /><br />
      <input className="Details"
        type="email"
        placeholder="To Email"
        value={toEmail}
        onChange={(e) => setToEmail(e.target.value)}
      /><br />
      <input className="Details"
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      /><br />
      <textarea className="Details"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea><br />
      <button onClick={sendEmail}>Send Email</button>
    </form>
  );
}
