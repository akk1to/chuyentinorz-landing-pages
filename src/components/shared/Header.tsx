import React from "react";
import styles from "./Header.module.scss";
import {useThemeContext} from "@/components/providers/ThemeProvider";
import Hamburger from "@/assets/icons/Hamburger";
import {NavigationConfig} from "@/configs/app.config";
import NorthStudioIcon from "@/assets/icons/NorthStudio";

export default function AppHeader() {
  const {heroColors} = useThemeContext();
  return <div
    className={styles.container}
    style={{
      color: heroColors.text
    }}
  >
    <div className={styles.headerContent}>
      <div className={styles.branding}>
        <NorthStudioIcon width={16} height={16} fill={heroColors.text} />
        NorthStudio
      </div>
      <div className={styles.links}>
        {NavigationConfig.map(item => (
          <a href={item.url} key={item.key} style={{color: heroColors.text}}>
            {item.title}
          </a>
        ))}
        <a className={styles.hamburgerBtn}>
          <Hamburger color={heroColors.text}/>
        </a>
      </div>
    </div>
  </div>
}
