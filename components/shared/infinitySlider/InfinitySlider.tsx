import React, { useState } from "react";
import styles from "./InfinitySlider.module.css";

interface InfinitySliderProps {
  slides: string[]; // Array of slide image URLs
}

const InfinitySlider: React.FC<InfinitySliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className={styles.sliderContainer}>
      <button className={styles.prevButton} onClick={handlePrevSlide}>
        Previous
      </button>
      <div className={styles.slideWrapper}>
        <div
          className={styles.slideTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className={styles.slide} key={index}>
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button className={styles.nextButton} onClick={handleNextSlide}>
        Next
      </button>
    </div>
  );
};

export default InfinitySlider;
