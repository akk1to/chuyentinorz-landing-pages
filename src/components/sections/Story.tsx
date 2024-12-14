import React, {useEffect, useRef, useState} from "react";
import styles from "./sections.module.scss";
import SectionTitle from "@/components/shared/SectionTitle";
import StoryCarousel from "@/components/carousels/StoryCarousel";
import Story01 from "@/assets/figures/story-01.jpg";
import Story02 from "@/assets/figures/story-02.jpg";

const Slides = [{
  image: Story01.src,
  date: "DEC 07-08, 2024",
  title: <>
    <h3>
      Niềm đam mê <br></br> tin học
    </h3>
    <span>ChuyenTinORZ's Story</span>
  </>,
  content: <>
    <p>
      Được thành lập vào tháng 8 năm 2021, bởi kodomotachi (Trần Quốc Huy), hội tụ các bạn học sinh/sinh viên có niềm đam mê với tin học ở mọi miền trên đất nước.
      Mục tiêu của team là: <strong>phát triển cùng nhau trong lĩnh vực lập trình thi đấu</strong>. 
    </p>
    <p>
    Nhóm có một số thành viên tiêu biểu như: Đào Lê Bảo Minh (Glowcheese), Trần Quốc Huy (KodomoTachi), Nguyễn Nguyễn Gia Bảo (TrendBattles), giorzang, Jase Sous,... là những thành viên chủ chốt của nhóm.
    </p>
  </>
}, {
  image: Story02.src,
  date: "DEC, 2020",
  title: <>
    <h3>
      Câu chuyện Sản phẩm
    </h3>
    <span>NorthStudio' Story</span>
  </>,
  content: <>
    <p>
      Được sinh ra bởi những dự án cộng đồng, giá trị của NorthStudio được tạo dựng bởi những gì chúng tôi cống hiến,
      những sản phẩm tạo ra những đóng góp thực tế cho người dùng, cho xã hội.
    </p>
    <p>
      Ở NorthStudio, điều tiên quyết khi định hướng về những dự án, những sản phẩm và những tính năng, chúng tôi đều đề
      cao tính ứng dụng từ giai đoạn hình thành ý tưởng. Những sản phẩm của NorthStudio được lấy cảm hứng từ bất kỳ điều
      gì trong cuộc sống của một con người bình thường, từ việc ăn uống, học tập lẫn giao tiếp xã hội.
    </p>
    <p>
      Chúng tôi tin rằng với những bộ óc kỳ quặc sống trong một đời sống tầm thường cùng những tấm lòng sôi sục khát
      vọng cống hiến, những sản phẩm hữu ích sẽ được tạo ra.
    </p>
    <p style={{fontStyle: "italic"}}>
      "Không cần phải cao siêu, miễn là hoàn thiện và hữu dụng."
    </p>
  </>
}]

export default function Story() {
  const [activated, setActivated] = useState(false);
  const [index, setIndex] = useState(0);
  const outerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener('scroll', e => {
      if (outerRef.current?.offsetTop && outerRef.current?.offsetTop - window.scrollY < 300) {
        setActivated(true);
      }
    });
  }, []);

  return <div
    ref={outerRef}
    id={'story'}
    className={styles.section}
  >
    <div className={styles.sectionContent}>
      <SectionTitle>
        Our Journey
      </SectionTitle>
      <div>
        Journey from the beginning...
      </div>

      <StoryCarousel
        slides={Slides}
        index={index}
        date={Slides[index].date}
        activated={activated} image={Slides[index].image}
        onNext={() => setIndex(i => i + 1)}
        onPrev={() => setIndex(i => i - 1)}
        canGoNext={index < Slides.length - 1}
        canGoPrev={index > 0}
      />
      {activated && (
        <div className={styles.storyText} key={index}>
          <div className={`${styles.storyTextContent}`}>
            {Slides[index].content}
          </div>
          <div className={`${styles.storyTextTitle}`}>
            {Slides[index].title}
          </div>
        </div>
      )}

    </div>
  </div>
}
