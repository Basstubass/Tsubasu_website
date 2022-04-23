// import { faContactBook } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import "./Contact.css";


function Contact() {
  
    return (
            <div className="contact">
                <div className="contact_aria">
                    <h1>Contact</h1>
                    
                </div>
                <from>
                    <div className="contact_from">
                        <div className="from_aria">
                            <p>Name</p>
                            <input type="text" name="yourname"　maxLength="25"></input>
                        </div>
                        <div className="from_aria">
                            <p>Address</p>
                            <input type="text" name="Address"　maxLength="25"></input>
                        </div>
                        <div className="from_aria">
                            <p>Comment</p>
                            <textarea type="text" name="comment" id="comment_form"　maxLength="25" rows="20" wrap="hard"></textarea>
                        </div>
                    </div>
                </from>

            </div>
    );
  }
  
export default Contact;