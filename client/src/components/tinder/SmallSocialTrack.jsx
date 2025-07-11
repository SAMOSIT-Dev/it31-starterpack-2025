import React from 'react'

const SmallSocialTrack = ({url, icon, label}) => {
    return (
        <div>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-full flex font-inter items-center gap-[2px] px-1 py-[1px] border border-gray-200 rounded-xs shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200"
            >
                <img src={icon} className="w-2 h-2" />
                <span className="font-inter text-[8px]">{label}</span>
            </a>
        </div>
    )
}

export default SmallSocialTrack
