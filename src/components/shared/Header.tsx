import React, {useEffect, useState} from "react";
import styles from "./Header.module.scss";
import {useThemeContext} from "@/components/providers/ThemeProvider";
import Hamburger from "@/assets/icons/Hamburger";
import {NavigationConfig} from "@/configs/app.config";
import NorthStudioIcon from "@/assets/icons/NorthStudio";

export default function AppHeader() {
  const {heroColors} = useThemeContext();
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowBg(window.scrollY > 100);
    });
  }, []);

  return <div
    className={styles.container}
    style={{
      color: heroColors.text,
      background: showBg ? heroColors.background : "transparent"
    }}
  >
    <div className={styles.headerContent}>
      <div className={styles.branding}>
        <NorthStudioIcon width={16} height={16} fill={heroColors.text} />
        ChuyenTinORZ
      </div>
      <div className={styles.links}>
        {NavigationConfig.map(item => (
          <a
            href={item.url} key={item.key} style={{color: heroColors.text}}
            onClick={function (e) {
              const href = (e.target as HTMLLinkElement).href;
              if (!href.includes('#')) return;
              e.preventDefault();
              const id = href.split('#').pop();
              if (!id) return;
              document.querySelector(`#${id}`)?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >
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
