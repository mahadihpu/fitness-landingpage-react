import React from 'react';

const Contact = () => {
    return (
        <div id="contact">
            <h1 style={{paddingTop:'20px'}}>Contact Us</h1>
            <form action="">
                <input type="text" placeholder="Full Name" name="name" required />
                <input type="email"placeholder="Email" name="" id="" required/>
                <textarea placeholder="write here......." name="message"></textarea>
                <input type="submit" value="send" />
            </form>
        </div>
    );
};

export default Contact;