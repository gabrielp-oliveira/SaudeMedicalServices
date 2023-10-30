import React, { useEffect, useState, useRef } from 'react'
import './header.css'
import arrowLeft from '../../assets/header/arrow-left.png'
import arrowRight from '../../assets/header/arrow-right.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup, faHouse, faLocationDot, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import BrazilFlag from '../../assets/brazil-flag-icon.svg'
import USaFlag from '../../assets/united-states-flag-icon.svg'
import spnFlag from '../../assets/Flag_of_Spain.svg'
import header from '../../dataTxt/header'

function Header({setALang, lang}) {
  const [current, setcurrent] = useState(1)
  const ATag = useRef(null)


  function callBackward() {
    if (current > 1) {
      setcurrent(current - 1)
    }
    ATag.current.click()

  }
  function callFoward() {
    if (current < 3) {
      setcurrent(current + 1)
    }
    ATag.current.click()
  }

  return (
    <>
      <header>
        {/* <a href={`#nav-header-slide-${current}`} style={{ display: 'none' }} ref={ATag}></a> */}
        <nav className='header-nav'>
          <ul>
            <ListItems lang={lang}/>
          </ul>
        </nav>

        <nav className='slider responsive-header-nav'>
          
        <span className='controlSlider' onClick={() => callBackward()} >
          <img src={arrowRight} alt='move left arrow icon' style={{transform: 'rotate(180deg)'}}/>
          </span>
        <HeaderResponsive current={current} ATag={ATag} />
        <span className='controlSlider' onClick={() => callFoward()}><img src={arrowRight} alt='move right arrow icon'/></span>
        </nav>

      </header>
      {/* <SubHeader></SubHeader> */}
      <div className='flags'>
      <img className='unselected' src={USaFlag}  onClick={() => setALang('eng')}/>
        <img src={BrazilFlag} onClick={() => setALang('pt-br')}/>
        <img src={spnFlag} onClick={() => setALang('es')}/>

      </div>

    </>
  )
}

export default Header

function ListItems({lang}) {
  return (<>
    <ItemComponent url={'/'} txt={header[lang].first} icon={faHouse} id="none"/>
    <ItemComponent url={'/about'} txt={header[lang].seccond} icon={faPeopleGroup} id="none"/>
    <ItemComponent url={'/contact'} txt={header[lang].third} icon={faLocationDot} id="none"/>
    {/* <ItemComponent txt={'get in touch'} icon={faAddressCard} id="none"/> */}
  </>
  )
}



function ItemComponent({ url, txt, icon }) {
  return (
    <li className='nav-headerItem'>
      <FontAwesomeIcon icon={icon} />
      <Link to={url}>{txt}</Link>
    </li>
  )
}

function HeaderResponsive({ current, ATag }) {
  return (<ul className="slides">
    <li id="slide-1" className='nav-headerItem'>

    <FontAwesomeIcon icon={faHouse} />
      <Link to='/'>Saude Medical Services</Link>
    </li>
    <li id="slide-2" className='nav-headerItem' >
    <FontAwesomeIcon icon={faPeopleGroup} />
      <Link to='about'>About our team</Link>
    </li>
    <li id="slide-3" className='nav-headerItem' >
    <FontAwesomeIcon icon={faLocationDot} />
      <Link to='contact'>How to find us</Link>
    </li>
    {/* <li id="slide-4" className='nav-headerItem' >
      <FontAwesomeIcon icon={faAddressCard} />
      <Link>get in touch</Link>
    </li> */}

    <a href={`#slide-${current}`} style={{ display: 'none', position: 'absolute', top: '-50px' }} ref={ATag}></a>

    </ul>
)
}
