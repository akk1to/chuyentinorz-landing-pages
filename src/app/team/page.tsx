"use client";

import React, {useState} from "react";
import styles from "./styles.module.scss";
import SectionTitle from "@/components/shared/SectionTitle";
import MemberModal from "@/components/modals/MemberModal";
import {TeamMembers} from "@/configs/team.config";

export default function TeamPage() {
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | undefined>();
  return <div className={styles.outer}>
    <div className={styles.content}>
      <SectionTitle>
        Our Team
      </SectionTitle>

      <div className={styles.teamContainer}>
        {TeamMembers.map((mem, i) => (
          <div key = {i}
            className={`${styles.member} ${mem.xl ? styles[mem.type || 'xl'] : ''}`}
            style={{
              backgroundImage: `url(${mem.photo})`
            }}
            onClick={() => {
              setSelectedMember(mem);
              setModalOpened(true);
            }}
          >
            <div className={styles.name}>
              {mem.name}
            </div>
            <div className={styles.experience}>
              {new Date().getFullYear() - mem.onboarding + 1} <span>years</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <MemberModal
      open={modalOpened}
      member={selectedMember}
      onClose={() => {
        setModalOpened(false);
      }}
    />
  </div>
}
