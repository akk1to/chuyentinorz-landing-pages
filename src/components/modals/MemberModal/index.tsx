import styles from "./styles.module.scss";
import NorthStudioIcon from "@/assets/icons/NorthStudio";
import CloseIcon from "@/assets/icons/CloseIcon";
import Envelope from "@/assets/icons/Envelope";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, X } from 'lucide-react';
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {useState} from "react";

interface MemberModalProps {
  open: boolean;
  member?: Member;
  onClose: () => any;
}

export default function MemberModal(props: MemberModalProps) {
  const [closing, setClosing] = useState(false);
  if (!props.open && !closing) return;
  const {member} = props;

  return <div
    className={`${styles.outer} ${closing ? styles.out : ''}`}
    onAnimationEnd={() => {
      setClosing(false);
    }}
  >
    <div className={styles.modalcontent}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.bg}></div>
          <div className={styles.closeBtn} onClick={() => {
            props.onClose();
            setClosing(true);
          }}>
            <CloseIcon/>
          </div>
          <div
            className={styles.avatar}
            style={{
              backgroundImage: `url('${member?.photo}')`
            }}
          >
          </div>
          <div className={styles.contactArea}>
            <div className={styles.contactBtn}>
              <Envelope/> <a href={member?.mail} className={styles.mailtext}>Mail</a>
            </div>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.name}>
            {member?.name}
          </div>
          <div className={styles.position}>
            {member?.position}
            <div className={styles.atSign}>
              at <NorthStudioIcon width={16} height={16} fill={'white'}/> Chuyen Tin Orz
            </div>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <Card className="bg-white/10 border-none">
              <CardContent className="pt-6 text-center">
                <h3 className={styles.sectionHeader}>
                  Skills
                </h3>
                <div className={styles.sectionContent}>
                  {member?.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <Card className="bg-white/10 border-none">
              <CardContent className="pt-6">
                <h3 className={styles.sectionHeader}>
                  Education
                </h3>
                <div className="space-y-2">
                  <h4 className={styles.sectionContent}>Study at {member?.educationSchool}</h4>
                  <p className={styles.sectionContent}>{member?.educationLevel} • Class of {member?.graduationYear}</p>
                </div>
              </CardContent>
            </Card>
          </div>  
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <Card className="bg-white/10 border-none">
              <CardContent className="pt-6">
                <h3 className={styles.sectionHeader}>
                  Experience
                </h3>
                <p className={styles.sectionContent}>
                Joined in {member?.onboarding} • {member?.experience} year{member?.experience !== 1 ? 's' : ''} of experience
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <Card className="bg-white/10 border-none">
              <h3 className={styles.sectionHeader}>
                Awards & Certificates
              </h3>
              <h4 className={styles.sectionContent}>Awards</h4>
              <div className={styles.sectionContent}>
                {member?.awards.map((award, index) => (
                  <Badge key={index} variant="secondary">
                    {award}
                  </Badge>
                ))}
              </div>
              <h4 className={styles.sectionContent}>Certificates</h4>
              <div className={styles.sectionContent}>
                {member?.certificates.map((certificate, index) => (
                  <Badge key={index} variant="secondary">
                    {certificate}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
}
