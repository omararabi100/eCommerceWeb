import React, { useEffect, useState } from "react";

function Contact({darkMode}) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [primaryColor, setPrimaryColor] = useState("white")
    const [secondaryColor, setSecondaryColor] = useState("#444")
    const handleSubmit = (e) => {
        e.preventDefault()
        setName("")
        setEmail("")
        setMessage("")
    }
    useEffect(() => {
        if (darkMode) {
            setPrimaryColor("#777")
            setSecondaryColor("white")
        }
        else {
            setPrimaryColor("white")
            setSecondaryColor("#444")
        }
    }, [darkMode])
    const itemStyle = {
        backgroundColor: primaryColor,
        color: secondaryColor
    }
    return (
        <div className="contact" style={itemStyle}>
            <h1>Contact Us</h1>
            <p> If you have any questions or feedback, please fill out the form below and we will get back to you as soon as possible.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                </div>
                <div className="form-group">
                    <button>Send</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;