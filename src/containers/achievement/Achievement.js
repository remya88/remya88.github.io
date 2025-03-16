import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import { achievementSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import AchievementCard from "../../components/achievementCard/AchievementCard";

export default function Achievement() {
  const { isDark } = useContext(StyleContext);
  if (!achievementSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]} // Use the necessary modules
              navigation={false} // Disable navigation arrows
              pagination={{ clickable: true }} // Enable pagination
              autoplay={{ delay: 5000 }} // Enable autoplay with delay
              loop={false} // Enable loop for infinite scrolling
              spaceBetween={30} // Space between items
              slidesPerView={3} // Show 3 slides by default
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }}
              className="achievement-carousel"
              style={{ width: "100%", maxWidth: "1300px" }} // Ensure Swiper takes full width
            >
              {achievementSection.achievementsCards.map((card, i) => (
                <SwiperSlide key={i} style={{ height: "100%" }}>
                  <AchievementCard
                    isDark={isDark}
                    cardInfo={{
                      title: card.title,
                      description: card.subtitle,
                      image: card.image,
                      imageAlt: card.imageAlt,
                      footer: card.footerLink,
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Fade>
  );
}
