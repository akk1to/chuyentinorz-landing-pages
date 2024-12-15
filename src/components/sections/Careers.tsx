import styles from "./sections.module.scss";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import CareerItem from "@/components/sections/CareerItem";

const Positions = [{
  id: '0',
  title: 'SQRToj',
  slots: 1,
  contestlink: 'https://sqrtoj.edu.vn/',
  description: `SQRToj is a online judges, the official OJ of SQRT club, working on sqrtoj.edu.vn`,
  location: 'sqrtoj.edu.vn',
  salaryRange: 'admin@sqrtoj.edu.vn'
}, {
  id: '1',
  title: 'QTOJ',
  slots: 1,
  contestlink: 'https://quangtrioj.edu.vn/',
  description: `Quang Tri Online Judges (QTOJ) is a onine judge, developed by students from Cam Lo High School, Quang Tri Province. You can visit QTOJ at quangtrioj.edu.vn`,
  location: 'quangtrioj.edu.vn',
  salaryRange: 'awmpubg42@gmail.com'
}, {
  id: '2',
  title: 'THQNOJ',
  slots: 1,
  contestlink: 'http://tinhocquangninh.ddns.net/',
  description: `Tin Hoc Quang Nam OJ (THQNOJ) is a online judge, based on DMOJ system. It was build for CP Team of Tran Phu High School, but nowadays it's become public. Visit THQNOJ at: tinhocquangning.ddns.net`,
  location: 'tinhocquangninh.ddns.com',
  salaryRange: 'Discord: giorzang'
}, {
  id: '3',
  title: 'MarisaOJ',
  slots: 1,
  contestlink: 'https://marisaoj.com/',
  description: `MarisaOJ is a very good online judge for beginners, cause they sort all problems into each courses, based on the level of the problems. Visit MarisaOJ at: marisaoj.com`,
  location: 'marisaoj.com',
  salaryRange: 'letuanhoang67@gmail.com'
}]

export default function Careers() {
  return <div
    className={styles.section} id={'career'}
  >
    <div className={styles.sectionContent}>
      <SectionTitle>
        Online Judges
      </SectionTitle>
      <div>
        You can become better with us by participating in some of these online judges that we recommend below:
      </div>

      {Positions.map(pos => (
        <CareerItem
          key={pos.id}
          title={pos.title}
          description={pos.description}
          contestlink={pos.contestlink}
          location={pos.location}
          salaryRange={pos.salaryRange}
        />
      ))}
    </div>
  </div>
}
