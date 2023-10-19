import React, {useEffect, useState} from 'react'
import './about.css'
import SubHeader from '../header/SubHeader'
import equipe from '../../assets/equipe.jpg'
import fullLogo from '../../assets/full-logo.jpg'
import txt from '../../dataTxt/about'

function About({ lang }) {
    
    useEffect(() => {
        console.log(txt[lang].subHeaderMainTxt)
    }, [lang])
    return (
        <>
            <SubHeader mainText={txt[lang].subHeaderMainTxt} subtext={txt[lang].subtext} />
            <div className='about'>

                <div className='aboutTop'>
                    <img src={equipe}></img>
                    <div>
                        <p>{txt[lang].welcome}</p>
                        <p>{txt[lang].welcome2}</p>
                    </div>
                </div>
                <ul>
                    {txt[lang].services.map((s, idx) => {
                        return <li key={idx}>{s}</li>
                    })}
                </ul>
                <div>

                    <h5>{txt[lang].nossosIdeais}</h5>


                    {txt[lang].ideaisList.map((i, idx) => {
                        return <p key={idx}>{i}</p>
                    })}
                </div>
                <div>
                    <img src={fullLogo} alt="" className='aboutLogo' />
                </div>


            </div>
        </>
    )
}

export default About