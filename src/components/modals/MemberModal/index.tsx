import styles from "./styles.module.scss";
import NorthStudioIcon from "@/assets/icons/NorthStudio";
import CloseIcon from "@/assets/icons/CloseIcon";
import Envelope from "@/assets/icons/Envelope";
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
            at <NorthStudioIcon width={16} height={16} fill={'white'}/> NorthStudio
          </div>
        </div>
      </div>
    </div>
  </div>
}
