import React from 'react'

import {ShowsSliderWrapper} from "./ShowsSlider.styles"
import SectionTitle from '../../SectionTitle/SectionTitle'

const ShowsSlider = ({sliderType,sliderTitle,showsData}) => {
  return (
    <ShowsSliderWrapper>
      <SectionTitle title={sliderTitle}/>
    </ShowsSliderWrapper>
  )
}

export default ShowsSlider