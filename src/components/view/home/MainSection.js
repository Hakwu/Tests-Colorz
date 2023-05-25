import React, {useEffect, useState} from 'react';
import { useTranslation } from "next-i18next";
// import AccessToken from "@services/AccessToken";


function MainSection() {
  const [isAuth, setIsAuth] = useState(false);
  const { t } = useTranslation('home');

  // useEffect(() => {
  //   setIsAuth(Boolean(AccessToken.get()));
  // }, []);

  return (
    <section className="home-banner">
      <div className="containerMain">
        <div className="row">
          <div className="col-lg-6 col-md-6 position-u flex-align wow fadeInLeft">
            <div className="banner-contain">
            <p className="banner-des">
                {t('h1-description')}
              </p>
              <h1 className="banner-heading">
                {t('h1')}
              </h1>
            </div>
          </div>


        </div>
        <div className="banner-img">
              <img src="images/prix.png" alt="banner" />
            </div>
      </div>
    </section>
  );
}

export default MainSection;
