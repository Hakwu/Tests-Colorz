import React, {useEffect, useState} from 'react';
import LogoIcon from "@layouts/logo/LogoIcon";
import { Button } from "@mui/material";
import { useTranslation } from "next-i18next";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function WebsiteHeader({updateVariable}) {
  const { t } = useTranslation('home');
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = () => {
    setIsToggled(!isToggled);
    updateVariable(isToggled);
  };

  return (
    <header className="transition">
      <div className="containerHead">
        <div className="row flex-align">
          <div className="col-lg-4 col-md-3 col-8">
            <div className="logo">
              <LogoIcon/>
            </div>
          </div>
          <div className="col-lg-8 col-md-9 col-4 text-right">
            <div className="menu-toggle">
            </div>
            <div className="menu">
            <ul className="d-inline-block">
                <li>
                  <Link href="#" noLinkStyle to="how" smooth={true} duration={100}>Low Solution</Link>
                </li>
              </ul>
              <ul className="d-inline-block">
                <li>
                  <Link href="#" noLinkStyle to="team" smooth={true} duration={100}>Low Technology</Link>
                </li>
              </ul>
              <ul className="d-inline-block">
                <li>
                  <Link href="#" noLinkStyle to="timeline" smooth={true} duration={100}>High Price</Link>
                </li>
              </ul>
                <ul className="d-inline-block">
                  <Button onClick={handleChange} style={{borderRadius:'150px', backgroundColor: '#F0380F', color:'white'}} variant="contained">Buy it</Button>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </header>
);
}

export default WebsiteHeader;
