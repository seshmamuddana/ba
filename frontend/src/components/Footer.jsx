import React from 'react'
import { Link } from 'react-router-dom';
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    const hours = [
        {
            id: 1,
            day: "Monday    " ,
            time: " 9:00 AM - 5:00 PM"
        },
        {
            id: 2,
            day: "Tuesday    " ,
            time: " 9:00 AM - 5:00 PM"
        },
        {
            id: 3,
            day: "Wednesday    " ,
            time: " 9:00 AM - 5:00 PM"
        },
        {
            id: 4,
            day: "Thursday    " ,
            time: " 9:00 AM - 5:00 PM"
        },
        {
            id: 5,
            day: "Friday    " ,
            time: " 9:00 AM - 5:00 PM"
        },
        {
            id: 6,
            day: "Saturday    " ,
            time: " 9:00 AM - 5:00 PM"
        },      
        ];
  return (
    <>
        <footer className="container">
            <hr />
            <div className="content">
                <div>
                    <img src="/logoo.png" alt="logo" className="logo-img"/>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <ul>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/appointment"}>Appointment</Link>
                        <Link to={"/about"}>About Us</Link>
                    </ul>
                </div>
                <div>
                    <h4>Working Hours</h4>
                    {
                        hours.map(element => {
                            return(
                                <li key={element.id}>
                                    <span>{element.day}</span>
                                    <span>{element.time}</span>
                                </li>
                            )
                        })
                    }
                </div>
                <div>
                    <h4>Contact</h4>
                    <div>
                        <FaPhone/>
                        <span>+91-9999999999</span>
                    </div>
                    <div>
                        <MdEmail/>
                        <span>contactsmhealthcare@gmail.com</span>
                    </div>
                    <div>
                        <FaLocationArrow/>
                        <span>Vijayawada, India</span>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer