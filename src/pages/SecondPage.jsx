import React, { useContext } from 'react'
import Header from '../UI/header/Header';
import Hero from '../component/hero/Hero';
import Footer from '../UI/footer/Footer';
import { DATA_CONTEXT } from '../context/AppContext';

const SecondPage = () => {
  const { data } = useContext(DATA_CONTEXT)
  if (data === null) {
    console.log('Заргузка данные');

  } else {
    console.log(data, '---------context----------');
  }

  return (
    <div>
      <Header />
      <Hero />
      <div>
        <h1>Arsen</h1>

      </div>
      <Footer />
    </div>
  )
}

export default SecondPage