import React from 'react'
import '../css/recruitors.css'

import Amazon from '../image/logos_Images/Amazon.png'
import BuddiAi from '../image/logos_Images/Buddi.ai.png'
import ChoiceTech from '../image/logos_Images/Choice Tech Labs.png'
import Commvault from '../image/logos_Images/Commvault.png'
import Condenast from '../image/logos_Images/Condenast.png'
import Deevia from '../image/logos_Images/Deevia Software.png'
import Delhivery from '../image/logos_Images/Delhivery1.png'
import Ebiw from '../image/logos_Images/EBIW.png'
import Exhlr from '../image/logos_Images/EXHLR.png'
import Gep from '../image/logos_Images/GEP.png'
import Impetus from '../image/logos_Images/Impetus1.png'
import Indusos from '../image/logos_Images/IndusOs.png'
import Infoedge from '../image/logos_Images/Infoedge1.png'
import Intuit from '../image/logos_Images/Intuit.png'
import Kicksdrum from '../image/logos_Images/kicksdrum.png'
import Maq from '../image/logos_Images/maq_Softwares1.png'
import Modak from '../image/logos_Images/MODAK.png'
import Nagarro from '../image/logos_Images/nagarro1.png'
import Newzera from '../image/logos_Images/Newzera.png'
import Nextuple from '../image/logos_Images/NEXtuple.png'
import Openfive from '../image/logos_Images/OPENFIVE.png'
import Planetspark from '../image/logos_Images/Planet Spark1.png'
import Saggezza from '../image/logos_Images/Saggezza.png'
import Truechip from '../image/logos_Images/TrueChip1.png'
import Toshiba from '../image/logos_Images/Toshiba.png'


function recruitors() {
    return (
        <div>
            <div>
                <h1>Our Recruitors</h1>
            </div>
            <div className="recruitor-div-container" >
                <img src={Amazon} alt="image's" className="company-logo"/>
                <img src={BuddiAi} alt="image's" className="company-logo"/>
                <img src={ChoiceTech} className="company-logo" alt="image's"/>
                <img src={Commvault} className="company-logo" alt="image's"/>
                <img src={Condenast} className="company-logo" alt="image's"/>
            </div>
            <div className="recruitor-div-container">
                <img src={Deevia} className="company-logo" alt="image's"/>
                <img src={Delhivery} className="company-logo" alt="image's"/>
                <img src={Ebiw} className="company-logo" alt="image's"/>
                <img src={Exhlr} className="company-logo" alt="image's"/>
                <img src={Gep} className="company-logo" alt="image's"/>
            </div>
            <div className="recruitor-div-container">
                <img src={Impetus} className="company-logo" alt="image's"/>
                <img src={Indusos} className="company-logo" alt="image's"/>
                <img src={Infoedge} className="company-logo" alt="image's"/>
                <img src={Intuit} className="company-logo" alt="image's"/>
                <img src={Kicksdrum} className="company-logo" alt="image's"/>
            </div>
            <div className="recruitor-div-container">
                <img src={Maq} className="company-logo" alt="image's"/>
                <img src={Modak} className="company-logo" alt="image's"/>
                <img src={Nagarro} className="company-logo" alt="image's"/>
                <img src={Newzera} className="company-logo" alt="image's"/>
                <img src={Nextuple} className="company-logo" alt="image's"/>
            </div>
            <div className="recruitor-div-container">
                <img src={Openfive} className="company-logo" alt="image's"/>
                <img src={Planetspark} className="company-logo" alt="image's"/>
                <img src={Saggezza} className="company-logo" alt="image's"/>
                <img src={Truechip} className="company-logo" alt="image's"/>
                <img src={Toshiba} className="company-logo" alt="image's"/>
            </div>
        </div>
    )
}

export default recruitors
