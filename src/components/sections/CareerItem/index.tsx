import React from "react";
import styles from "./styles.module.scss";
import LocationPin from "@/assets/icons/LocationPin";
import MoneyCheck from "@/assets/icons/MoneyCheck";

interface CareerItemProps {
  title: string,
  description: string,
  contestlink: string,
  website: string,
  mailadress: string,
  websiteLink: string,
  mailadressLink: string,
}

export default function CareerItem({title, description, contestlink, website, mailadress, websiteLink, mailadressLink}: CareerItemProps) {
  return <div className={styles.outer}>
    <div className={styles.inner}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.description}>
        {description}
      </div>
      <div className={styles.controls}>
        <div className={styles.btn}>
          <a href={contestlink} className={styles.contest}>Participate with us</a>
        </div>
      </div>
      <div className={styles.meta}>
        <div className={styles.salary}>
          <MoneyCheck/> <a href={mailadressLink} className={styles.contesttime}>{mailadress}</a>
        </div>
        <div className={styles.location}>
          <LocationPin/> <a href={websiteLink} className={styles.contesttime}>{website}</a>
        </div>
      </div>
      <div className={styles.positionHaunted}>
        {title.split('(')[0].trim()}
      </div>
    </div>
  </div>
}
