import React from 'react'
import '../css/home.css'

import Director from '../image/director.png'
import Tpo from '../image/tpo.jpeg'

import Corousel from './corousel_home/corousel'
import {CorouselData} from './corousel_home/corousel_data'

function home() {
    return (
        <div className="home-container">
            <div>
                < Corousel slides={CorouselData} />
            </div>
            <div className="college-brief">
                <div className="college-brief_head">
                    <h2>Indian Institute of Information Technology, Bhopal</h2>
                </div>
                <div className="college-brief_body">
                    <h3>
                        “Our vision is to become one of the leading institutions in the IT domain.
                        Providing sufficient nourishment for producing leaders in the industry. Also, to
                        lead as an institute of higher studies that would serve as a source of education
                        and experience for the society, and to be an endorsed place for the student
                        community.”<br />
                        INDIAN INSTITUTE OF INFORMATION TECHNOLOGY BHOPAL (IIIT-Bhopal)
                        is newly established Educational Institute by the Ministry of Education,
                        Government of India and few industry partners as Not-for-profit Public Private
                        Partnership (N-PPP) Institution. The industry Partner of IIIT Bhopal is, Rajiv
                        Gandhi Proudyogiki Vishwavidyalaya (RGPV, Bhopal M.P.). The capital cost of
                        IIIT Bhopal to be contributed in the ratio of 50:35:15 by the MoE, Government of
                        India, Government of Madhya Pradesh and the industry partners respectively.<br />
                        Our students boast diverse skill sets including Blockchain, Internet of Things,
                        Data Science & Analytics, Artificial Intelligence, Machine Learning, Big Data,
                        Cloud Computing, Web Development, Android / IOS development, UI/UX design,
                        Project Management, System Design, VLSI, Wireless Communication,
                        Embedded Systems, Signal Processing etc.<br />
                        IIIT Bhopal offers various undergraduate programs in Computer Science,
                        Electronics & Communication Engineering, Information Technology and their
                        industrial applications.<br />
                        Established in 2017, IIIT Bhopal is one of India's rising and tremendously
                        growing institutes aspiring towards the betterment of each student in the field of
                        technology and will get its NIRF ranking from five years since the date of
                        establishment.<br />
                        The institute has been recently recognised as an ‘Institute of National
                        Importance’ by the Government of India under the IIIT Act of 2020.
                 </h3>
                </div>
            </div>
            <div className="director-message">
                <div className="director-message_head">
                    <h2>From the Desk of Director</h2>
                    <img src={Director} alt="director's " className="director-image" />
                    <h3>Dr. N S Raghuwanshi,<br /> Mentor Director, <br />IIIT BHOPAL</h3>
                </div>
                <div className="director-message_body">
                    <h3>
                        “Indian Institute of Information Technology,
                        Bhopal is an institute of national importance,
                        with Maulana Azad National Institute of
                        Technology as its mentor. We aspire to
                        establish the traditions that reflect the vision
                        and determination of the institute works to
                        bring out the professionals who become the
                        assets of your companies tomorrow. The
                        atmosphere of the institute is very
                        inspirational with each entity striving to
                        prosper and be a reason for society’s
                        prosperity. The institute targets producing
                        technical professionals embellished with
                        tactful logical skills and synchronous
                        management skills. It focusses on developing
                        a culture of hard-work and great team spirit
                        amongst the students. We highly value the
                        attention of all the interested companies and
                        are committed to make the recruitment
                        experience tremendous and futuristic. I, on
                        behalf of our institute, graciously invite your
                        company for campus recruitments and other
                        purposeful academic activities.”
                    </h3>
                </div>
            </div>
            <div className="tpo-message">
                <div className="tpo-message_head">
                    <h2>From the Desk of Training and Placement Officer</h2>
                    <img src={Tpo} alt="TPO " className="tpo-image" />
                    <h3>Mr. Ajay Shrivastava,<br /> Training and Placement Officer, <br />IIIT BHOPAL</h3>
                </div>
                <div className="tpo-message_body">
                    <h3>
                        “It is a great honour for our institute to extend
                        to your company the most cordial invitation
                        for campus recruitment. It gives me immense
                        pleasure to mention that our newly
                        established institute with its esteemed
                        industrial partners have launched the second
                        batch of students as the aspiring
                        professionals of tomorrow. This institute of
                        national importance is recognised for its
                        excellence in the technical arena. The
                        excellent academic schema, in accordance
                        with that of MANIT Bhopal, and the extracurricular activities hone skills for the real
                        world and the real challenges. The institute is
                        very sincere for its hospitality and we strive to
                        facilitate our recruiters with all necessities. In
                        case we have adversity slipped somewhere, I
                        offer my apologies in advance. I would solicit
                        your company to kindly visit our beautiful
                        campus and pick the candidate of your
                        choice on any date convenient to both of us.
                        Looking forward to building a win-win relationship."
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default home
