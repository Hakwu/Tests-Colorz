import React, {useState} from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MainSection from "@components/view/home/MainSection";
import HowSection from "@components/view/home/HowSection";
import Faq from "@components/view/home/Faq";
import Features from "@components/view/home/Features";
import Exchanges from "@components/view/home/Exchanges";
import Apps from "@components/view/home/Apps";
import Modal from "@components/ui/Modal";

function Home(props) {
  const [variable, setVariable] = useState(false);
  const updateVariable = (newValue) => {
    setVariable(true); 
  };
  const handleClose = (value) => {
    setVariable(false)
  }

  return (
    <div>
      <link rel="stylesheet" href="https://use.typekit.net/yfd3jhb.css"></link>
      <MainSection />
      <HowSection updateVariable={updateVariable}/>
      <Modal style={{justifyContent:'center', textAlign:'center'}} onClose={handleClose} open={variable} >
          <div className="Modalbox">
          <img style={{height:73,width:73, marginBottom:20}} src="/images/monk.png"></img>
          <div className='comp1' >Vous y avez (vraiment?) cru ?</div>
          <div className='comp2'>En tout cas, on espère que ça vous a fait sourire, parce qu’on en a bien besoin en ce moment. Et sinon, vous avez sûrement des produits plus intéressants à vendre.</div>
          <div className='comp3'>Ça tombe bien, nos équipes sont plus fortes en communication digitale qu’en innovations en carton.</div>
          </div>
        </Modal>
      <Features />
      <Exchanges />
      <Apps />
    </div>
  );
}

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home', 'notifications'])),
    },
  };
}
