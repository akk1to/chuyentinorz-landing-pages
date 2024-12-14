import styles from "./sections.module.scss";
import SectionTitle from "@/components/shared/SectionTitle";
import React from "react";
import CareerItem from "@/components/sections/CareerItem";

const Positions = [{
  id: '0',
  title: 'Codeforces Div. 4 (demo)',
  slots: 1,
  contestlink: 'https://example.com',
  description: `demo text`,
  location: 'Codeforces (Online)',
  salaryRange: 'Easy'
}, {
  id: '1',
  title: 'Codeforces Div. 4 (demo)',
  slots: 1,
  contestlink: 'https://example.com',
  description: `demo text`,
  location: 'Codeforces (Online)',
  salaryRange: 'Easy'
}, {
  id: '2',
  title: 'Codeforces Div. 4 (demo)',
  slots: 1,
  contestlink: 'https://example.com',
  description: `demo text`,
  location: 'Codeforces (Online)',
  salaryRange: 'Easy'
}, {
  id: '3',
  title: 'Codeforces Div. 4 (demo)',
  slots: 1,
  contestlink: 'https://example.com',
  description: `demo text`,
  location: 'Codeforces (Online)',
  salaryRange: 'Easy'
}]

export default function Careers() {
  return <div
    className={styles.section} id={'career'}
  >
    <div className={styles.sectionContent}>
      <SectionTitle>
        Our Contests
      </SectionTitle>
      <div>
        You can become better with us by participating in some of these competitions that we have listed below
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
