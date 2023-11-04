import React from 'react'

import logo from '../../assets/subheader/sms-logo.png'
import health from '../../assets/subheader/health.png'
import Rutgers_University from '../../assets/subheader/Rutgers_University.png'
import Rutgers_Logo from '../../assets/subheader/rutgers.png'
import { Link } from 'react-router-dom'

function SubHeader({mainText, subtext}) {
    return (
        <div className='subHeader'>
            <div className='subHeader-logos'>

                <div className='logos-right'>
                    <Link to={'/'}>

                    <img src={logo} alt='Saude Medical Services logo'></img>
                    <h1>Saude Medical Services</h1>
                    </Link>
                </div>
                <div className='logos-left'>
                    <img src={health} alt='MC Afee logo'></img>
                    <img src={Rutgers_Logo} alt='norton logo'></img>
                </div>
            </div>
            <div className='subHeader-title'>
                <h1>{mainText}</h1>
                <p>{subtext}</p>
            </div>
        </div>
    )
}

export default SubHeader