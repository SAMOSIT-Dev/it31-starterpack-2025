import { HOUSES } from '@/libs/utils/tinder'
import React from 'react'

const HouseTag = ({house_name}) => {
    let tagColor
    switch (house_name) {
        case HOUSES.Romantica.name:
            tagColor = "bg-[#8E0D14]"
            break
        case HOUSES.Horrorin.name:
            tagColor = "bg-[#252D3D]"
            break
        case HOUSES.Fantasiax.name:
            tagColor = "bg-[#354DA4]"
            break
        case HOUSES.Scifora.name:
            tagColor = "bg-[#458F88]"
            break
        case HOUSES.Actovex.name:
            tagColor = "bg-[#FF3021]"
            break
        default:
            tagColor = "bg-[#000000]"
    }

    return <div className={`font-bodonixt px-2 rounded-full text-white text-[12px] flex justify-center items-center ${tagColor}`}>{house_name}</div>
}

export default HouseTag
