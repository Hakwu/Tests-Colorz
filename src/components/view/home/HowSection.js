import React, {useState} from 'react';
import { useTranslation } from "next-i18next";
import { Button } from "@mui/material";

function HowSection({updateVariable}) {
  const { t } = useTranslation('home');
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = () => {
    setIsToggled(!isToggled);
    updateVariable(isToggled);
  };

  return (
    <section className="work-part ptb-100" id="how">
      <div className="container">
        <div className="row">
          <div className="col-md-12 wow fadeInUp">
            <div className="section-heading text-center pb-65">
              <p className="heading-des">{t('section-1.description')}</p>
              <p className="heading-des2">{t('section-1.description-2')}</p>
            </div>

          </div>
          <ul className="justify-center">
                  <Button onClick={handleChange} style={{borderRadius:'150px', height:58, width:138, backgroundColor: '#F0380F', color:'white'}} variant="contained">Buy it now</Button>
              </ul>
        </div>

      </div>
    </section>
  );
}

export default HowSection;
