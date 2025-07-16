import React from 'react'
import { Link } from 'react-router'

const SmallSocialTrack = ({url, icon, label, preventNavigate = false}) => {
    return (
        <div>
            <Link
                href={url}
                target={`${preventNavigate ? '_self' : '_blank'}`}
                rel="noopener noreferrer"
                className="bg-white w-full flex font-inter items-center gap-[2px] px-1 py-[1px] border border-gray-200 rounded-xs shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200"
            >
                <img src={icon} className="w-2 h-2" />
                <span className="font-inter text-[8px] truncate">{label}</span>
            </Link>
        </div>
    )
}

export default SmallSocialTrack
