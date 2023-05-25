import React from 'react';
import { useTranslation } from "next-i18next";
import FeatherIcon from "feather-icons-react";
import AccountBalanceWalletOutlined from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Box } from "@mui/material";
import CompareArrowsRounded from "@mui/icons-material/CompareArrowsRounded";
import { useTheme } from "@emotion/react";

import Slider from "@components/view/home/Slider";


function Features(props) {
  const theme = useTheme();
  const { t } = useTranslation('home');

  return (
    <section className="feature-part" id="team">
        <Slider/> 
      <div className="container">
        {/* <div className="row"> */}
          {/* <div className="col-md-12 wow fadeInUp">

          </div> */}
        {/* </div> */}
        {/* <div className="row">
          <div className="col-md-4 wow fadeInUp pb-80">
            <div className="feature-box">
              <Box className="feature-icon" color={theme.palette.primary.main}>
                <img src="https://media.licdn.com/dms/image/D5603AQGEczv4o2Jy1Q/profile-displayphoto-shrink_800_800/0/1680679904700?e=1686787200&v=beta&t=iTN3F4Z5nSwKvg02R7Fc_f89WP62d1TZjRnf1K9aZ2Q"></img>
              </Box>
              <div className="feature-contain pt-25">
                <div className="feature-title">{t('section-2.features.1.title')}</div>
                <p className="feature-des">{t('section-2.features.1.description')}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 wow fadeInUp pb-80">
            <div className="feature-box">
              <Box className="feature-icon" color={theme.palette.primary.main}>
                <img src="https://media.licdn.com/dms/image/D5603AQEfzoXLgClHZw/profile-displayphoto-shrink_800_800/0/1681964433349?e=1687996800&v=beta&t=JO9ZpOBOh3tEWjhm49wwAOgyQHsnetS9H8Le6Goa66k"></img>
              </Box>
              <div className="feature-contain pt-25">
                <div className="feature-title">{t('section-2.features.2.title')}</div>
                <p className="feature-des">{t('section-2.features.2.description')}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 wow fadeInUp pb-80">
            <div className="feature-box">
              <Box className="feature-icon" color={theme.palette.primary.main}>
                <img src="https://media.licdn.com/dms/image/D5603AQGjQY8Eo5ne1w/profile-displayphoto-shrink_800_800/0/1670604905249?e=1684972800&v=beta&t=Lxdjtg-mx3e3cZhW6ZHx36KRXUoRwK-aOXOohVtWaNk"></img>
            
              </Box>
              <div className="feature-contain pt-25">
                <div className="feature-title">{t('section-2.features.3.title')}</div>
                <p className="feature-des">{t('section-2.features.3.description')}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 wow fadeInUp pb-80">
            <div className="feature-box">
              <Box className="feature-icon" color={theme.palette.primary.main}>
                <img src="https://media.licdn.com/dms/image/D4E03AQEY5pV1Q5g60w/profile-displayphoto-shrink_800_800/0/1677111636804?e=1684972800&v=beta&t=Ll3FiI77wlCVh6Aac9WhWMmd2UQmbVNUNjIzmtqJVWo"></img>

              </Box>
              <div className="feature-contain pt-25">
                <a style={{color:'black'}} className="feature-title">{t('section-2.features.4.title')}</a>
                <p className="feature-des">{t('section-2.features.4.description')}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 wow fadeInUp pb-80">
            <div className="feature-box">
              <Box className="feature-icon" color={theme.palette.primary.main}>
                <img src="https://cdn.wallpapersafari.com/27/41/OzRPF4.png"></img>
              </Box>
              <div className="feature-contain pt-25">
                <div className="feature-title">{t('section-2.features.5.title')}</div>
                <p className="feature-des">{t('section-2.features.5.description')}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 wow fadeInUp pb-80">
            <div className="feature-box">
              <Box className="feature-icon" color={theme.palette.primary.main}>
                <img src="https://media.licdn.com/dms/image/D5603AQGBJsWZ5wcuXA/profile-displayphoto-shrink_800_800/0/1670311466088?e=1687996800&v=beta&t=1sf1H2qeNZcmTu7aVuY0wO0cEn189veyIKCf-HZYl8s"></img>
              </Box>
              <div className="feature-contain pt-25">
                <div className="feature-title">{t('section-2.features.6.title')}</div>
                <p className="feature-des">{t('section-2.features.6.description')}</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Features;
