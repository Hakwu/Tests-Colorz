import React, { useState } from 'react';
import Script from 'next/script';
import { useTranslation } from "next-i18next";

function WebsiteFooter(props) {
  const { t } = useTranslation('home');

  return (
    <>
      <footer style={{paddingTop:80, overflow:'hidden'}} className="bg-pattern">
        <div className="container">
          <div className="footer">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="footer-logo pb-25">
                  <img src="/images/logo.png" style={{width:189, height:42}}></img>
                </div>
                <div className="foot">
                <div className="subFoot">
                  <div style={{flexDirection:'column'}}>
                    <div style={{fontWeight:500, fontSize:22}}>{t('section-2.label')}</div>
                    <div style={{marginTop:10, fontWeight:400, fontSize:16}}>{t('section-2.title')}</div>
                    <div style={{fontWeight:400, fontSize:16}}>{t('exchanges.label')}</div>
                  </div>
                  <div style={{flexDirection:'column'}}>
                    <div style={{fontWeight:500, fontSize:22}}>{t('section-2.description')}</div>
                    <div style={{marginTop:10, fontWeight:400, fontSize:16}}>{t('section-2.features.1.title')}</div>
                    <div style={{fontWeight:400, fontSize:16}}>{t('section-2.features.1.title2')}</div>
                  </div>
                  <div style={{flexDirection:'column'}}>
                    <div style={{fontWeight:500, fontSize:22}}>{t('section-2.features.2.title')}</div>
                    <div style={{marginTop:10,fontWeight:400, fontSize:16}}>{t('section-2.features.2.description')}</div>
                    <div style={{fontWeight:400, fontSize:16}}>{t('section-2.features.2.description2')}</div>
                  </div>
                </div>
                <img src="/images/sndLogo.png" style={{width:85, height:76}}></img>
                </div>
              </div>
          </div>
        </div>

        </div>
      </footer>
      <Script src="/js/jquery-3.4.1.min.js" strategy="beforeInteractive"/>
      <Script src="/js/bootstrap.min.js" />
      <Script src="/js/snap.svg-min.js" />
      <Script src="/js/jquery.listtopie.min.js" />
      <Script src="/js/animation.js" />
      <Script src="/js/custom.js" />
    </>
  );
}

export default WebsiteFooter;
