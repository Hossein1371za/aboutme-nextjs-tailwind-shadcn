"use client"

import { useSwiper } from "swiper/react"
import {PiCaretLeftBold,PiCaretRightBold} from "react-icons/pi"

const WorkSliderBtns = ({containerStyles,btnStyles,iconsStyles}) => {
    const swiper = useSwiper()
  return (
    <div className={containerStyles}>
        <buttom className={btnStyles} onClick={()=>swiper.slidePrev()}>
            <PiCaretRightBold className={iconsStyles}/>
        </buttom>
        <buttom className={btnStyles}  onClick={()=>swiper.slideNext()}>
            <PiCaretLeftBold className={iconsStyles}/>
        </buttom>
    </div>
  )
}

export default WorkSliderBtns