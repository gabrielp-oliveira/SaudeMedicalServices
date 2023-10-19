import React, {useState} from 'react';
import './App.css';
import './responsive.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import StepsOptions from './components/steps/StepsOptions';
import MainContent from './components/MainContent/MainContent';


function App() {

  const [lang, setALang] = useState('eng')
  return (
    <div>
      <Header setALang={setALang} lang={lang}></Header>
      {/* <StepsOptions></StepsOptions> */}
      <MainContent lang={lang}/>
      <Footer lang={lang}></Footer>
    </div>
  );
}

export default App;
