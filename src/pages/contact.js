import React from 'react'
import '../css/contact.css'

import Tpo from '../image/tpo.jpeg'
import Pdf from '../pdfs/pdfs.pdf'
import Subhankar from '../image/subhankar.jpeg'
import Kshitiz from '../image/kshitiz.jpeg'
import DrPraveen from '../image/dr_praveen_pawar.JPG'
import DrStalin from '../image/dr_shalini_stalin.jpeg'
import College from '../image/college_logo.png'

function contact() {
    return (
        <div className="contact-container">
            <div className="brief-wrapper">
                <h1 className="contact-header">
                    CONTACT US
                </h1>
                <h4 className="brief">
                    Training and Placement Cell of IIIT Bhopal manages all aspects of work and holds
                    responsibilty for placement for graduating students of every department of the college.
                    <br /><br />
                    Interested companies can directly contact via email at "TPO@iiitbhopal.ac.in" or may
                    contact our team whose contact details are mentioned hereby.
                </h4>
            </div>
            <div className="tpo-detail">
                <div className="tpo-head-detail">
                    <h2>Training and Placement Officer</h2>
                    <img src={Tpo} alt="TPO's " className="tpo-image" />
                    <h3>Mr. Ajay Shrivastava,<br /> Training and Placement Officer, <br />IIIT BHOPAL</h3>
                    <h4>Email: "professorajayshrivastava@gmail.com"</h4>
                    <h4>Contact No.- +91-9826014305, +91-9425373876</h4>
                </div>
                <div className="institute-detail">
                    <h2>Institute's Office</h2>
                    <img src={College} alt="College " className="contact-image" />
                    <h4>Contact No.- 0755-4051950</h4>
                    <h4>Fax No.- 0755-2670562</h4>
                </div>
            </div>
            <div className="student-detail">
                <h2>
                    Faculty Coordinators
                </h2>
                <div className="student-wrapper" >
                    <div className="student">
                        <img src={DrPraveen} alt="image" className="contact-image" />
                        <h3>
                            Dr. Praveen Pawar,<br /> <h4>Assistant Professor<br/>
                            Department of Electronics & Communication Engineering</h4>
                        </h3>
                    </div>
                    <div className="student">
                        <img src={DrStalin} alt="image" className="contact-image" />
                        <h3>
                            Dr. Shalini Stalin,<br /><h4>Assistant Professor<br />
                            Department of Information Technology</h4>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="student-detail">
                <h2>
                    Student Coordinators
                </h2>
                <div className="student-wrapper" >
                    <div className="student">
                        <img src={Subhankar} alt="image" className="contact-image" />
                        <h3>Shubhankar Sharma</h3>
                        <h4>Email: "18U010xx@iiitbhopal.ac.in"</h4>
                        <h4>Contact No.- +91-xxxxxxxxx</h4>
                    </div>
                    <div className="student">
                        <img src={Kshitiz} alt="image" className="contact-image" />
                        <h3>Kshitiz Sinha</h3>
                        <h4>Email: "18U010xx@iiitbhopal.ac.in"</h4>
                        <h4>Contact No.- +91-xxxxxxxxxx</h4>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="student-list">
                <h3>For list of the placement team, click <a href={Pdf} target="_blank">Here.</a></h3>
            </div>
        </div>
    )
}

export default contact
