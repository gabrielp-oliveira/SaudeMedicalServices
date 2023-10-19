import React, {useCallback} from 'react'
import SubHeader from '../header/SubHeader'
import Map from '../map/map'
import contact from '../../dataTxt/contact'
import './contact.css'

function Contact({lang}) {

  const MapRender = useCallback(() => {
    return <Map />
  }, [lang])
  return (
    <>
      <SubHeader mainText={contact[lang].mainText} subtext={contact[lang].subText} />
      <div className='contact'>

        <ul>

          <li>
            <span>{contact[lang].domingo}</span>
            <span>
              13:00–18:00</span>
          </li>
          <li>
          <span>{contact[lang]['segunda-feira']}</span>
            <span>
              13:00–18:00</span>
          </li>
          <li>
            <span>{contact[lang]['terça-feira']}</span>

            <span>
              13:00–18:00
            </span>
          </li>
          <li>
            <span>{contact[lang]['quarta-feira']}</span>

            <span>
              13:00–18:00</span>
          </li>
          <li>
            <span>{contact[lang]['quinta-feira']}</span>

            <span>
              13:00–18:00</span>
          </li>
          <li>
            <span>{contact[lang]['sexta-feira']}</span>

            <span>13:00–18:00</span>
          </li>
          <li>
            <span>{contact[lang]['sabado']}</span>

            <span>{contact[lang].Closed}</span>
          </li>
        </ul>

    <div>

      <p>361 Lafayette St, Newark, NJ 07105</p>
      <span>+1 (973)5355-229</span>

        
        <MapRender />
    </div>
      </div>
    </>
  )
}

export default Contact