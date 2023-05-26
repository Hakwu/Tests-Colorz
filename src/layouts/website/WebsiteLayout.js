import React, {useState} from 'react';
import Head from "next/head";
import theme from "../../theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import WebsiteHeader from "@layouts/website/WebsiteHeader";
import WebsiteFooter from "@layouts/website/WebsiteFooter";
// import Modal from "@components/view/home/Modal";
import Modal from "@components/ui/Modal";


function WebsiteLayout({ children }) {
  const [variable, setVariable] = useState(false);
  const updateVariable = (newValue) => {
    setVariable(true); 
  };
  const handleClose = (value) => {
    setVariable(false)
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/css/style.css"/>
        <link rel="stylesheet" type="text/css" href="/css/color.css"/>
        <link rel="stylesheet" type="text/css" href="/css/responsive.css"/>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <WebsiteHeader updateVariable={updateVariable}/>
        {children}
        <Modal style={{justifyContent:'center', textAlign:'center'}} onClose={handleClose} open={variable} >
          <div className="Modalbox">
          <img style={{height:73,width:73, marginBottom:20}} src="/images/monk.png"></img>
          <div className='comp1'>Vous y avez (vraiment?) cru ?</div>
          <div className='comp2'>En tout cas, on espère que ça vous a fait sourire, parce qu’on en a bien besoin en ce moment. Et sinon, vous avez sûrement des produits plus intéressants à vendre.</div>
          <div className='comp3'>Ça tombe bien, nos équipes sont plus fortes en communication digitale qu’en innovations en carton.</div>
          </div>
        </Modal>
        <WebsiteFooter />
      </ThemeProvider>
    </>
);
}

export default WebsiteLayout;
