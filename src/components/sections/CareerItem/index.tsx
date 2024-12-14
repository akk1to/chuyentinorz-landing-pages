import React from "react";
import styles from "./styles.module.scss";
import LocationPin from "@/assets/icons/LocationPin";
import MoneyCheck from "@/assets/icons/MoneyCheck";

interface CareerItemProps {
  title: string,
  description: string,
  contestlink: string,
  location: string,
  salaryRange: string
}

export default function CareerItem({title, description, location, salaryRange, contestlink}: CareerItemProps) {
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
          <MoneyCheck/> {salaryRange}
        </div>
        <div className={styles.location}>
          <LocationPin/> {location}
        </div>
      </div>
      <div className={styles.positionHaunted}>
        {title.split('(')[0].trim()}
      </div>
    </div>
  </div>
}
