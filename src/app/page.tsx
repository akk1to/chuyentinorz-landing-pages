"use client";
import styles from './page.module.css'
import { Analytics } from "@vercel/analytics/react";  
import { SpeedInsights } from "@vercel/speed-insights/next"
import HomeHero from "@/components/landing/HomeHero";
import AppHeader from "@/components/shared/Header";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Story from "@/components/sections/Story";
import Careers from "@/components/sections/Careers";

export default function Home() {
  return (
    <main className={styles.main}>
      <ThemeProvider>
        <AppHeader/>
        <HomeHero/>
        <Story/>
        <Careers/>
        <Analytics/>
        <SpeedInsights/>
      </ThemeProvider>
    </main>
  )
}
