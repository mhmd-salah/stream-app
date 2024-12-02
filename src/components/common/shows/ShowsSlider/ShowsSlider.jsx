import React from "react";

import { ShowsSliderWrapper } from "./ShowsSlider.styles";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Container } from "../../../../styles/global/default";
import { SliderWrapper } from "../../slider/Slider.styles";
import Slider from "react-slick/lib/slider";
import CustomNextArrow from "../../slider/CustomNextArrow";
import CustomPrevArrow from "../../slider/CustomPrevArrow";

const ShowsSlider = ({ sliderType, sliderTitle, showsData }) => {
  const settings = {};
  return (
    <ShowsSliderWrapper>
      <SectionTitle title={sliderTitle} />
      <Container>
        <SliderWrapper className="slider-wrapper">
          <Slider
            {...setings}
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
          ></Slider>
        </SliderWrapper>
      </Container>
    </ShowsSliderWrapper>
  );
};

export default ShowsSlider;
