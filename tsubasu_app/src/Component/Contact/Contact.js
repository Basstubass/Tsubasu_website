// import { faContactBook } from '@fortawesome/free-regular-svg-icons';
import React, { useState } from 'react';
import "./Contact.css";




function Contact() {

    const [active, setActive] = useState(false);
    const classToggle = () => {
        setActive(!active);
        setTimeout(() => {
            setActive(active);
            window.location.reload()
        }, 4000);
      }


    const [Name, setName, ] = useState('')
    const setName_handleChange = (e) => {
        setName(() => e.target.value)
    }
    const [Add, setAdd, ] = useState('')
    const setAdd_handleChange = (e) => {
        setAdd(() => e.target.value)
    }
    const [Comm, setComm, ] = useState('')
    const setComm_handleChange = (e) => {
        setComm(() => e.target.value)
    }


  
    return (
        <div className="parents_com">
            <div className="contact">
                <div className="contact_aria">
                    <h1>Contact</h1>
                </div>
                <form >
                    <div className="contact_from">
                        <div className="from_aria">
                            <p>Name</p>
                            <input type="text" name="yourname"　maxLength="25"　value={Name}　onChange={setName_handleChange}></input>
                        </div>
                        <div className="from_aria">
                            <p>Address</p>
                            <input type="text" name="Address"　maxLength="25"　value={Add}　onChange={setAdd_handleChange}></input>
                        </div>
                        <div className="from_aria">
                            <p>Comment</p>
                            <textarea type="text" name="comment" id="comment_form"　maxLength="25" rows="20" wrap="hard" value={Comm}　onChange={setComm_handleChange}></textarea>
                        </div>
                    </div>
                    <input type="button" value="Send" className="button" onClick={classToggle}/>
                </form>
            </div>
            <div className= {active ? "loading_aria red" : "loading_aria blue"}>
                <div className="loader">Loading...</div>
            </div>
        </div>
    );
  }
  
export default Contact