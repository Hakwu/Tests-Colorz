import { useTranslation } from "next-i18next";
import { Typography } from "@mui/material";

import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import ConstructionIcon from "@mui/icons-material/Construction";


import React from "react";

export default function Exchanges() {
  const { t } = useTranslation('home');
  return (
    <section className="work-part pb-100" id="timeline">
      <div className="part" style={{display:'flex'}}>
        <div className="part2">
          <img src="/images/box.jpg"></img>
        </div>
        <div className="part3">
            <img style={{height:45, width:43}} src="/images/Vector.svg"></img>
            <h1>
                    {t('section-1.li-1')}
            </h1>
            <p className="first">
                  {t('section-1.li-2')}
            </p>
            <p className="second">
                  {t('section-1.li-3')}
            </p>
          </div>
      </div>
    </section>
  );
}
