import React from 'react'
import './steps.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor, faCalendar, faStethoscope } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'
import stepOptions from '../../dataTxt/stepOptions'

function StepsOptions({lang}) {
  return (
    <div>
       <ul className='stepLists'>
        <Step icon={faUserDoctor} txt={stepOptions[lang].Doctor} url={"/about"}/>
        <Step icon={faCalendar} txt={stepOptions[lang].appointment} url={"/contact"}/>
        <Step icon={faStethoscope} txt={stepOptions[lang].services} url={"/about"}/>
       </ul>
    </div>
  )
}

export default StepsOptions

function Step({ txt, icon, url}){
  return(<>
  <li className='stepOption'>
  <span >

    <FontAwesomeIcon icon={icon}>
    </FontAwesomeIcon>
    <span>{txt}</span>
  </span>
  </li>
  
  </>)
}