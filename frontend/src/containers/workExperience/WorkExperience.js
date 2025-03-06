import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Ensure modules are imported
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);

  return (
    <div id="experience">
      <Fade bottom duration={1000} distance="20px">
        <div
          className="experience-wrapper"
          id="workExperience"
          style={{
            width: "90%",
            padding: "20px 10px",
            margin: "0 auto",
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "100%" }}> {/* Ensure Swiper has full width */}
            <h1 className="experience-heading">Experiences</h1>
            <Swiper
              modules={[Pagination, Autoplay]}
              navigation={false} // Enable navigation arrows
              pagination={{ clickable: true }}
              autoplay={{ delay: 10000 }}
              loop={false}
              spaceBetween={25}
              slidesPerView={3} // Default to 3 slides
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }}
              className="experience-carousel"
              style={{ width: "100%", maxWidth: "1300px" }} // Ensure Swiper takes full width
            >
              {workExperiences.experience.map((card, i) => (
                <SwiperSlide key={i} className="experience-card" style={{ height: "100%" }}>
                  <ExperienceCard
                    isDark={isDark}
                    cardInfo={{
                      company: card.company,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      descBullets: card.descBullets,
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Fade>
    </div>
  );
}
