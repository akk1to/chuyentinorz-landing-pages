import styles from "./sections.module.scss";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import CareerItem from "@/components/sections/CareerItem";

const Positions = [{
  id: '0',
  title: 'SQRToj',
  slots: 1,
  contestlink: 'https://sqrtoj.edu.vn/contests/',
  description: `SQRToj is a online judges, the official OJ of SQRT club, working on sqrtoj.edu.vn`,
  location: 'admin@sqrtoj.edu.vn',
  salaryRange: 'sqrtoj.edu.vn'
}, {
  id: '1',
  title: 'QTOJ',
  slots: 1,
  contestlink: 'https://quangtrioj.edu.vn/',
  description: `Quang Tri Online Judges (QTOJ) is a onine judge, developed by students from Cam Lo High School, Quang Tri Province. You can visit QTOJ at quangtrioj.edu.vn`,
  location: 'awmpubg42@gmail.com',
  salaryRange: 'quangtrioj.edu.vn'
}, {
  id: '2',
  title: 'THQNOJ',
  slots: 1,
  contestlink: 'http://tinhocquangninh.ddns.net/',
  description: `Tin Hoc Quang Nam OJ (THQNOJ) is a online judge, based on DMOJ system. It was build for CP Team of Tran Phu High School, but nowadays it's become public. Visit THQNOJ at: tinhocquangning.ddns.net`,
  location: 'Discord: giorzang',
  salaryRange: 'tinhocquangninh.ddns.com'
}, {
  id: '3',
  title: 'TLEOJ (down)',
  slots: 1,
  contestlink: 'https://tleoj.edu.vn/',
  description: `TLEOJ is a online judge based on DMOJ. It was down recently, and we don't know when it will be back!`,
  location: '(null)',
  salaryRange: 'tleoj.edu.vn (down)'
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
