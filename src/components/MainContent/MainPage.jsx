import React from 'react'
import office from '../../assets/office.jpg'
import mantena from '../../assets/mantena.png'


import Star from '../../assets/star.png'
import checkMark from '../../assets/tick-circle.png'
import rightArrow from '../../assets/Line 1.png'
import './mainContent.css'
import SubHeader from '../header/SubHeader'
import StepsOptions from '../steps/StepsOptions'

import mainPage from '../../dataTxt/mainPage'
import { Link } from 'react-router-dom'
function MainPage({lang}) {
  return (
    <>
    <SubHeader mainText={mainPage[lang].mainText } subtext={mainPage[lang].subtext}/>
    <StepsOptions lang={lang}/>
    <div className='specialContent'>
      <div className='productImage'>
        <img src={office} alt={mainPage[lang].officeAlt}></img>
        {/* <div className='review-user'>
          <div>
            <img className='user-pic' src={user} alt='circle user picture'></img>
            <div className='review-user-details'>
              <div className='review-stars'>
                <ul>
                  <li><img src={Star} alt='review star'></img></li>
                  <li><img src={Star} alt='review star'></img></li>
                  <li><img src={Star} alt='review star'></img></li>
                  <li><img src={Star} alt='review star'></img></li>
                  <li><img src={Star} alt='review star'></img></li>
                </ul>
              </div>
              <div>
                <span>Ken T.</span>
              <img src={verify} alt='vify certificate'></img>
              </div>
            </div>

          </div>
          <div className='user-depoiment'>
            <p>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
          </div>
        </div> */}
      </div>
      <section className='productContent'>
        <div className='productDetails'>
          <img src={mantena} alt='small product image'></img>
          <div>
            <div className='productDetails-description'>
              <h1>{mainPage[lang].mantena.title}</h1>
            </div>
            <div className='reviewStarts'>
              <img src={Star} alt='review star'></img>
              <img src={Star} alt='review star'></img>
              <img src={Star} alt='review star'></img>
              <img src={Star} alt='review star'></img>
              <img src={Star} alt='review star'></img>
            </div>
            <div className='quantity'>
              {/* <label htmlFor="checkbox-round"></label> <input type="checkbox" id="checkbox-round"/> */}
              <span>{mainPage[lang].mantena.space}</span></div>
            <p className='light-text'>
              {mainPage[lang].mantena.text}
              <br/> (973) 344-1644
              </p>
          </div>
        </div>
        {/* <p className='txt-responsive light-text'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p> */}

        <div className='product-advantages'>
          <ul>
            {mainPage[lang].adventages.map((adv, i) => {
              return <li key={i}>
                <img src={checkMark} alt='check mark' />
                {adv}
              </li> 
            })}
          </ul>
        </div>
        <div className='save'>
          <div>

            <span className='circle blue'>!</span>
            {mainPage[lang].regionAdventages}
          </div>
        </div>
        <div className='claim-container'>
          <div className='claim'>

      <Link to={'/contact'}>            <p>{mainPage[lang].contact}</p> <img src={rightArrow} alt='right arrow to claim dincount'></img>
</Link>

          </div>
          {/* <div className='claim-details'>
            <div>

            <div><p>Free shipping</p></div>
            <div><img src={lock} className='lock' alt='lock icon'></img> <p>Secure 256-bit SSL encryption.</p> </div>
            </div>
            <div className='paymentsOptions'>
              <img src={visa} alt='visa logo'></img>
              <img src={shopPay} alt='shop Pay logo'></img>
              <img src={paypal} alt='Pay Pal logo'></img>
              <img src={masterCard} alt='master card logo'></img>
              <img src={gpay} alt='google pay logo'></img>
              <img src={APay} alt='Apple pay logo'></img>
              <img src={amex} alt='Amex pay'></img>
            </div>
          </div>
          <div className='deny'><p>No thanks, I don’t want this.</p></div> */}
          {/* <div className='satisfaction-badge'>
            <img src={satisfaction} alt='Satisfaction guarantee badge'></img>
            <p className='light-text'>If you are not completely thrilled with your Clarifion - We have a <span>30 day satisfaction guarantee</span>. Please refer to our return policy at the bottom of the page for more details.<br/> Happy Shopping!</p>
          </div> */}
        </div>
.

      </section>
    </div>
    </>

  )
}

export default MainPage
