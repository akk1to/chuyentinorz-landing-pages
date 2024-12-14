"use client";
import React, {useEffect, useState} from "react";
import styles from "./styles.module.scss";
import NorthStudioIcon from "@/assets/icons/NorthStudio";
import NorthStudioPattern from "@/assets/northstudio-pattern.svg";
import NorthStudioPatternLight from "@/assets/northstudio-pattern-light.svg";
import HomeHeroContent from "@/components/landing/HomeHeroContent";
import {useThemeContext} from "@/components/providers/ThemeProvider";

export interface HeroItem {
  title: string;
  bgColor: string;
  txtColor: string;
  meta: {
    images: string[];
    title: string;
    description: string;
  }
}

const items: HeroItem[] = [{
  title: 'Learn',
  bgColor: '#cafe0e',
  txtColor: '#232323',
  meta: {
    images: [
      'https://i.imgur.com/LbgsFhE.jpeg',
      'https://i.imgur.com/RLUq6Sq.png',
    ],
    title: `We're young developer`,
    description: `We focus on learning coding, with a particular emphasis on Competitive Programming. By solving problems daily, we continuously enhance our skills, working towards the goal of becoming professional developers in the future.`
  }
}, {
  title: 'Inspire',
  bgColor: '#ff6000',
  txtColor: '#ffffff',
  meta: {
    images: [
      'https://i.imgur.com/Ouql6tp.png',
      'https://i.imgur.com/G8OlmFP.png',
    ],
    title: `Empowered by passion`,
    description: `Empowered by passion, we are young coders on a mission to make technology accessible to everyone. Through courses, we aim to share our knowledge, spark creativity, and build a community where learning and innovation thrive. For us, coding is more than just code—it’s about solving problems and inspiring change.`
  }
}, {
  title: 'Grow',
  bgColor: '#232323',
  txtColor: '#ffffff',
  meta: {
    images: [
      'https://i.imgur.com/wIu2YBH.jpeg',
      'https://i.imgur.com/4x75ktZ.png',
    ],
    title: `Better together, day by day`,
    description: `We are a team of coders passionate about competitive programming. Through contests and collaboration, we push each other to grow, solve challenges, and celebrate victories. For us, it’s not just about winning—it’s about learning and improving as a team.`
  }
}]

export default function HomeHero() {
  const [textColor, setTextColor] = useState('#232323');
  const [locked, setLocked] = useState(false);
  const [bgColor, setBgColor] = useState('white');
  const [isLight, setIsLight] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [studio, setStudio] = useState('Studio');
  const {setHeroColors} = useThemeContext();

  const swapStudio = () => {
    if (studio === 'Coder') {
      setStudio('Learn');
    } else if (studio === 'Learn') {
      setStudio('Chat');
    }  else {
      setStudio('Coder');
    }
  }

  const reset = () => {
    if (locked) return;
    setTextColor('#232323');
    setBgColor('white');
    setIsLight(true);
    setShowContent(false);
  }

  useEffect(() => {
    if (setHeroColors) setHeroColors({
      text: textColor,
      background: bgColor,
    })
  }, [bgColor, textColor]);


  useEffect(() => {
    setTimeout(() => {
      setLocked(false);
    }, 30000);
  }, [locked]);

  return <div
    id={'home'}
    className={styles.homeHero}
    style={{
      backgroundImage: `url(${isLight ? NorthStudioPattern.src : NorthStudioPatternLight.src})`,
      backgroundColor: bgColor,
      color: textColor,
    }}
  >
    <div className={styles.homeHeroMeta}>
      {showContent ? (
        <HomeHeroContent
          item={selectedItem}
        />
      ) : (
        <div className={styles.logoWrapper}>
          <NorthStudioIcon className={styles.icon} fill={textColor} onClick={swapStudio}/>
          <div className={styles.companyMeta}>
            <div className={styles.companyName}>
              ORZ
              <div className={styles.studioPart} onClick={swapStudio}>
                {studio}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

    <div className={styles.companyKeyPoints}>
      {items.map(item => (
        <div
          key={item.title}
          onMouseEnter={() => {
            if (!locked) {
              setBgColor(item.bgColor);
              setTextColor(item.txtColor);
              setShowContent(true);
              setSelectedItem(item);
            }
          }}
          onMouseLeave={reset}
          onClick={() => {
            setBgColor(item.bgColor);
            setTextColor(item.txtColor);
            setShowContent(true);
            setSelectedItem(item);
            setLocked(!(locked && selectedItem.title === item.title));
          }}
          className={(selectedItem.title === item.title && locked) ? styles.pickerSelected : undefined}
          style={{
            backgroundColor: textColor,
            color: bgColor
          }}
        >
          {item.title}
        </div>
      ))}
    </div>
  </div>
}
