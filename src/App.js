import React from 'react';
import Menu from './components/Menu'
import Footer from './components/Footer';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import dadosIniciais from'./data/dados_iniciais.json';

function App() {
  return (
    <div style={{ background: "#141414" }} >
      <Menu/>
      <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[1].titulo}
      url={dadosIniciais.categorias[0].videos[1].url}
      videoDescription={"Ola eu sou o devCav"}
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[1]}
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[2]}
      /> 

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[3]}
      /> 
      <Footer/>
             
    </div>
  );
}

export default App;
